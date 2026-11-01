---
title: Integrating eSewa and Khalti in Laravel without trusting the redirect
seoTitle: eSewa and Khalti integration in Laravel, done safely
date: 2022-12-16
project: kalimati
seo: How to integrate eSewa and Khalti payments in Laravel safely: server-side verification, exact amounts, single-use references, queues and daily rollover.
summary: Most eSewa and Khalti tutorials stop when the success page loads. That's exactly where the fraud starts. A production pattern from a government payment page, for any Laravel app in Nepal.
---

eSewa and Khalti are how Nepal pays online. Integrating either into a Laravel app takes an afternoon: redirect the customer to the gateway, wait for them to come back, mark the order paid.

That last step is where most integrations go wrong. I built online payments for Kalimati Market's traders, on a government site where the people paying have every reason to want their dues to be cheaper. This is the pattern that held up.

## The one rule

**The redirect back to your site is a claim, not a proof.**

When the customer returns from eSewa or Khalti, the URL carries an amount, a reference and a status. All of it passed through the customer's browser, so all of it can be edited. A success page that marks an order paid from those query parameters can be fooled by anyone who copies a URL and changes a number.

So the return trip only **starts** verification. Your server finishes it by asking the gateway directly.

## The shape of a safe flow

```
1. Create a payment row     status = pending, amount = invoice total, our own uuid
2. Send the customer        to eSewa / Khalti with our uuid as the product id
3. Customer comes back      we read the gateway's reference from the request
4. Record it as unverified  never "paid" yet
5. Queue a verification     server → gateway: "did this reference pay this amount?"
6. Gateway says yes         status = verified, mark the dues paid
```

Steps 4 and 5 are the ones tutorials skip.

## The four checks

### 1. The amount must match exactly

Compare the amount the gateway reports with the invoice **you** stored, not with anything from the request. Compare as money, not as floats:

```php
// Store paisa as integers. Never compare floats for money.
if ((int) round($reported * 100) !== $payment->amount_paisa) {
    $payment->markRefused('amount_mismatch');
    return;
}
```

Khalti already works in paisa. eSewa works in rupees. Convert once, at the boundary.

### 2. A reference can be used once

Every successful payment has a gateway reference: eSewa's reference id, Khalti's `pidx` or transaction id. Before accepting one, make sure you've never seen it, and let the database enforce it:

```php
Schema::table('payments', function (Blueprint $t) {
    $t->string('gateway')->index();
    $t->string('gateway_reference')->nullable();
    $t->unique(['gateway', 'gateway_reference']);
});
```

A replayed receipt from last week, or from someone else's order, hits the unique index and goes nowhere.

### 3. Verify server to server, in a queue

Both gateways offer a server-side lookup: eSewa's transaction verification or status check, and Khalti's lookup by `pidx`. Call it from a queued job, not from the controller handling the redirect:

```php
class VerifyGatewayPayment implements ShouldQueue, ShouldBeUnique
{
    public $tries = 5;
    public $backoff = [10, 30, 60, 300, 900];

    public function __construct(public Payment $payment) {}
    public function uniqueId(): string { return $this->payment->uuid; }

    public function handle(GatewayClient $gateway): void
    {
        $result = $gateway->lookup($this->payment);   // server → gateway, with your secret key

        match (true) {
            $result->isComplete() && $result->amountPaisa === $this->payment->amount_paisa
                => $this->payment->markVerified($result->reference),
            $result->isPending() => $this->release(60),   // gateway still settling: try again
            default => $this->payment->markFailed($result->status),
        };
    }
}
```

Why a queue:

- **Gateways are slow sometimes.** A customer shouldn't stare at a spinner while you wait, and a timeout shouldn't lose a payment.
- **Retries are free.** If the gateway is down, the job tries again later instead of the payment silently staying unpaid.
- **One verification per payment.** `ShouldBeUnique` stops two refreshes of the success page from verifying twice.

The customer sees "payment received, confirming" until the job finishes. That's honest, and in practice it takes seconds.

### 4. Know which day it belongs to

If invoices are daily, as Kalimati's dues are, a payment started at 11:58 p.m. and finished at 12:01 a.m. belongs to an invoice that no longer exists. Refuse it rather than apply it to the wrong day. In Nepal that boundary is midnight Nepal time (UTC+5:45), not your server's UTC.

## Things that bite in Nepal specifically

- **Sandbox and live keys differ in more than the key.** The test endpoints and merchant codes are different hosts and values. Keep them in config, not in code, and fail loudly if production is pointed at a sandbox.
- **Amounts include service charges.** A gateway can report a total that includes its own fee or tax fields. Decide which number must equal your invoice, write it down, and test it in the sandbox with a real-looking amount, not 10 rupees.
- **The return URL can arrive twice.** People press back, refresh, or double-tap. Make the return handler idempotent: look up by your own uuid, and if it's already verified or queued, just show the status.
- **Bank transfer is still a payment method.** Many traders pay at a bank. Give staff a way to record those against the same invoice, so online and counter payments reconcile in one place.

## If a provider integrates with you

Sometimes a wallet or bank wants to build the payment into its own app and call your API instead. Then you're the one being called, so turn the rules around:

- Give each provider its own signing key and accept short-lived signed tokens (JWT, HS512 at minimum), only from their allow-listed IPs.
- Rotate keys on a schedule, and agree in advance how fast they'll switch.
- Make the completion call re-check the shop or order, the amount and their reference, and answer every refusal with a named error.
- During maintenance, say so explicitly, so they queue and retry instead of losing the payment.

## The checklist

1. Treat the redirect as a claim. Verify server to server.
2. Store money as integers, and compare against your own invoice.
3. Make the gateway reference unique in the database.
4. Verify in a unique, retrying queue job.
5. Respect your business day boundary, in Nepal time.
6. Make the return handler safe to hit twice.

If you'd like this built into your Laravel app, [let's talk](/consult).
