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

export const CreateEventPayloadSchema = z.object({
  id: z.string(),
  sender: z.string(),
  ref_type: z.string(),
  ref: z.string(),
});

export type CreateEventPayload = z.infer<typeof CreateEventPayloadSchema>;

export const DeleteEventPayloadSchema = z.object({
  id: z.string(),
  sender: z.string(),
  ref_type: z.string(),
  ref: z.string(),
});

export type DeleteEventPayload = z.infer<typeof DeleteEventPayloadSchema>;

export const PullRequestPayloadSchema = z.object({
  id: z.string(),
  sender: z.string(),
  action: z.string(),
  pull_request: z.object({
    head: z.object({
      ref: z.string(),
    }),
    base: z.object({
      ref: z.string(),
    }),
  }),
});

export type PullRequestPayload = z.infer<typeof PullRequestPayloadSchema>;

export const PullRequestReviewPayloadSchema = z.object({
  id: z.string(),
  sender: z.string(),
  action: z.string(),
  pull_request: z.object({
    head: z.object({
      ref: z.string(),
    }),
    base: z.object({
      ref: z.string(),
    }),
  }),
});

export type PullRequestReviewPayload = z.infer<
  typeof PullRequestReviewPayloadSchema
>;

export const PullRequestReviewCommentPayloadSchema = z.object({
  id: z.string(),
  sender: z.string(),
  action: z.string(),
  pull_request: z.object({
    head: z.object({
      ref: z.string(),
    }),
    base: z.object({
      ref: z.string(),
    }),
  }),
});

export type PullRequestReviewCommentPayload = z.infer<
  typeof PullRequestReviewCommentPayloadSchema
>;

export const PushPayloadSchema = z.object({
  id: z.string(),
  sender: z.string(),
  action: z.string(),
  ref: z.string(),
});

export type PushPayload = z.infer<typeof PushPayloadSchema>;
