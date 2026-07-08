// A small helper that reads `age` off the user.

/** Property access on `age` — Guardrail detects this when `age` changes type. */
export const isAdult = (user: { age: number }): boolean => user.age >= 18;
