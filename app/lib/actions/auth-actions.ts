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
