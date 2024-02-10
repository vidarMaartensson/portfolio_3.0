import { Box, Button, Flex, Text } from "@mantine/core";

import { vars } from "@/theme";
import { tss } from "tss-react";
import { ClassesExample } from "../components/ClassesExample";
import { CssPropExample } from "../components/CssPropExample";
import { useState } from "react";

export default function Home() {
  const [clickCount, setClickCount] = useState(0);
  const { classes } = useWrapperStyles({
    isClicked: clickCount > 0,
  });

  return (
    <Flex
      gap={vars.spacing.md}
      direction="column"
      justify="center"
      align="center"
      display="flex"
      className={classes.wrapper}
    >
      <Text fz="xl">With TSS and Pages router</Text>
      <ClassesExample />
      <CssPropExample />
      <Box component="div" className={classes.demoWithProps}>
        WITH PROPS
      </Box>
      <Button>
        <Text fz="xl" onClick={() => setClickCount((prev) => prev + 1)}>
          Click me {clickCount}
        </Text>
      </Button>
    </Flex>
  );
}

const useWrapperStyles = tss
  .withParams<{ isClicked: boolean }>()
  .create(({ isClicked }) => ({
    wrapper: {
      background: vars?.colors?.red?.[2],
      width: "100%",
      height: "100vh",
    },
    demoWithProps: {
      background: isClicked ? vars?.colors?.red?.[8] : vars?.colors?.blue?.[2],
      width: "200px",
      height: "200px",
      border: `1px solid ${vars?.colors?.gray?.[2]}`,
      borderRadius: vars.radius.xl,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
  }));
