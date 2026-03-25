"use server";

import { redirect } from "next/navigation";
import { auth } from "../auth";
import { headers } from "next/headers";

export async function signIn() {
  const res = await auth.api.signInSocial({
    body: {
      provider: "github",
      callbackURL: "/dashboard",
    },
  });
  if (res.url) {
    redirect(res.url);
  }
}

export async function signOut() {
  await auth.api.signOut({
    headers: await headers(),
  });
  redirect("/");
}

export async function getSession() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  if (!session) {
    redirect("/");
  }
  return session;
}

export async function getToken(): Promise<string> {
  const tokenResponse = await auth.api.getAccessToken({
    body: {
      providerId: "github",
    },
    headers: await headers(),
  });

  if (!tokenResponse?.accessToken) {
    throw new Error("No access token found (user not authenticated)");
  }

  return tokenResponse.accessToken;
}
