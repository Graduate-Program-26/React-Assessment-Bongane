import * as z from "zod";

export const GithubUserResultSchema = z.object({
  avatar_url: z.url(),
  login: z.string(),
});

export const GithubUserResultsSchema = z.array(GithubUserResultSchema);

export type GithubUserResult = z.infer<typeof GithubUserResultSchema>;
