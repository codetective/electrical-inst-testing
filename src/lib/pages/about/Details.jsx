import { ReactNode } from "react";
import {
  Stack,
  Container,
  Box,
  Flex,
  Text,
  Heading,
  SimpleGrid,
} from "@chakra-ui/react";
import SmallTitleWithBar from "../../components/SmallTitleWithBar";
import WrapContent from "../../layout/WrapContent";

export default function Details() {
  return (
    <Box bg={"gray.800"} position={"relative"}>
      <WrapContent>
        <Flex
          flex={1}
          zIndex={0}
          display={{ base: "none", lg: "flex" }}
          backgroundImage="url('/images/img2.jpg')"
          backgroundSize={"cover"}
          backgroundPosition="center"
          backgroundRepeat="no-repeat"
          position={"absolute"}
          width={"50%"}
          insetY={0}
          right={0}
        >
          <Flex
            bgGradient={"linear(to-r, gray.800 10%, transparent)"}
            w={"full"}
            h={"full"}
          />
        </Flex>
        <Box maxW={"7xl"} zIndex={10} position={"relative"}>
          <Stack direction={{ base: "column", lg: "row" }}>
            <Stack
              flex={1}
              color={"gray.400"}
              justify={{ lg: "center" }}
              py={{ base: 10, md: 20, xl: 20 }}
            >
              <Box mb={{ base: 8, md: 20 }}>
                {/* <Text
                fontFamily={"heading"}
                fontWeight={700}
                textTransform={"uppercase"}
                mb={3}
                fontSize={"xl"}
                color={"gray.500"}
                >
                Technology
              </Text> */}
                <SmallTitleWithBar title={"OUR HISTORY"} color="gray.500" />
                <Heading
                  color={"white"}
                  mb={5}
                  fontSize={{ base: "3xl", md: "5xl" }}
                >
                  Excellence established in 2012
                </Heading>
                <Text fontSize={"xl"} color={"gray.400"}>
                  Established in 2012, AVETRIX is duly incorporated in Nigeria
                  as an integrated Engineering firm offering strategic
                  Engineering Services to the Oil & Gas sector, Manufacturing,
                  Construction, Maritime, Industries and Government
                  establishments.
                </Text>
              </Box>

              <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
                {stats.map((stat) => (
                  <Box key={stat.title}>
                    <Text
                      fontFamily={"heading"}
                      fontSize={"3xl"}
                      color={"white"}
                      mb={3}
                    >
                      {stat.title}
                    </Text>
                    <Text fontSize={"xl"} color={"gray.400"}>
                      {stat.content}
                    </Text>
                  </Box>
                ))}
              </SimpleGrid>
            </Stack>
            <Flex flex={1} />
          </Stack>
        </Box>
      </WrapContent>
    </Box>
  );
}

const StatsText = ({ children }) => (
  <Text as={"span"} fontWeight={700} color={"white"}>
    {children}
  </Text>
);

const stats = [
  {
    title: "150+",
    content: (
      <>
        <StatsText>projects delivered</StatsText> timely and with perfect
        execution from inception till date
      </>
    ),
  },
  {
    title: "30+",
    content: (
      <>
        <StatsText>states</StatsText> coverage and reach. We have executed
        projects in over 30+ states of the federation.
      </>
    ),
  },
  {
    title: "100%",
    content: (
      <>
        <StatsText>projects</StatsText> completed by AVETRIX ensure maximum
        client satisfaction and overall value for money.
      </>
    ),
  },
  {
    title: "100%",
    content: (
      <>
        <StatsText>customer satisfaction</StatsText> achieved on all projects
        executed professionally by AVETRIX as at 2022
      </>
    ),
  },
];
