"use client";

import { useSession } from "../lib/hooks";
import DashboardLayout from "../ui/dashboard";
import Navbar from "../ui/navbar";

export default function DashboardPage() {
  const session = useSession();
  console.log(session);
  return (
    <main className="h-screen text-white">
      <Navbar showAuth={false} />
      <DashboardLayout />
    </main>
  );
}
