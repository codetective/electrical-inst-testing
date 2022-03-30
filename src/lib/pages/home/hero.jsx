import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Stack,
  Container,
  Text,
} from "@chakra-ui/react";
import Link from "next/link";

export default function Hero() {
  return (
    <Box pos="relative" className="hero">
      <Box className="bgr">
        <Container maxWidth="container.xl" px={5}>
          <Stack
            minH={"90vh"}
            maxH="700px"
            direction={{ base: "column", md: "row" }}
            pt={["10px", "150px"]}
            pb={["60px", "40px"]}
          >
            <Flex flex={1} align={"center"} justify={"flex-start"}>
              <Stack spacing={3} w={["full", "full", "80%"]}>
                <Heading fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}>
                  <Text
                    as={"span"}
                    color="gray.100"
                    textShadow="2px 2px 5px black"
                    fontSize={["2rem", "4rem", "5.5rem", "6rem"]}
                    position={"relative"}
                  >
                    Engineering
                  </Text>
                  <br />{" "}
                  <Text
                    as={"span"}
                    color="gray.100"
                    textShadow="2px 2px 5px black"
                    fontSize={["2rem", "4rem", "5.5rem", "6rem"]}
                    position={"relative"}
                  >
                    Tomorrow.
                  </Text>
                </Heading>
                <Box>
                  <Text
                    textShadow="2px 2px 5px black"
                    className="qfont"
                    fontSize={{ base: "md", lg: "lg" }}
                    color={"gray.100"}
                    fontWeight="bold"
                  >
                    For 40 years, we’ve delivered facility engineering
                    <br />
                    solutions that work practically and financially for our
                    <br /> industrial engineering clients.
                  </Text>
                </Box>
                {/* buttons */}
                <Stack direction={{ base: "column", md: "row" }} spacing={4}>
                  <Link href="/projects">
                    <a>
                      <Button
                        bg={"brand.300"}
                        rounded="md"
                        color="white"
                        textTransform={"uppercase"}
                        px={"40px"}
                        _hover={{
                          bg: ["primary.200"],
                        }}
                        fontWeight="bold"
                      >
                        See our projects
                      </Button>
                    </a>
                  </Link>
                </Stack>
              </Stack>
            </Flex>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
}
