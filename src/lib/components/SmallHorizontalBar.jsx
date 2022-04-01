import { Box, HStack } from "@chakra-ui/react";
import React from "react";

export default function SmallHorizontalBar(props) {
  return (
    <HStack {...props}>
      <Box w="50px" bg="brand.300" h="2px" />
    </HStack>
  );
}
