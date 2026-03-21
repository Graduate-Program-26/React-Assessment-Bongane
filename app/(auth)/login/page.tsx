"use client";

import LoginForm from "@/app/ui/login-form";
import Navbar from "@/app/ui/navbar";
import { Suspense } from "react";
import darkModeBackground from "../../../public/dark-mode-background.jpg";

export default function LoginPage() {
  return (
    <main className="text-white">
      <div
        className="h-screen w-screen bg-cover bg-center"
        style={{ backgroundImage: `url(${darkModeBackground.src})` }}
      >
        <LoginForm />
      </div>
    </main>
  );
}
