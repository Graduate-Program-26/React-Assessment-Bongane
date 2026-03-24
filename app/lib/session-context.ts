import { createContext } from "react";
import { SessionData } from "./types";

interface SessionContextType {
  session: SessionData | null;
}

export const SessionContext = createContext<SessionContextType>({
  session: null,
});
