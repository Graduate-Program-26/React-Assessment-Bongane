"use client";
import { authClient, signOut } from "../lib/auth-client";
import darkModeBackground from "../../public/dark-mode-background.jpg";

export default function DashboardPage() {
  const session = authClient.useSession.get();
  console.log(session.data);
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
