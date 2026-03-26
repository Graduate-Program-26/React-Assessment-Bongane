import {
  CreateEventPayload,
  DeleteEventPayload,
  GitHubEvent,
  PullRequestPayload,
  PullRequestReviewCommentPayload,
  PullRequestReviewPayload,
  PushPayload,
} from "../schemas/events.schema";
import { Timeline, Text } from "@mantine/core";

function eventType(event: GitHubEvent) {
  if (event.payload)
    switch (event.type) {
      case "CommitCommentEvent": {
        break;
      }
      case "CreateEvent": {
        const createEventPayload = event.payload as CreateEventPayload;

        return (
          <Timeline.Item
            title="Create"
            style={{ zIndex: 5 }}
            key={createEventPayload.id}
          >
            <Text size="sm">
              <Text variant="link" component="span" inherit>
                {createEventPayload.sender}
              </Text>{" "}
              created {createEventPayload.ref_type}: {createEventPayload.ref}:
            </Text>
            <Text size="xs" mt={4}>
              at {event.created_at.toDateString()}
            </Text>
          </Timeline.Item>
        );
      }
      case "DeleteEvent": {
        const deleteEventPayload = event.payload as DeleteEventPayload;
        return (
          <Timeline.Item
            title="Delete"
            style={{ zIndex: 5 }}
            key={deleteEventPayload.id}
          >
            <Text size="sm">
              <Text variant="link" component="span" inherit>
                {deleteEventPayload.sender}
              </Text>{" "}
              deleted {deleteEventPayload.ref_type}: {deleteEventPayload.ref}:
            </Text>
            <Text size="xs" mt={4}>
              at {event.created_at.toDateString()}
            </Text>
          </Timeline.Item>
        );
      }
      case "DiscussionEvent": {
        break;
      }
      case "ForkEvent": {
        break;
      }
      case "GollumEvent": {
        break;
      }
      case "IssueCommentEvent": {
        break;
      }
      case "IssuesEvent": {
        break;
      }
      case "MemberEvent": {
        break;
      }
      case "PublicEvent": {
        break;
      }
      case "PullRequestEvent": {
        const pullRequestPayload = event.payload as PullRequestPayload;
        return (
          <Timeline.Item
            title="Pull request"
            style={{ zIndex: 5 }}
            key={pullRequestPayload.id}
          >
            <Text size="sm">
              <Text variant="link" component="span" inherit>
                {pullRequestPayload.sender}
              </Text>{" "}
              {pullRequestPayload.action} from{" "}
              {pullRequestPayload.pull_request.head.ref} to{" "}
              {pullRequestPayload.pull_request.base.ref}:
            </Text>
            <Text size="xs" mt={4}>
              created at {event.created_at.toDateString()}
            </Text>
          </Timeline.Item>
        );
      }
      case "PullRequestReviewEvent": {
        const pullRequestReviewPayload =
          event.payload as PullRequestReviewPayload;
        return (
          <Timeline.Item
            title="Pull request review"
            style={{ zIndex: 5 }}
            key={pullRequestReviewPayload.id}
          >
            <Text size="sm">
              <Text variant="link" component="span" inherit>
                {pullRequestReviewPayload.sender}
              </Text>{" "}
              {pullRequestReviewPayload.action} for the pull request{" "}
              {pullRequestReviewPayload.pull_request.head.ref} to{" "}
              {pullRequestReviewPayload.pull_request.base.ref}:
            </Text>
            <Text size="xs" mt={4}>
              created at {event.created_at.toDateString()}
            </Text>
          </Timeline.Item>
        );
      }
      case "PullRequestReviewCommentEvent": {
        const pullRequestReviewCommentPayload =
          event.payload as PullRequestReviewCommentPayload;
        return (
          <Timeline.Item
            title="Pull request comment"
            style={{ zIndex: 5 }}
            key={pullRequestReviewCommentPayload.id}
          >
            <Text size="sm">
              <Text variant="link" component="span" inherit>
                {pullRequestReviewCommentPayload.sender}
              </Text>{" "}
              {pullRequestReviewCommentPayload.action} on{" "}
              {pullRequestReviewCommentPayload.pull_request.head.ref} to{" "}
              {pullRequestReviewCommentPayload.pull_request.base.ref} pull
              request:
            </Text>
            <Text size="xs" mt={4}>
              created at {event.created_at.toDateString()}
            </Text>
          </Timeline.Item>
        );
      }
      case "PushEvent": {
        const pushPayload = event.payload as PushPayload;
        return (
          <Timeline.Item
            title="Push"
            style={{ zIndex: 5 }}
            key={pushPayload.id}
          >
            <Text size="sm">
              <Text variant="link" component="span" inherit>
                {pushPayload.sender}
              </Text>{" "}
              pushed to {pushPayload.ref}
            </Text>
            <Text size="xs" mt={4}>
              created at {event.created_at.toDateString()}
            </Text>
          </Timeline.Item>
        );
      }
      case "ReleaseEvent": {
        break;
      }
      case "WatchEvent": {
        break;
      }
      default: {
        return null;
      }
    }
}

export function processEvents(events: GitHubEvent[]) {
  return events.slice(0, 10).map((event) => eventType(event));
}
