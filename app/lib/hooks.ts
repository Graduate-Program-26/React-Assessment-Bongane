import { useEffect, useState } from "react";
import { SessionData } from "./types";
import { getSession } from "./actions/auth-actions";

export function useSession() {
  const [session, setSession] = useState<SessionData | null>(null);
  useEffect(() => {
    const curSession = async () => {
      const data = await getSession();
      setSession(data);
    };

    curSession();
  }, []);
  return session;
}
