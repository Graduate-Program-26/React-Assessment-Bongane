import { Avatar, Button, Card, Group, Text } from "@mantine/core";
import classes from "./styles/AvatarCard.module.scss";
import { GithubUser } from "../lib/github/schemas/user.schema";

interface AvatarCardProps {
  user: GithubUser;
}

export default function AvatarCard({ user }: AvatarCardProps) {
  return (
    <Card padding="xl" radius="md" className={classes.card}>
      <Card.Section h={50} />
      <Avatar
        src={user.avatar_url}
        size={80}
        radius={80}
        mx="auto"
        mt={-30}
        className={classes.avatar}
        alt={user.name || ""}
      />
      <Text ta="center" fz="lg" fw={500} mt="sm">
        {user.login}
      </Text>
      <Text ta="center" fz="sm" c="dimmed">
        {user.bio || "Bio"}
      </Text>
      <Group mt="md" justify="center" gap={30}>
        <div key={"Followers"}>
          <Text ta="center" fz="lg" fw={500}>
            {user.followers}
          </Text>
          <Text ta="center" fz="sm" c="dimmed" lh={1}>
            Followers
          </Text>
        </div>
        <div key={"Following"}>
          <Text ta="center" fz="lg" fw={500}>
            {user.following}
          </Text>
          <Text ta="center" fz="sm" c="dimmed" lh={1}>
            Following
          </Text>
        </div>
        <div key={"RepoCount"}>
          <Text ta="center" fz="lg" fw={500}>
            {user.public_repos}
          </Text>
          <Text ta="center" fz="sm" c="dimmed" lh={1}>
            Public Repos
          </Text>
        </div>
      </Group>
      {/* <Button fullWidth radius="md" mt="xl" size="md" variant="default">
        Follow
      </Button> */}
    </Card>
  );
}
