"use client";

import { useMantineColorScheme, Switch } from "@mantine/core";
import { IconSun, IconMoonStars } from "@tabler/icons-react";

export default function ThemeToggle() {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();

  const isDark = colorScheme === "dark";

  return (
    <Switch
      style={{ zIndex: 5 }}
      size="md"
      checked={isDark}
      onChange={() => toggleColorScheme()}
      color="dark.4"
      onLabel={
        <IconSun size={16} stroke={2.5} color="var(--mantine-color-yellow-4)" />
      }
      offLabel={
        <IconMoonStars
          size={16}
          stroke={2.5}
          color="var(--mantine-color-blue-6)"
        />
      }
    />
  );
}
