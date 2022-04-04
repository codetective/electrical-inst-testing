import React from "react";
import PageTitleHero from "../../layout/PageTitleHero";
import AboutIntro from "./AboutIntro";
import Details from "./Details";
import Leadership from "./Leadership";
import {
  chakra,
  Box,
  Stack,
  Flex,
  SimpleGrid,
  Heading,
  Text,
  Button,
} from "@chakra-ui/react";
import Link from "next/link";
import WrapContent from "../../layout/WrapContent";

const pageDetails = {
  title: "About Us",
  tagline:
    "We are the leading energy technology company. We design, manufacture and service transformative technologies to help take energy forward.",
};

export default function About() {
  return (
    <>
      <PageTitleHero tagline={pageDetails.tagline} title={pageDetails.title} />
      <AboutIntro />
      <Details />
      <Leadership />
      <CTA />
    </>
  );
}

function CTA() {
  return (
    <Flex bg="#030b2af2" w="full" alignItems="center" justifyContent="center">
      <WrapContent>
        <SimpleGrid
          maxW="7xl"
          w={{ md: "3xl", lg: "4xl" }}
          alignItems="center"
          columns={{ base: 1, lg: 2, xl: 3 }}
          spacing={4}
          mx="auto"
          py={{ base: 12, lg: 16 }}
          px={{ base: 4, lg: 8 }}
          display={{ lg: "flex" }}
        >
          <Box>
            {/* <chakra.h2
              fontSize={{ base: "3xl", sm: "4xl" }}
              fontWeight="extrabold"
              letterSpacing="tight"
              lineHeight="shorter"
              color={useColorModeValue("gray.900", "gray.100")}
              mb={6}
            >
              <chakra.span display="block">Ready to dive in?</chakra.span>
              <chakra.span
                display="block"
                color={useColorModeValue("brand.600", "gray.500")}
              >
                Start your free trial today.
              </chakra.span>
            </chakra.h2> */}
            <Heading
              fontSize={["3xl", "3xl", "4xl"]}
              fontWeight="bold"
              lineHeight={"1.33"}
              color="gray.100"
            >
              <chakra.span display="block">Want to learn more?</chakra.span>
            </Heading>
            <Box w={["100%", "100%", "70%"]} py="3">
              <Text color="gray.300" as="span" fontSize={"xl"}>
                We have a team of experts ready to answer your questions and
                help you get what you need.
              </Text>
            </Box>

            <Stack direction={{ base: "column", sm: "row" }} py="2" spacing={6}>
              <Link href="/">
                <Button
                  maxW="fit-content"
                  color="gray.100"
                  textTransform={"uppercase"}
                  fontWeight="bold"
                  bg="brand.300"
                  _hover={{
                    bg: "brand.400",
                  }}
                >
                  learn more
                </Button>
              </Link>
              <Link href="/">
                <Button
                  maxW="fit-content"
                  color="gray.100"
                  textTransform={"uppercase"}
                  fontWeight="bold"
                  bg="brand.400"
                  _hover={{
                    bg: "brand.300",
                  }}
                >
                  Get a quote
                </Button>
              </Link>
            </Stack>
          </Box>
        </SimpleGrid>
      </WrapContent>
    </Flex>
  );
}
