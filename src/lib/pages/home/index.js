import Hero from "./hero";
import TestimonyMarquee from "./TestimonyMarquee";
import DisciplineAndProjectCycleSection from "./DisciplineAndProjectCycleSection";
import FeaturesAndNumbers from "./FeaturesAndNumbers";
import SafetyInfoBanner from "./SafetyInfoBanner";
import { chakra, Box, Stack, Flex, SimpleGrid, Button } from "@chakra-ui/react";
import Link from "next/link";
import WrapContent from "../../layout/WrapContent";
import SEO from "../../components/SEO";

const Home = () => {
  return (
    <>
      <SEO title={"Welcome"} desc="landing page for site" path="/" />
      <Hero />
      <DisciplineAndProjectCycleSection />
      <FeaturesAndNumbers />
      <SafetyInfoBanner />
      <TestimonyMarquee />
      <CTA />
    </>
  );
};

export default Home;

function CTA() {
  return (
    <Flex bg="#030b2af2" w="full" alignItems="center" justifyContent="center">
      <WrapContent>
        <SimpleGrid
          maxW="100%"
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
            <chakra.h2
              fontSize={{ base: "3xl", sm: "4xl" }}
              fontWeight="extrabold"
              letterSpacing="tight"
              lineHeight="shorter"
              color={"gray.400"}
              mb={6}
            >
              <chakra.span display="block">Ready to dive in?</chakra.span>
              <chakra.span display="block" color={"gray.100"}>
                Request a quote to get started!.
              </chakra.span>
            </chakra.h2>
            {/* <Heading
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
            </Box> */}

            <Stack direction={{ base: "column", sm: "row" }} py="1" spacing={6}>
              <Link href="/">
                <Button
                  maxW="fit-content"
                  color="gray.100"
                  textTransform={"uppercase"}
                  fontWeight="bold"
                  bg="brand.400"
                  size="lg"
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
