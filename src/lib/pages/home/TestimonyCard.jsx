import { Stack, Text } from "@chakra-ui/react";
import React from "react";

export default function TestimonyCard() {
  return (
    <Stack
      className="marquee-content-card"
      p="6"
      spacing={"5"}
      rounded="md"
      shadow="lg"
      width={["80%", "95%"]}
      m="auto"
      my="5"
    >
      <Text>
        Switching to Paddle meant that we could remove some of the other tools
        we were using to manage billing. This, along with the time we are saving
        our development, finance, and legal teams, means we’ve cut billing costs
        by 15%.
      </Text>
      <Stack spacing="4">
        <Text fontSize="xl" fontWeight={"bold"} fontFamily="Montserrat">
          Tobias Günther, CEO, Tower
        </Text>
        <Text>Source</Text>
      </Stack>
    </Stack>
  );
}
