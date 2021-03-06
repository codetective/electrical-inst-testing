import {
  Box,
  Heading,
  HStack,
  IconButton,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";
import WrapContent from "../../layout/WrapContent";
import { BiDownArrowAlt } from "react-icons/bi";
import Link from "next/link";
import SmallTitleWithBar from "../../components/SmallTitleWithBar";

export default function AboutIntro() {
  return (
    <WrapContent>
      <Stack spacing="6" w={["full", "full", "75%"]} py="80px">
        <SmallTitleWithBar title="ABOUT US" />
        <Heading
          fontSize={["3xl", "3xl", "4xl"]}
          fontWeight="bold"
          lineHeight={"1.33"}
          color="brand.500"
        >
          From our years of service, we have gained outstanding reputation for
          innovation, reliability, service excellence and a strong maintenance
          and support culture.
        </Heading>
        {/* <HStack>
          <Link href="#aboutSection">
            <IconButton
              rounded="full"
              cursor={"pointer"}
              size="lg"
              color="gray.200"
              as={BiDownArrowAlt}
              bg="brand.300"
              _hover={{ bg: "brand.500" }}
            />
          </Link>
          <Text fontSize="sm" fontWeight="bold" color="gray.500">
            EXPLORE
          </Text>
        </HStack> */}
      </Stack>
    </WrapContent>
  );
}
