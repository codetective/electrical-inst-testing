import { Heading } from "@chakra-ui/react";
import React from "react";
import AnimateInView from "./motion/AnimateInView";

export default function SectionHeading({ text, ...other }) {
  return (
    <AnimateInView
      hidden={{ x: "5px", opacity: 0.5 }}
      visible={{
        x: 0,
        opacity: 1,
      }}
      duration={2}
    >
      <Heading
        fontSize={["3xl", "3xl", "4xl"]}
        fontWeight="bold"
        lineHeight={"1.33"}
        color="brand.500"
        {...other}
      >
        {text}
      </Heading>
    </AnimateInView>
  );
}
