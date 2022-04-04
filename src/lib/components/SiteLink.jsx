import { Text } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";

export default function SiteLink({ path, text, target = "_self" }) {
  return (
    <Link href={path} passHref>
      <Text
        as="a"
        fontSize="14px"
        fontWeight="bold"
        textTransform={"uppercase"}
        color="brand.300"
        fontFamily="Montserrat"
        cursor={"pointer"}
        width="fit-content"
        target={target}
      >
        {text}
      </Text>
    </Link>
  );
}
