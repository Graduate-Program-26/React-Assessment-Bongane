"use client";
import { authClient } from "../lib/auth-client";
import darkModeBackground from "../../public/dark-mode-background.jpg";

export default function DashboardPage() {
  const session = authClient.useSession.get();
  console.log(session.data);
  return(
     <main className="text-white">
      <div
        className="h-screen w-screen bg-cover bg-center"
        style={{ backgroundImage: `url(${darkModeBackground.src})` }}
      >
        Dashboard
      </div>
    </main>
  );
}
