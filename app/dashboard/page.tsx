"use client";
import { authClient } from "../lib/auth-client";

export default function DashboardPage() {
  const session = authClient.useSession.get();
  console.log(session.data);
  return <p>The dashboard </p>;
}
