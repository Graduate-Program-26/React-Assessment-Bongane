"use client";

import { Overlay, Grid, Container, SimpleGrid } from "@mantine/core";
import classes from "./styles/Dashboard.module.scss";
import { signOut } from "../lib/actions/auth-actions";
import AvatarCard from "./avatar-card";

import RepoStats from "./repo-stats";

export default function DashboardLayout() {
  return (
    <div className={classes.wrapper}>
      <Overlay color="#000" opacity={0.65} zIndex={1} />
      <Container my="md">
        <Grid>
          <Grid.Col span={{ xs: 12, md: 4 }}>
            <AvatarCard />
          </Grid.Col>
          <Grid.Col span={{ xs: 12, md: 8 }}>
            <Grid>
              <Grid.Col span={{ xs: 12, md: 4 }}>
                <RepoStats />
              </Grid.Col>
              <Grid.Col span={{ xs: 12, md: 4 }}>
                <RepoStats />
              </Grid.Col>
              <Grid.Col span={{ xs: 12, md: 4 }}>
                <RepoStats />
              </Grid.Col>
              <Grid.Col span={{ xs: 12, md: 4 }}>
                <RepoStats />
              </Grid.Col>
              <Grid.Col span={{ xs: 12, md: 4 }}>
                <RepoStats />
              </Grid.Col>
              <Grid.Col span={{ xs: 12, md: 4 }}>
                <RepoStats />
              </Grid.Col>
            </Grid>
          </Grid.Col>
        </Grid>
      </Container>
      <Container></Container>

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
