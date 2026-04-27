<!--
Guidance for AI coding agents working in this repository.
Keep this file concise and focused on discoverable, actionable knowledge.
-->
# Copilot instructions — javascript (learning playground)

Purpose
- Help AI agents be immediately productive in this learning-focused JavaScript repo.

Quick context (what I saw)
- This repository is a small JavaScript learning workspace. See [README.md](README.md).
- Notable files: [.github/datatypeconversion.js](.github/datatypeconversion.js) and [.github/conversionOperation.js](.github/conversionOperation.js) — simple example scripts with explanatory comments.
- Development container defined at [.devcontainer/devcontainer.json](.devcontainer/devcontainer.json) (Node devcontainer image).
- Dependabot configured for devcontainer updates in [.github/dependabot.yml](.github/dependabot.yml).
- No `package.json`, build scripts, or test harness were found at the time of inspection.

How to approach changes (high-value, low-risk)
- Treat the repo as a learning playground: prefer small, clearly explained edits rather than large refactors.
- Preserve the author's intent and inline comment style and language when editing example files.
- Before adding tooling (package.json, tests, linters, CI), ask the maintainer — do not scaffold these as assumptions.

Productivity checklist (step-by-step)
- 1) Search for `package.json`, `src/`, `test/`, `README.md`, and `.devcontainer/` to establish workflow.
- 2) If you need to run code locally, prefer the devcontainer image in [.devcontainer/devcontainer.json](.devcontainer/devcontainer.json). Example: open the project in a Codespaces/Dev Container.
- 3) If `package.json` exists, run `npm ci` and `npm test` (follow `scripts` entries). If no `package.json`, ask before introducing one.
- 4) When changing examples, include a one-line commit message that summarizes the intent (e.g., "clarify conversion example comment").

Patterns & conventions observed
- Example scripts in `.github/` are standalone learning snippets (no module exports, `console.log` for outputs).
- Comments mix English and Punjabi/Hinglish — maintain original voice when clarifying.
- Avoid moving these snippets into packages without explicit instruction from the maintainer.

Integration points & checks
- Dependabot only manages the devcontainer image (see [.github/dependabot.yml](.github/dependabot.yml)). If you change the devcontainer image, update that file accordingly.
- If adding Node tooling, document it in `README.md` and ensure developers can reproduce steps in the devcontainer.

When to create or modify tests/build
- Only add test/build tooling after confirming with the repository owner. If requested, prefer minimal tooling (single `package.json` + one `test` script) and document how to run it in `README.md`.

Examples (do this)
- Clarify a comment: edit [.github/datatypeconversion.js](.github/datatypeconversion.js) and change a sentence for clarity, keep console outputs unchanged.
- Add a README note: if you add any tooling, update [README.md](README.md) with exact commands to run inside the devcontainer.

When uncertain
- Ask a concise question in the PR describing the proposed change and the reason.

Feedback
- After making changes, include a short PR description and ask the maintainer if they want further restructuring (tests, packaging, CI).

-- EOF
