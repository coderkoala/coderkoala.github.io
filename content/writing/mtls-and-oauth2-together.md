---
title: mTLS and OAuth2 on the same call, step by step
date: 2026-10-05
project: kaede
seo: A practical walkthrough of integrating with an API that requires both mutual TLS and OAuth2 client credentials, and every way it fails.
summary: Some partner APIs want a client certificate on the connection and a bearer token on the request. Every way that goes wrong, in the order it went wrong for me.
---

Most APIs ask you to prove who you are once. Some cargo community systems ask twice: **mutual TLS** on the connection, so the server knows which machine is calling, and an **OAuth2 bearer token** on each request, so it knows which application. I built that integration for Kaede. None of the steps is hard on its own. The pain is that each one fails in a way that looks like a different problem.

Here they are in the order they bit me.

## 1. The certificate request

The partner wants a certificate signed by a CA they trust, issued for a key only you hold. So you generate the key yourself and send them a CSR (certificate signing request), never the key:

```bash
openssl req -new -newkey rsa:4096 -nodes \
  -keyout client.key -out client.csr \
  -subj "/C=NP/O=Your Company/CN=your-system.example.com"
```

**Trap:** the key never leaves your side. If a partner's onboarding form asks you to upload a private key, stop and ask why.

## 2. The certificate comes back, and it isn't the whole story

You get a PEM certificate. Sometimes it includes intermediate certificates, sometimes it doesn't. The server needs the chain to verify you, so the file you present should be the leaf followed by its intermediates.

**Trap:** a certificate and key that don't belong together fail the TLS handshake with an error that tells you nothing. So check the pair the moment it's entered, not on the first real call:

```php
$cert = openssl_x509_read($certPem);
$key  = openssl_pkey_get_private($keyPem, $passphrase);
if (! openssl_x509_check_private_key($cert, $key)) {
    throw new InvalidCredential('This key does not belong to this certificate.');
}
```

While you're there, read the expiry date and keep it. Certificates expire on a Saturday night, and you want a warning weeks ahead, not an outage.

## 3. Don't write the key to disk

The easy way to give curl a client certificate is a file path. That means a private key sitting in `/tmp`, in backups, maybe in a crash dump. Since curl 7.71 you can hand it the certificate and key as in-memory blobs instead:

```php
curl_setopt_array($ch, [
    CURLOPT_SSLCERT_BLOB => $certPem,
    CURLOPT_SSLKEY_BLOB  => $keyPem,
    CURLOPT_SSLCERTTYPE  => 'PEM',
]);
```

In Kaede the credentials live encrypted in the database, decrypted only for the request, and never touch the filesystem.

## 4. Trust only their CA

Partners, especially in test environments, often sit behind a private CA. The lazy fix is to turn verification off. Don't. Pin their CA bundle and turn the system store **off** for that request, so no public CA can vouch for an impostor:

```php
curl_setopt($ch, CURLOPT_CAINFO_BLOB, $partnerCaBundle);   // only this
curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, true);
```

**Trap:** the identity provider that issues tokens is often a *different* host with an ordinary public certificate. Pinning the partner's private CA there breaks the token call. The pin has to be configurable per endpoint.

## 5. The token request needs the certificate too

The OAuth2 client credentials grant (RFC 6749 §4.4) trades a client id and secret for an access token. What the docs rarely say: if the token endpoint sits behind the same mutual TLS gateway, **it also wants your certificate**. Without it, the handshake fails before your credentials are even read, and the error looks exactly like a bad certificate.

So the certificate is a transport layer under every call, token request included. Configured with one and not the other is an error, never a silent fallback to a plain connection.

## 6. Three ways to send a client secret

RFC 6749 says send the id and secret with HTTP Basic auth. Some servers want them in the form body instead. Some want a JSON body:

```
Authorization: Basic base64(id:secret)        ← the RFC default
grant_type=client_credentials&client_id=…     ← form body
{"grant_type":"client_credentials", …}         ← JSON, despite the RFC
```

All three exist in the wild. Make it a setting, default to the RFC, and expect to need the other two.

## 7. Cache the token, but not too long

Tokens last minutes to hours. Fetching one per message is slow and can trip rate limits, so cache it. Two rules:

- **Stop using it a minute early.** A token that expires while the request is in flight fails the request.
- **Key the cache to the credentials that minted it.** When someone rotates the secret, the old token must not outlive it.

And when the API answers 401 to a cached token, drop it and fetch a new one once. Not in a loop.

## 8. Know what "it worked" looks like

The nastiest one. When mutual TLS is required and your certificate isn't accepted, a common gateway setup answers **HTTP 400** with an HTML page saying no client certificate was sent. A connection test that only checks "did we get a response?" reports success.

So the connection test in Kaede reads the answer:

- any response means DNS, TCP and TLS worked;
- 401 or 403 means the certificate was fine and the token was refused;
- that specific 400 page means the certificate wasn't taken, and says so in words.

## 9. Make every failure say which layer failed

By the end, every error in the integration names its layer: certificate unreadable, key mismatch, certificate expired, handshake refused, token endpoint refused, token rejected by the API, or the API refused the message itself. Most of these look identical from curl. Separating them turns a two-day support thread into a one-line answer.

## The checklist

1. Generate the key yourself and send only the CSR.
2. Validate the certificate, the key and the pair on entry, and record the expiry.
3. Keep keys encrypted at rest and in memory on the wire.
4. Pin the partner's CA per endpoint, and turn the system store off where you pin.
5. Present the certificate on the token request too.
6. Support all three ways of sending the client secret.
7. Cache tokens with a safety margin, keyed to the credential.
8. Test connections by reading the response, not just receiving one.
9. Name the layer in every error.
