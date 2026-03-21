"use client";

import { redirect } from "next/navigation";
import darkModeBackground from "../../public/dark-mode-background.jpg";
import { getSession, signOut } from "../lib/actions/auth-actions";
import { auth } from "../lib/auth";
import { useActionState, useEffect, useState } from "react";

interface SessionData {
  session: {
    id: string;
    createdAt: Date;
    updatedAt: Date;
    userId: string;
    expiresAt: Date;
    token: string;
    ipAddress?: string | null | undefined;
    userAgent?: string | null | undefined;
  };
  user: {
    id: string;
    createdAt: Date;
    updatedAt: Date;
    email: string;
    emailVerified: boolean;
    name: string;
    image?: string | null | undefined;
  };
}

export default function DashboardPage() {
  const [session, setSession] = useState<SessionData | null>(null);
  useEffect(() => {
    const curSession = async () => {
      const data = await getSession();
      setSession(data);
    };

    curSession();
  }, []);
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
