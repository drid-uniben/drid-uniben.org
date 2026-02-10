# Contributing

Thanks for your interest in contributing to **ibr-and-courses**.

This repo uses a lightweight GitHub Projects + issue/PR comment workflow automation (see `.github/workflows/*`). Please follow the steps below so issues and PRs move through the board correctly.

## Quick Start (Local Dev)

### Prerequisites

- Node.js (recommended: current LTS)
- pnpm (recommended). If you have Corepack enabled: `corepack enable`

### Install

```bash
pnpm install
```

### Run

```bash
pnpm dev
```

Then open http://localhost:3000.

### Before you open a PR

Run these locally:

```bash
pnpm lint
pnpm build
```

> Note: CI in this repository currently focuses on workflow automation for issues/PRs (assignment/status/labels). Treat `pnpm lint` and `pnpm build` as required checks.

## Branching & Pull Requests

- Default branch: `staging`
- Create a feature branch from `staging`:

```bash
git checkout staging
git pull
git checkout -b feat/<short-description>
```

- Open a PR back into `staging`.

### PR expectations

- Keep PRs focused and reasonably sized.
- Include a clear description of **what** changed and **why**.
- If the PR addresses an issue, make sure the PR body includes a closing reference, e.g. `Closes #123`.

## Issue Claiming Workflow (Important)

Maintainers triage issues into a GitHub Project named **IBR-TetFund-Review-System** and set their **Status**.

### Claim an issue

To claim an issue you want to work on, leave an issue comment containing only:

```
claim
```

Rules enforced by the workflow:

- The comment must be exactly `claim` (case-insensitive; surrounding whitespace/newlines are ignored).
- The issue must be on the project board.
- The issue must be in **Status: Unclaimed**.
- The issue must not already be assigned.

If successful, you will be assigned and the issue will move to **Status: Claimed**.

### Disclaim (unclaim) an issue

If you can’t continue, comment:

```
disclaim
```

If you are currently assigned, you’ll be unassigned and the issue will move back to **Status: Unclaimed**.

## Linking a PR to an Issue (Propose / Withdraw)

The repo includes automation that links a PR to its issue and updates project status.

### Propose a PR for an issue

After opening your PR, go back to the issue and comment using this format:

```
propose #<PR_NUMBER>
```

Accepted variations include `propose pr #<PR_NUMBER>` and flexible whitespace/casing.

If you are assigned to the issue, the workflow will:

- Append `Closes #<ISSUE_NUMBER>` to the PR body (if needed)
- Move the issue to **Status: In Progress**

### Withdraw a proposed PR

If you need to detach the PR from the issue, comment on the issue:

```
withdraw #<PR_NUMBER>
```

Accepted variations include `withdraw pr #<PR_NUMBER>`.

If you are assigned to the issue, the workflow will:

- Remove the `Closes #<ISSUE_NUMBER>` reference from the PR body
- Move the issue back to **Status: Claimed**

## Review Labels (PR Comments)

For pull requests, you can use comments to manage review state labels:

- Comment `awaiting-review` on the PR to add the `awaiting-review` label and remove `awaiting-author`.
- Comment `awaiting-author` on the PR to add the `awaiting-author` label and remove `awaiting-review`.

When `awaiting-review` is set, automation will also try to move the **related issue** to **Status: In Review** (it finds the issue number by reading `Closes #<ISSUE_NUMBER>` in the PR body).

## Code Style

- TypeScript + Next.js App Router lives in `app/`.
- Linting is via ESLint (`pnpm lint`).
- Prefer small, readable components and keep styling consistent with existing patterns (Tailwind CSS is configured).

## Getting Help

If you’re unsure about the right approach, open a draft PR early and describe the direction you’re taking, or ask a maintainer in the relevant issue thread.
