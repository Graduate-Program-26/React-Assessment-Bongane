"use client";

import {
  Autocomplete,
  Box,
  Burger,
  Button,
  Divider,
  Drawer,
  Group,
  OptionsFilter,
  ScrollArea,
  Text,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { FaGitAlt } from "react-icons/fa";
import classes from "./styles/Navbar.module.scss";
import { signIn, signOut } from "../lib/actions/auth-actions";
import { useContext } from "react";
import SearchBox from "./search";
import { GithubUser } from "../lib/github/schemas/user.schema";
import { GithubUserResult } from "../lib/github/schemas/userResult.schema";
import ThemeToggle from "./theme-toggle";

interface NavbarProps {
  showAuth: boolean;
  showSearch: boolean;
  query: string;
  users?: GithubUserResult[];
}
export default function Navbar({ showAuth, showSearch, users }: NavbarProps) {
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] =
    useDisclosure(false);

  const loggedInButton = showAuth ? (
    <Button
      variant="gradient"
      gradient={{ from: "#7b9fe8", to: "#294bd6" }}
      onClick={signIn}
    >
      Log in
    </Button>
  ) : (
    <button
      className="border rounded-md p-2 cursor-pointer hover:bg-[#294bd6]"
      onClick={signOut}
    >
      Sign out
    </button>
  );

  const sideBarLogginButton = showAuth ? (
    <Button variant="default" onClick={signIn}>
      Log in
    </Button>
  ) : (
    <Button variant="default" onClick={signOut}>
      Log out
    </Button>
  );

  const searchBox = showSearch ? <SearchBox users={users} /> : <></>;

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

          {searchBox}

          <Group visibleFrom="sm">
            {loggedInButton}
            <ThemeToggle />
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

          <ThemeToggle />

          <Divider my="sm" />

          <Group justify="center" grow pb="xl" px="md">
            {sideBarLogginButton}
          </Group>
        </ScrollArea>
      </Drawer>
    </Box>
  );
}
