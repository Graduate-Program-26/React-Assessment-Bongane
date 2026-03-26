"use client";

import { Overlay, Grid, Container, Text, Timeline, Title } from "@mantine/core";
import classes from "./styles/Dashboard.module.scss";
import { signOut } from "../lib/actions/auth-actions";
import AvatarCard from "./avatar-card";

import RepoStats from "./repo-stats";
import { IconMessageDots } from "@tabler/icons-react";
import {
  Activity,
  RepoWithLanguages,
  SessionData,
  UserData,
} from "../lib/types";
import { useSession } from "../lib/hooks";
import { GithubUser } from "../lib/github/schemas/user.schema";
import { processEvents } from "../lib/github/actions/process-events";
import { GitHubEvent } from "../lib/github/schemas/events.schema";

interface DashboardLayoutProps {
  user: GithubUser;
  repos: RepoWithLanguages[];
  activites: GitHubEvent[];
}

export default function DashboardLayout({
  user,
  repos,
  activites,
}: DashboardLayoutProps) {
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
                <Grid.Col span={{ xs: 12, md: 6 }}>
                  {" "}
                  <RepoStats repo={repo} />
                </Grid.Col>
              ))}
            </Grid>
          </Grid.Col>
        </Grid>
      </Container>
      <Title></Title>
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
          {processEvents(activites)}
        </Timeline>
      </Container>
    </div>
  );
}
