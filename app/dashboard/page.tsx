"use client";

import darkModeBackground from "../../public/dark-mode-background.jpg";
import { signOut } from "../lib/actions/auth-actions";
import { useSession } from "../lib/hooks";

export default function DashboardPage() {
  const session = useSession()
  console.log(session);
  return (
    <main className="text-white">
      <div
        className="h-screen w-screen bg-cover bg-center"
        style={{ backgroundImage: `url(${darkModeBackground.src})` }}
      >
        Dashboard
        <button
          className="border rounded-md p-2 cursor-pointer hover:bg-[#294bd6]"
          onClick={signOut}
        >
          Sign out
        </button>
      </div>
    </main>
  );
}
