import { router } from "better-auth/api";
import { createAuthClient } from "better-auth/client";
import { redirect } from "next/navigation";
export const authClient = createAuthClient();

export async function signIn() {
  const data = await authClient.signIn.social({
    provider: "github",
    callbackURL: "/dashboard",
  });
}

export async function signOut() {
  await authClient.signOut({
    fetchOptions: {
      onSuccess: () => {
        redirect("/");
      },
    },
  });
}
