import { Box, Group, Paper, Progress, SimpleGrid, Text } from "@mantine/core";
import classes from "./styles/RepoStats.module.scss";
import { RepoWithLanguages } from "../lib/types";
import { ghColors } from "../utils/languageColors";

interface RepoStatsProps {
  repo: RepoWithLanguages;
}

export default function RepoStats({ repo }: RepoStatsProps) {
  const totalBytes = Object.entries(repo.languages).reduce(
    (prev: number, acc: [string, number]) => {
      const total = prev + acc[1];
      return total;
    },
    0,
  );

  const segments = Object.entries(repo.languages).map(([language, bytes]) => (
    <Progress.Section
      value={bytes}
      color={ghColors[language]}
      key={language}
      aria-label={language}
    >
      {bytes > 10 && (
        <Progress.Label>
          {((bytes / totalBytes) * 100).toFixed(0)}%
        </Progress.Label>
      )}
    </Progress.Section>
  ));

  const descriptions = Object.entries(repo.languages).map(
    ([language, bytes]) => (
      <Box
        key={language}
        style={{ borderBottomColor: ghColors[language], zIndex: 3 }}
        className={classes.stat}
      >
        <Text tt="uppercase" fz="xs" c="dimmed" fw={700}>
          {language}
        </Text>

        <Group justify="space-between" align="flex-end" gap={0}>
          <Text
            c={ghColors[language]}
            fw={700}
            size="sm"
            className={classes.statCount}
          >
            {((bytes / totalBytes) * 100).toFixed(0)}%
          </Text>
        </Group>
      </Box>
    ),
  );

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
