import { IconArrowUpRight, IconDeviceAnalytics } from "@tabler/icons-react";
import { Box, Group, Paper, Progress, SimpleGrid, Text } from "@mantine/core";
import classes from "./styles/RepoStats.module.scss";
import { GithubRepository } from "../lib/github/schemas/repos.schema";
import { RepoWithLanguages } from "../lib/types";

const data = [
  { language: "Mobile", numberOfLines: "204,001", part: 59, color: "#47d6ab" },
  { label: "Desktop", count: "121,017", part: 35, color: "#03141a" },
  { label: "Tablet", count: "31,118", part: 6, color: "#4fcdf7" },
];

interface RepoStatsProps {
  repo: RepoWithLanguages;
}

export default function RepoStats({ repo }: RepoStatsProps) {
  const segments = Object.entries(repo.languages).map(([language, bytes]) => (
    <Progress.Section
      value={bytes}
      //   color={segment.color}
      key={language}
      aria-label={language}
    >
      {bytes > 10 && <Progress.Label>{bytes}%</Progress.Label>}
    </Progress.Section>
  ));

  const descriptions = data.map((stat) => (
    <Box
      key={stat.label}
      style={{ borderBottomColor: stat.color, zIndex: 3 }}
      className={classes.stat}
    >
      <Text tt="uppercase" fz="xs" c="dimmed" fw={700}>
        {stat.label}
      </Text>

      <Group justify="space-between" align="flex-end" gap={0}>
        <Text fw={700}>{stat.count}</Text>
        <Text c={stat.color} fw={700} size="sm" className={classes.statCount}>
          {stat.part}%
        </Text>
      </Group>
    </Box>
  ));

  return (
    <Paper withBorder p="md" radius="md">
      <Group justify="space-between">
        <Group align="flex-end" gap="xs">
          <Text fz="xl" fw={700} style={{ zIndex: 5 }}>
            {repo.repo.full_name}
          </Text>
        </Group>
      </Group>

      <Text fz="sm" style={{ zIndex: 5 }}>
        {repo.repo.description || "Empty description"}
      </Text>

      <Progress.Root
        size={34}
        classNames={{ label: classes.progressLabel }}
        mt={40}
        style={{ zIndex: 5 }}
      >
        {segments}
      </Progress.Root>
      <SimpleGrid cols={{ base: 1, xs: 3 }} mt="xl">
        {descriptions}
      </SimpleGrid>
    </Paper>
  );
}
