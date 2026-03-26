"use client";

import { GitHubCalendar } from "react-github-calendar";
import { useSession } from "../lib/hooks";

export default function GithubCalendarComponent() {
  const session = useSession();
  return (
    <div style={{ position: "relative", zIndex: 10, marginBottom: 30 }}>
      <GitHubCalendar
        username={session.session?.user.name || "blebopo"}
        colorScheme="light"
        style={{ overflowX: "auto" }}
      />
    </div>
  );
}
