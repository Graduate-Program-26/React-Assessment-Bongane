"use client";

import Navbar from "./ui/navbar";
import HeroSection from "./ui/hero-section";
import { getSession, signIn } from "./lib/actions/auth-actions";
import { useSession } from "./lib/hooks";
import { Button } from "@mantine/core";
import { Session } from "inspector/promises";
import { SessionContext } from "./lib/session-context";

export default function Home() {
  const session = useSession();
  console.log(session);

  const loggedInButton = !session.session ? (
    <Button
      variant="gradient"
      gradient={{ from: "#7b9fe8", to: "#294bd6" }}
      onClick={signIn}
    >
      Log in
    </Button>
  ) : (
    <></>
  );
  return (
    <SessionContext.Provider value={{ session: session.session }}>
      <main className="h-screen ">
        <Navbar showAuth={true} />
        <HeroSection />
      </main>
    </SessionContext.Provider>
  );
}
