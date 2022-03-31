import { Button, Heading, Stack, Text } from "@chakra-ui/react";
import React from "react";
import WrapContent from "../../layout/WrapContent";
import { useBreakpointValue } from "@chakra-ui/react";

function SafetyInfoBanner() {
  const heightValue = useBreakpointValue({
    base: "155px",
    md: "125%",
    lg: "125%",
  });

  return (
    <WrapContent>
      <Stack
        px={["initial", "initial", "40px"]}
        alignItems={["flex-start", "flex-start", "center"]}
        pt="40px"
        _before={{
          content: `''`,
          position: "absolute",
          top: "0",
          left: "0",
          width: "100%",
          height: heightValue,
          backgroundImage: "url('/images/img1.jpg')",
          backgroundSize: "cover",
          bgPos: "center",
          bgColor: "#030b2af2",
          bgBlendMode: "overlay",
          zIndex: "-1",
        }}
      >
        <Heading
          textAlign={{ md: "center" }}
          width={["100%", "80%", "100%", "100%"]}
          color={"gray.100"}
        >
          Safety Performance is Driven by culture
        </Heading>
        <Text
          textAlign={["left", "left", "center"]}
          pt={["60px", "60px", "10px"]}
          pb={"10px"}
          color={["gray.800", "gray.800", "gray.100"]}
        >
          Your #1 concern is Safety, and so is ours. AMG has the Culture,
          Knowledge, Experience, Programs, and Policies to support your
          projects, whether you need HAZOP support during the design phase or
          you need hands-on safety management during construction. All of our
          project managers, engineers, and designers have OSHA 10-hour
          certification, and many of them have MSHA Part 46 certification. Your
          safety interests are also prioritized in procurement practices,
          particularly when it comes to pre-qualifying construction contractors,
          where we investigate their safety history prior to bid engagement.
        </Text>
        <Button
          maxW="fit-content"
          color="gray.100"
          textTransform={"uppercase"}
          fontWeight="bold"
          bg="brand.300"
        >
          Vuew our approach to safetyy
        </Button>
      </Stack>
    </WrapContent>
  );
}

export default SafetyInfoBanner;
