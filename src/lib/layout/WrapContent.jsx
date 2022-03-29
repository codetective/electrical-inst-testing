import { Box, Container } from "@chakra-ui/react";
import React from "react";

function WrapContent({ children, bgColor }) {
  return (
    <Box bgColor={bgColor} w="100%" position="relative">
      <Container maxW="container.xl" px={5}>
        {children}
      </Container>
    </Box>
  );
}

export default WrapContent;
