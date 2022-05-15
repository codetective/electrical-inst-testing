import { Box, Container } from "@chakra-ui/react";
import React from "react";

function WrapContent({ children, bgColor, px = [5, 5, 8] }) {
  return (
    <Box bgColor={bgColor} w="100%" position="relative">
      <Container maxW="container.xl" px={px}>
        {children}
      </Container>
    </Box>
  );
}

export default WrapContent;
