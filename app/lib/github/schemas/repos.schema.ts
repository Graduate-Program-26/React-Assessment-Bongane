import * as z from "zod";

const GithubRepositorySchema = z.object({
  description: z.string().nullable(),
  full_name: z.string(),
  stargazers_count: z.number(),
  visibility: z.string(),
  updated_at: z.string(),
  languages_url: z.url(),
});

export const GithubRepositoriesSchema = z.array(GithubRepositorySchema);

export type GithubRepository = z.infer<typeof GithubRepositorySchema>;
