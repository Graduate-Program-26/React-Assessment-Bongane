import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { auth } from "./app/lib/auth";
import { headers } from "next/headers";
import { getSessionCookie } from "better-auth/cookies";

// This function can be marked `async` if using `await` inside
export async function proxy(request: NextRequest) {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  console.log(session);

  const sessionCookie = getSessionCookie(request);
  console.log(sessionCookie);
  if (!session) return NextResponse.redirect(new URL("/login", request.url));
}

// Alternatively, you can use a default export:
// export default function proxy(request: NextRequest) { ... }

export const config = {
  matcher: "/dashboard",
};
