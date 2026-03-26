import * as z from "zod";

const GithubEventSchema = z.object({
  type: z.string(),
  payload: z.unknown(),
  created_at: z.iso.datetime().transform((v) => {
    return new Date(v);
  }),
});

export const GithubEventsSchema = z.array(GithubEventSchema);

export type GitHubEvent = z.infer<typeof GithubEventSchema>;
