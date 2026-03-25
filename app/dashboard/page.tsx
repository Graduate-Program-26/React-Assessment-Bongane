import { getSession, getToken } from "../lib/actions/auth-actions";
import DashboardLayout from "../ui/dashboard";
import Navbar from "../ui/navbar";
import {
  GithubUser,
  GithubUserSchema,
} from "../lib/github/schemas/user.schema";
import {
  GithubRepository,
  GithubRepositoriesSchema,
} from "../lib/github/schemas/repos.schema";
import {
  GitHubLanguages,
  GithubLanguagesSchema,
} from "../lib/github/schemas/languages.schema";

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

async function getRepositories(username: string): Promise<GithubRepository[]> {
  const token = await getToken();
  const response = await fetch(
    `https://api.github.com/users/${username}/repos`,
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

  return GithubRepositoriesSchema.parse(data);
}

async function getRepositoryLanguages(
  repositoryUrl: string,
): Promise<GitHubLanguages> {
  const token = await getToken();
  const response = await fetch(`${repositoryUrl}`, {
    headers: {
      Authorization: `Bearer ${token}`,
      "X-Github-Api-Version": "2026-03-10",
      Accept: "application/vnd.github+json",
    },
  });

  if (!response.ok) {
    const error = await response.text();
    throw Error(`Github Api Error: ${response.status}-${error}`);
  }

  const data = await response.json();

  return GithubLanguagesSchema.parse(data);
}

export default async function DashboardPage() {
  const authenticatedUser = await getAuthenticatedUser();
  const session = await getSession();
  const userRepoitories = await getRepositories(session.user.name);
  const repoAndLanguages = await Promise.all(
    userRepoitories.map(async (repo) => {
      const languages = await getRepositoryLanguages(repo.languages_url);
      return { repo, languages };
    }),
  );

  return (
    <main className="h-screen text-white">
      <Navbar showAuth={false} />
      <DashboardLayout user={authenticatedUser} repos={repoAndLanguages} />
    </main>
  );
}
