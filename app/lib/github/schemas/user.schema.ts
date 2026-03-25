import * as z from "zod";

export const GithubUserSchema = z.object({
  avatar_url: z.url(),
  bio: z.string().nullable(),
  events_url: z.url(),
  followers: z.number(),
  following: z.number(),
  login: z.string(),
  name: z.string().nullable(),
  public_repos: z.number(),
});

export type GithubUser = z.infer<typeof GithubUserSchema>;
