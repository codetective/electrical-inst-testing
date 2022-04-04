import { Heading } from "@chakra-ui/react";
import React from "react";

export default function SectionHeading({ text }) {
  return (
    <Heading
      fontSize={["3xl", "3xl", "4xl"]}
      fontWeight="bold"
      lineHeight={"1.33"}
      color="brand.500"
    >
      {text}
    </Heading>
  );
}
