import { getToken } from "../../actions/auth-actions";

export async function searchGitHubUsers(query: string) {
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
  return data.items;
}
