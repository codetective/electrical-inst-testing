import { Box, Flex, HStack, Stack, useMediaQuery } from "@chakra-ui/react";
import React from "react";
import TestimonyCard from "./TestimonyCard";
import Slider from "react-slick";
import WrapContent from "../../layout/WrapContent";

export default function TestimonyMarquee() {
  const [isLargerThan914] = useMediaQuery("(min-width: 914px)");
  const [isLargerThan600] = useMediaQuery("(min-width: 601px");
  return (
    <WrapContent>
      <Stack
        as={Slider}
        dots={true}
        slidesToShow={isLargerThan914 ? 3 : isLargerThan600 ? 1 : 1}
        slidesToScroll={1}
        autoplay={true}
        autoplaySpeed={5000}
        spacing={8}
        mb="40px"
        py="5"
      >
        <TestimonyCard />
        <TestimonyCard />
        <TestimonyCard />
        <TestimonyCard />
        <TestimonyCard />
        <TestimonyCard />
        <TestimonyCard />
        <TestimonyCard />
      </Stack>
    </WrapContent>
  );
}
