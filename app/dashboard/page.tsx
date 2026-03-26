import { getSession, getToken } from "../lib/actions/auth-actions";
import DashboardLayout from "../ui/dashboard";
import Navbar from "../ui/navbar";
import {
  GithubUser,
  GithubUserSchema,
  GithubUsersSchema,
} from "../lib/github/schemas/user.schema";
import {
  GithubRepository,
  GithubRepositoriesSchema,
} from "../lib/github/schemas/repos.schema";
import {
  GitHubLanguages,
  GithubLanguagesSchema,
} from "../lib/github/schemas/languages.schema";
import {
  GitHubEvent,
  GithubEventsSchema,
} from "../lib/github/schemas/events.schema";
import {
  GithubUserResult,
  GithubUserResultsSchema,
} from "../lib/github/schemas/userResult.schema";

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

export async function getEvents(username: string): Promise<GitHubEvent[]> {
  const token = await getToken();
  const response = await fetch(
    `https://api.github.com/users/${username}/events`,
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
  return GithubEventsSchema.parse(data);
}

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

export default async function DashboardPage(props: {
  searchParams?: Promise<{
    query?: string;
    page?: string;
  }>;
}) {
  const authenticatedUser = await getAuthenticatedUser();
  const session = await getSession();
  const userRepoitories = await getRepositories(session.user.name);
  const repoAndLanguages = await Promise.all(
    userRepoitories.map(async (repo) => {
      const languages = await getRepositoryLanguages(repo.languages_url);
      return { repo, languages };
    }),
  );
  const userEvents = await getEvents(session.user.name);

  const searchParams = await props.searchParams;
  const query = searchParams?.query || "";
  let users: GithubUserResult[] = [];
  if (query.length > 2) {
    users = await searchGitHubUsers(query);
  }
  return (
    <main className="h-screen text-white">
      <Navbar showAuth={false} showSearch={true} query={query} users={users} />
      <DashboardLayout
        user={authenticatedUser}
        repos={repoAndLanguages}
        activites={userEvents}
      />
    </main>
  );
}
