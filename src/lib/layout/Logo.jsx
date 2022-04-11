import React from "react";
import { Box, Text, Image } from "@chakra-ui/react";
import Link from "next/link";

export default function Logo({ h = "50px", display }) {
  return (
    <Box display={display}>
      <Text className="poppins" fontSize="lg" fontWeight="bold">
        <Link href="/">
          <a>
            <Image src={"/images/logo.png"} h={h} />
          </a>
        </Link>
      </Text>
    </Box>
  );
}
