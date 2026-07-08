// A UI component that reads user fields via destructuring.

export function ProfileCard({ user }: { user: any }) {
  // Destructuring with an ALIAS: the local variable is `phone`, but the SOURCE key is
  // `phoneNumber`. Guardrail matches the source key (phoneNumber), never the alias (phone).
  const { phoneNumber: phone, age } = user;

  return (
    <div className="profile-card">
      <p>Phone: {phone}</p>
      <p>Age: {age}</p>
    </div>
  );
}
