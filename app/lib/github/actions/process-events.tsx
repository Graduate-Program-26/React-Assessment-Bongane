import { paybin } from "better-auth";
import { GitHubEvent } from "../schemas/events.schema";
import { Timeline, Text} from "@mantine/core";
import zod from "zod";

function eventType(event: GitHubEvent){
  if(event.payload)
  switch(event.type){
    case "CommitCommentEvent":{
      break; 
    }
    case "CreateEvent": {
      return (
        <Timeline.Item
            title="Delete"
            style={{ zIndex: 5 }}
            key={event.payload.id}
          >
            <Text size="sm">
              <Text variant="link" component="span" inherit>
                {event.payload.sender}
              </Text>{" "}
              created {event.payload.ref_type}: {event.payload.ref}: 
            </Text>
            <Text size="xs" mt={4}>
              at {event.created_at.toDateString()}
            </Text>
          </Timeline.Item>);
    }
    case "DeleteEvent": {
      return (
        <Timeline.Item
            title="Delete"
            style={{ zIndex: 5 }}
            key={event.payload.id}
          >
            <Text size="sm">
              <Text variant="link" component="span" inherit>
                {event.payload.sender}
              </Text>{" "}
              deleted {event.payload.ref_type}: {event.payload.ref}: 
            </Text>
            <Text size="xs" mt={4}>
              at {event.created_at.toDateString()}
            </Text>
          </Timeline.Item>);
    }
    case "DiscussionEvent":{
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
    case "IssuesEvent" :{
      break;
    }
    case "MemberEvent" : {
      break;
    }
    case "PublicEvent" : {
      break;
    }
    case "PullRequestEvent" : {
      // Cast pull request event payload locally
      const pullRequest = event.payload.pull_request as { head: { ref: string }; base: { ref: string } };

      return (
        <Timeline.Item
            title="Pull request"
            style={{ zIndex: 5 }}
            key={event.payload.id}
          >
            <Text size="sm">
              <Text variant="link" component="span" inherit>
                {event.payload.sender}
              </Text>{" "}
              {event.payload.action} from {pullRequest.head.ref} to {pullRequest.base.ref}: 
            </Text>
            <Text size="xs" mt={4}>
              created at {event.created_at.toDateString()}
            </Text>
          </Timeline.Item>);
    }
    case "PullRequestReviewEvent" : {
      const pullRequestReview = event.payload.pull_request as { head: { ref: string }; base: { ref: string } };
      return (
        <Timeline.Item
            title="Pull request review"
            style={{ zIndex: 5 }}
            key={event.payload.id}
          >
            <Text size="sm">
              <Text variant="link" component="span" inherit>
                {event.payload.sender}
              </Text>{" "}
              {event.payload.action} for the pull request {pullRequestReview.head.ref} to {pullRequestReview.base.ref}: 
            </Text>
            <Text size="xs" mt={4}>
              created at {event.created_at.toDateString()}
            </Text>
          </Timeline.Item>);
    }
    case "PullRequestReviewCommentEvent" : {
      const pullRequestReviewComment = event.payload.pull_request as { head: { ref: string }; base: { ref: string } };
      return (
        <Timeline.Item
            title="Pull request comment"
            style={{ zIndex: 5 }}
            key={event.payload.id}
          >
            <Text size="sm">
              <Text variant="link" component="span" inherit>
                {event.payload.sender}
              </Text>{" "}
              {event.payload.action} on {pullRequestReviewComment.head.ref} to {pullRequestReviewComment.base.ref} pull request: 
            </Text>
            <Text size="xs" mt={4}>
              created at {event.created_at.toDateString()}
            </Text>
          </Timeline.Item>);
    }
    case "PushEvent":{
      return (
        <Timeline.Item
            title="Push"
            style={{ zIndex: 5 }}
            key={event.payload.id}
          >
            <Text size="sm">
              <Text variant="link" component="span" inherit>
                {event.payload.sender}
              </Text>{" "}
              pushed to {event.payload.ref}
            </Text>
            <Text size="xs" mt={4}>
              created at {event.created_at.toDateString()}
            </Text>
          </Timeline.Item>);
    }
    case "ReleaseEvent":{
      break;
    }
    case "WatchEvent":{
      break;
    }
    default :{
      return null;
    }
  }
  

  
}

export function processEvents(events: GitHubEvent[]){
   return events.slice(0, 10).map(event => eventType(event))
}