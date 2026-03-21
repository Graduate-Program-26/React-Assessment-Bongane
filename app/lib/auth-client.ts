import { createAuthClient } from "better-auth/client";
export const authClient = createAuthClient();

export async function signIn() {
  const data = await authClient.signIn.social({
    provider: "github",
    callbackURL: "/dashboard",
  });
}
