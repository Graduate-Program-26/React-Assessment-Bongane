"use client";

import { Overlay, Grid, Container, Text, Timeline } from "@mantine/core";
import classes from "./styles/Dashboard.module.scss";
import { getSession, signOut } from "../lib/actions/auth-actions";
import AvatarCard from "./avatar-card";

import RepoStats from "./repo-stats";
import { IconMessageDots } from "@tabler/icons-react";
import { RepoWithLanguages, SessionData, UserData } from "../lib/types";
import { useSession } from "../lib/hooks";
import { GithubUser } from "../lib/github/schemas/user.schema";
import { GithubRepository } from "../lib/github/schemas/repos.schema";

interface DashboardLayoutProps {
  user: GithubUser;
  repos: RepoWithLanguages[];
}

export default function DashboardLayout({ user, repos }: DashboardLayoutProps) {
  const session = useSession();

  console.log(session.session?.user);
  console.log(user);
  return (
    <div className={classes.wrapper}>
      <Overlay color="#000" opacity={0.65} zIndex={1} />
      <Container my="md">
        <Grid>
          <Grid.Col span={{ xs: 12, md: 4 }}>
            <AvatarCard user={user} />
          </Grid.Col>
          <Grid.Col span={{ xs: 12, md: 8 }}>
            <Grid>
              {repos.map((repo) => (
                <Grid.Col span={{ xs: 12, md: 4 }}>
                  {" "}
                  <RepoStats repo={repo} />
                </Grid.Col>
              ))}
            </Grid>
          </Grid.Col>
        </Grid>
      </Container>
      <Container px={10} mt={50} size="xs" style={{ zIndex: 5 }}>
        <Timeline
          color="grape"
          radius="md"
          active={3}
          lineWidth={3}
          bulletSize={22}
          align="left"
          style={{ zIndex: 5 }}
        >
          <Timeline.Item
            title="Code review"
            bullet={<IconMessageDots size={12} />}
            style={{ zIndex: 5 }}
          >
            <Text size="sm">
              <Text variant="link" component="span" inherit>
                Robert Gluesticker
              </Text>{" "}
              left a code review on your pull request
            </Text>
            <Text size="xs" mt={4}>
              12 minutes ago
            </Text>
          </Timeline.Item>
          <Timeline.Item
            title="Code review"
            bullet={<IconMessageDots size={12} />}
            style={{ zIndex: 5 }}
          >
            <Text size="sm">
              <Text variant="link" component="span" inherit>
                Robert Gluesticker
              </Text>{" "}
              left a code review on your pull request
            </Text>
            <Text size="xs" mt={4}>
              12 minutes ago
            </Text>
          </Timeline.Item>
        </Timeline>
      </Container>

      <div className={classes.inner}>
        <div className="h-screen w-screen bg-cover bg-center">
          Dashboard
          <button
            className="border rounded-md p-2 cursor-pointer hover:bg-[#294bd6]"
            onClick={signOut}
          >
            Sign out
          </button>
        </div>
      </div>
    </div>
  );
}
