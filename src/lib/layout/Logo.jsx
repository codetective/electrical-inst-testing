import React from "react";
import { Box, Text, Image } from "@chakra-ui/react";
import Link from "next/link";

export default function Logo({ h = "50px", display, state = true }) {
  return (
    <Box display={display}>
      <Text className="poppins" fontSize="lg" fontWeight="bold">
        <Link href="/">
          <a>
            {!state && <Image src={"/logol.png"} h={h} />}
            {state && <Image src={"/logod.png"} h={h} />}
          </a>
        </Link>
      </Text>
    </Box>
  );
}
