import Navbar from "./ui/navbar";
import HeroSection from "./ui/hero-section";
import { getToken } from "./lib/actions/auth-actions";
import { GithubUser } from "./lib/github/schemas/user.schema";
import {
  GithubUserResult,
  GithubUserResultsSchema,
} from "./lib/github/schemas/userResult.schema";

async function searchGitHubUsers(query: string): Promise<GithubUserResult[]> {
  const token = await getToken();
  const response = await fetch(
    `https://api.github.com/search/users?q=${encodeURIComponent(query)}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
        "X-Github-Api-Version": "2026-03-10",
        Accept: "application/vnd.github+json",
      },
    },
  );

  if (!response.ok) {
    const error = await response.text();
    throw Error(`Github Api Error: ${response.status}-${error}`);
  }

  const data = await response.json();
  const emptyResults: GithubUserResult[] = [];
  return GithubUserResultsSchema.parse(data.items) ?? emptyResults;
}

export default async function Home(props: {
  searchParams?: Promise<{
    query?: string;
    page?: string;
  }>;
}) {
  return (
    <main className="h-screen ">
      <Navbar showAuth={true} showSearch={false} query="" />
      <HeroSection />
    </main>
  );
}
