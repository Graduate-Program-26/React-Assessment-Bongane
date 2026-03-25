import * as z from "zod";

export const GithubLanguagesSchema = z.record(z.string(), z.number());

export type GitHubLanguages = z.infer<typeof GithubLanguagesSchema>;
