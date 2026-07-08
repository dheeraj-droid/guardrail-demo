// Frontend data layer. Uses fields from the User schema in openapi.json.

export interface Fetched {
  [key: string]: unknown;
}

export async function loadUser(id: string): Promise<Fetched> {
  const res = await fetch(`/api/users/${id}`);
  return (await res.json()) as Fetched;
}

/** Direct property access on `phoneNumber` — Guardrail detects this. */
export function formatUserLine(user: any): string {
  return `${user.fullName} — ${user.phoneNumber}`;
}
