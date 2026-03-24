"use client";

import { IconSearch } from "@tabler/icons-react";
import {
  Autocomplete,
  Box,
  Burger,
  Button,
  Divider,
  Drawer,
  Group,
  ScrollArea,
  Text,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { FaGitAlt } from "react-icons/fa";
import classes from "./styles/Navbar.module.scss";
import { signIn } from "../lib/actions/auth-actions";

export default function Navbar() {
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] =
    useDisclosure(false);

  return (
    <Box
      pb={12}
      bg="transparent"
      style={{
        position: "absolute",
        top: 0,
        width: "100%",
        zIndex: 3,
        backdropFilter: "blur(10px)",
      }}
    >
      <header className={classes.header}>
        <Group justify="space-between" h="100%">
          <Group>
            <FaGitAlt
              size={40}
              className="bg-gradient-to-r from-[#7b9fe8] to-[#294bd6]"
            />
            <Text>Git Dash</Text>
          </Group>

          <Autocomplete
            visibleFrom="sm"
            placeholder="Search"
            leftSection={<IconSearch size={16} stroke={1.5} />}
            mx="md"
          />

          <Group visibleFrom="sm">
            <Button
              variant="gradient"
              gradient={{ from: "#7b9fe8", to: "#294bd6" }}
              onClick={signIn}
            >
              Log in
            </Button>
          </Group>

          <Burger
            opened={drawerOpened}
            onClick={toggleDrawer}
            hiddenFrom="sm"
            aria-label="Toggle navigation"
          />
        </Group>
      </header>

      <Drawer
        opened={drawerOpened}
        onClose={closeDrawer}
        size="100%"
        padding="md"
        title="Navigation"
        hiddenFrom="sm"
        zIndex={1000000}
      >
        <ScrollArea h="calc(100vh - 80px" mx="-md">
          <Divider my="sm" />

          <Autocomplete
            placeholder="Search"
            leftSection={<IconSearch size={16} stroke={1.5} />}
            mx="md"
            mb="md"
          />

          <a href="#" className={classes.link}>
            Home
          </a>
          <a href="#" className={classes.link}>
            Learn
          </a>
          <a href="#" className={classes.link}>
            Academy
          </a>

          <Divider my="sm" />

          <Group justify="center" grow pb="xl" px="md">
            <Button variant="default">Log in</Button>
          </Group>
        </ScrollArea>
      </Drawer>
    </Box>
  );
}
