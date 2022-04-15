import {
  Box,
  Container,
  GridItem,
  Flex,
  chakra,
  HStack,
  Icon,
  SimpleGrid,
  Stack,
  Text,
  VStack,
  Center,
} from "@chakra-ui/react";
import React from "react";
import PageTitleHero from "../../layout/PageTitleHero";
import WrapContent from "../../layout/WrapContent";
import SectionHeading from "../../components/SectionHeading";
import { AiOutlineCheckCircle } from "react-icons/ai";

import CTA from "../../components/CTA";
import SmallTitleWithBar from "../../components/SmallTitleWithBar";
import SmallHorizontalBar from "../../components/SmallHorizontalBar";

const features = Array.apply(null, Array(8)).map(function (x, i) {
  return {
    id: i,
    title: "Lorem ipsum dolor sit amet",
    text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam.",
  };
});

function index() {
  return (
    <Box>
      <PageTitleHero
        title={"Why you should work with us"}
        tagline="We have years on umparalled experience in all aspects of our services, confirmed delivery and excellent customer relations."
      />
      <WrapContent>
        <Box py="60px">
          <Stack spacing={4} as={Container} maxW={"3xl"} textAlign={"center"}>
            <Center>
              <SmallHorizontalBar />
            </Center>
            <SectionHeading text="We make your life easier!" />
            <Text color={"gray.600"} fontSize={"xl"}>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua.
            </Text>
          </Stack>

          <Container maxW={"6xl"} mt={10}>
            <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={10}>
              {features.map((feature) => (
                <HStack key={feature.id} align={"top"}>
                  <Box color={"green.400"} px={2}>
                    <Icon as={AiOutlineCheckCircle} />
                  </Box>
                  <VStack align={"start"}>
                    <Text fontWeight={600}>{feature.title}</Text>
                    <Text color={"gray.600"}>{feature.text}</Text>
                  </VStack>
                </HStack>
              ))}
            </SimpleGrid>
          </Container>
        </Box>
      </WrapContent>
      <Wfl />
      <CTA
        title="Ready to get started?"
        tagline="click the buttons below to learn more or get a quote from us."
      />
    </Box>
  );
}

export default index;

function Wfl() {
  const Feature = (props) => {
    return (
      <Flex>
        <Flex shrink={0}>
          <Icon boxSize={5} mt={1} mr={2} as={AiOutlineCheckCircle} />
        </Flex>
        <Box ml={4}>
          <chakra.dt
            fontSize="lg"
            fontWeight="bold"
            lineHeight="6"
            color="gray.900"
          >
            {props.title}
          </chakra.dt>
          <chakra.dd mt={2} color="gray.600">
            {props.children}
          </chakra.dd>
        </Box>
      </Flex>
    );
  };
  return (
    <Box shadow="xl" bg="gray.100" py="60px">
      <WrapContent>
        <Flex w="auto" justifyContent="center" alignItems="center">
          <Box mx="auto">
            <SimpleGrid
              spacing="10"
              alignItems="center"
              columns={{ base: 1, lg: 3 }}
            >
              <Box alignSelf="start">
                <SmallTitleWithBar mb="5" title="WHY US" />
                <chakra.h2
                  mb={3}
                  fontSize={{ base: "3xl", md: "4xl" }}
                  fontWeight="extrabold"
                  color="black"
                  lineHeight="shorter"
                  letterSpacing="tight"
                >
                  All-in-one platform
                </chakra.h2>
                <chakra.p
                  mb={6}
                  fontSize={{ base: "lg", md: "xl" }}
                  color="gray.500"
                >
                  Lorem ipsum dolor sit amet consect adipisicing elit. Possimus
                  magnam voluptatum cupiditate veritatis in accusamus quisquam.
                </chakra.p>
              </Box>
              <GridItem colSpan={2}>
                <Stack
                  spacing={{ base: 10, md: 0 }}
                  display={{ md: "grid" }}
                  gridTemplateColumns={{ md: "repeat(2,1fr)" }}
                  gridColumnGap={{ md: 8 }}
                  gridRowGap={{ md: 10 }}
                >
                  <Feature title="Invite team members">
                    Improve your conversion rates by monitoring exactly what’s
                    going on while your customers are in trial.{" "}
                  </Feature>
                  <Feature title="Unify your payments stack">
                    Manage all your online and offline sales in one place with a
                    single integration, simplifying reporting and
                    reconciliation.
                  </Feature>
                  <Feature title="Own your in-store experience">
                    {" "}
                    Provide a seamless customer experience across channels, like
                    reserving online and picking up in store.
                  </Feature>
                  <Feature title="Grow your platform’s revenue">
                    {" "}
                    Add in-person payments to your platform or marketplace.
                    Using Terminal with Connect.{" "}
                  </Feature>
                  <Feature title="Clear overview for efficient tracking">
                    {" "}
                    Handle your subscriptions and transactions efficiently with
                    the clear overview in Dashboard. Fea
                  </Feature>
                  <Feature title="Decide how you integrate Payments">
                    {" "}
                    Love to code? Decide how you integrate Payments and build
                    advanced and reliable products yourself from scratch.{" "}
                  </Feature>
                </Stack>
              </GridItem>
            </SimpleGrid>
          </Box>
        </Flex>
      </WrapContent>
    </Box>
  );
}
