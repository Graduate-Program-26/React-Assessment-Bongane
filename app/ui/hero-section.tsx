"use client";

import { Container, Overlay, Title, Text } from "@mantine/core";
import classes from "./styles/HeroSection.module.scss";

export default function HeroSection() {
  return (
    <>
      <div className={classes.wrapper}>
        <Overlay color="#000" opacity={0.65} zIndex={1} />

        <div className={classes.inner}>
          <Title className={classes.title}>
            Optimize Your{" "}
            <Text
              size="xl"
              variant="gradient"
              gradient={{ from: "#7b9fe8", to: "#294bd6", deg: 90 }}
            >
              Workflow
            </Text>
          </Title>

          <Container size={640}>
            <Text size="lg" className={classes.description}>
              Track Repositories, Manage Pull Requests and Vusualize Activity in
              One Powerful Interface
            </Text>
          </Container>
        </div>
      </div>
    </>
  );
}

