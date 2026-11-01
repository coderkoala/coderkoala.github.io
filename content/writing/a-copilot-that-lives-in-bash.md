---
title: A copilot that lives in bash and asks before it acts
seoTitle: A local, bash-native copilot for DevOps
date: 2025-11-08
seo: My plan for a homebrew, local-first command-line copilot for DevOps work: a question mark in bash, local models on an 8 GB GPU, and a model that can only propose commands.
summary: The copilot I'm building into my dotfiles: one character in bash, local models on an 8 GB laptop GPU, memory that stays on the machine, and a model that can propose commands but never run them.
---

Most of my day is a terminal. A Laravel test fails, a container won't start, a certificate is about to expire, a migration needs a second look before it touches production. I keep reaching for an assistant, then copying output into a browser tab, then copying commands back. Every round trip loses context, and every pasted command is one I'm trusting a little too much.

So I'm building the assistant into my dotfiles instead. Not a product, not a startup: the tool I want on my own machines. This is what I'm aiming for, and why each piece is shaped the way it is.

## One character

The whole interface is a question mark:

```bash
? explain this Laravel exception
php artisan test 2>&1 | ? why does this fail
? --file app/Models/User.php explain the casts
? and how do I roll that back
? remember we deploy with Ansible from ci01
```

Piped output becomes context. Follow-ups remember the last few exchanges in this shell. `remember` is the only way anything goes into long-term memory: nothing from a conversation is stored unless I ask.

Getting `?` to work in bash without breaking globbing everywhere else is its own small puzzle. A bare `?` is a glob character. The answer is a function behind an alias that turns globbing off only for the arguments of that one command, not for the whole shell.

## Local first, because it's my code

The default model runs on the machine, through Ollama, on hardware I already own: an 8 GB laptop GPU. That decides everything about model choice.

- A **resident pair** stays loaded: a 7B coding model for real answers, and a 1.5B model for the instant stuff (commit messages, quick lookups) at well over a hundred tokens a second.
- **Heavier models load on demand**, only for the requests that need them, and let go of VRAM sooner.
- The installer reads the GPU and RAM and picks a tier: 8 GB, 4 GB, or CPU only. Nobody has to know model names.
- The model server listens on localhost only. If containers need to reach it, the installer opens it to Docker's subnets **only after** it has verified a firewall rule limiting it to them. If it can't verify that, it stays closed.

Cloud models are still there, explicitly, for the times a 7B model isn't enough. But my code, my logs and my clients' data don't leave the laptop by default.

## The model can propose. It can never run.

This is the part I care about most. An assistant that executes what a model says is one prompt injection away from `rm -rf`. So the pipeline is:

```
? request → context + memory → local model → action plan (JSON)
          → schema → policy → your approval → broker → sandbox | host | ssh
```

- **The model writes a plan, not a shell string.** Commands are argument lists. No `eval`, no strings glued together from model output.
- **The plan can't choose its own powers.** Mounts, images, users, capabilities and environment variables aren't fields in the plan's schema at all. The execution profile decides those.
- **Approval only goes up.** Reading is automatic. Installing something asks. Destructive operations, credentials and `sudo` need me to type `yes`. Touching production needs me to type the host's name. Approval is read from the terminal itself, so a piped `yes` can't answer it.
- **Some things are simply refused**: the Docker socket, `--privileged`, host namespaces, `/etc/shadow`, other processes' environments.

The test suite assumes the model is fully compromised, feeding it hostile text from a repository or a log, and checks the policy still holds. If the copilot turns against me, the worst it should manage is a plan I decline.

## A sandbox by default

When a plan does run, it runs in a throwaway container: no capabilities, no new privileges, non-root, read-only root filesystem, **no network**, resource limits, and images pinned by digest. It sees a copy of the workspace, never my home directory, sockets or secrets. Edits happen in a disposable git worktree, and promoting them into my real tree is a separate, confirmed step.

`baremetal` exists for when I genuinely need the host, inspecting systemd for example. It changes where a command runs. It never relaxes a rule.

## Built for DevOps days, not demos

Chat is the least of it. The useful part is a set of namespaces that run real tools through the same policy:

| | |
|---|---|
| `dotfiles-build` | tests, static analysis, formatting, queue and scheduler status for Laravel apps |
| `dotfiles-code-audit` | offline SAST rules, secret scanning, vulnerability and licence checks, SBOMs |
| `dotfiles-iac` | Compose config, Terraform validate and plan, `apply` only with a typed approval, Ansible check mode |
| `dotfiles-k8s` | pods, events, logs, diffs and dry runs; `apply` typed |
| `dotfiles-ops` | VPS health, certificate expiry, nginx and journal logs, Prometheus and Alertmanager queries, hardening checks |
| `dotfiles-perf` | benchmarks, comparisons, flame graphs |
| `dotfiles-backup` | Postgres dumps, and **restore drills** in a throwaway, network-less container |

Every task can be dry-run, and every one goes through the same validation as anything a model proposes. Personas, such as a DevOps engineer, an incident commander or a database engineer, change what the model pays attention to, not what it's allowed to do.

## Memory that stays put

Memory is a SQLite file with full-text search: no vector database, no embeddings by default. On a small GPU, the context window is the scarce resource, and a good keyword search with recency and categories gets the right three facts into the prompt more reliably than I expected. Secrets are redacted before anything is stored, and each category has its own retention.

## One line on a new machine

None of this matters if setting up a laptop takes a weekend. The dotfiles install with a single pinned command: it signs in to GitHub, clones the private repo, decrypts secrets that are stored encrypted with `age`, and runs a modular installer for shell, git, Docker, editors, GPU drivers, the models and the copilot. Everything is idempotent, has a dry run, and has a `doctor` that tells me exactly what's missing and how to fix it.

## What I'm not building

- **An autonomous agent.** It suggests; I decide.
- **A second cloud account.** Local by default, cloud on purpose.
- **A framework.** One specification file, JSON Schemas, a small Python core with almost no dependencies, and bash where bash is the right tool.

I'll publish the dotfiles once the edges are sanded down. For now, this is the shape of it: a copilot that's fast because it's local, useful because it knows my machine, and safe because it never gets to run anything I haven't read.
