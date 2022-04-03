import { Box, HStack, Text } from "@chakra-ui/react";
import React from "react";

export default function SmallTitleWithBar({ title, color = "gray.800" }) {
  return (
    <HStack>
      <Box w="40px" bg="brand.300" h="2px" />
      <Text fontSize="sm" fontWeight="bold" color={color}>
        {title}
      </Text>
    </HStack>
  );
}
