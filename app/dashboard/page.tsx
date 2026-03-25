import { access } from "fs";
import { getSession, getToken } from "../lib/actions/auth-actions";
import DashboardLayout from "../ui/dashboard";
import Navbar from "../ui/navbar";
import {
  GithubUser,
  GithubUserSchema,
} from "../lib/github/schemas/user.schema";

async function getAuthenticatedUser(): Promise<GithubUser> {
  const token = await getToken();
  const response = await fetch(`https://api.github.com/user`, {
    headers: {
      Authorization: `Bearer ${token}`,
      Accept: "application/vnd.github+json",
      "X-GitHub-Api-Version": "2026-03-10",
    },
  });
  if (!response.ok) {
    const error = await response.text();
    throw new Error(`GitHub API error: ${response.status} - ${error}`);
  }
  const data = await response.json();

  return GithubUserSchema.parse(data);
}

export default async function DashboardPage() {
  const authenticatedUser = await getAuthenticatedUser();
  return (
    <main className="h-screen text-white">
      <Navbar showAuth={false} />
      <DashboardLayout user={authenticatedUser} />
    </main>
  );
}
