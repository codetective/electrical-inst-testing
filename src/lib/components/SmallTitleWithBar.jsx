import { Box, HStack, Text } from "@chakra-ui/react";
import React from "react";

export default function SmallTitleWithBar({ title }) {
  return (
    <HStack>
      <Box w="50px" bg="brand.300" h="2px" />
      <Text fontSize="sm" fontWeight="bold" color="gray.800">
        {title}
      </Text>
    </HStack>
  );
}
