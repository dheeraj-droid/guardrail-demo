# guardrail-demo

A demo target for [Guardrail](https://github.com/dheeraj-droid/Guardrail).This single repo
plays **both** roles (a monorepo):

- **Backend contract:** [`openapi.json`](openapi.json) — defines a `User` schema with
  `phoneNumber`, `age`, `email`, etc.
- **Frontend usage:** [`src/`](src/) — code that reads those fields:
  - `src/api/users.ts` — `user.phoneNumber` (property access)
  - `src/components/ProfileCard.tsx` — `const { phoneNumber: phone, age } = user` (destructuring; alias)
  - `src/utils/age.ts` — `user.age` (property access)

## How to test Guardrail with it

Open a PR that changes `openapi.json` in a breaking way — e.g. delete `phoneNumber` or
change `age` from `integer` to `string`. Guardrail scans `src/`, finds the still-live
usages, and **fails the PR check** with the exact file/line locations. A non-breaking
change (or one the frontend doesn't use) **passes**.
