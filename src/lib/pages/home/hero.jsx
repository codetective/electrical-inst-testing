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
    <Box pos="relative" className="hero" top="-45px">
      <Box className="bgr">
        <Container maxWidth="container.xl" px={8}>
          <Stack
            minH={["90vh", "90vh", "100vh"]}
            maxH="700px"
            direction={{ base: "column", md: "row" }}
            pt={["10px", "150px"]}
            pb={["60px", "40px"]}
          >
            <Flex flex={1} align={"center"} pt="46px" justify={"flex-start"}>
              <Stack spacing={4} w={["full", "full", "80%"]}>
                <Heading>
                  <Text
                    as={"span"}
                    color="gray.100"
                    textShadow="1px 1px black"
                    fontSize={["2rem", "3rem", "4rem", "5rem"]}
                    position={"relative"}
                  >
                    Engineering
                  </Text>
                  <br />{" "}
                  <Text
                    as={"span"}
                    color="gray.100"
                    textShadow="1px 1px black"
                    fontSize={["2rem", "3rem", "4rem", "5rem"]}
                    position={"relative"}
                  >
                    Tomorrow.
                  </Text>
                </Heading>
                <Box>
                  <Text
                    textShadow="1px 1px black"
                    className="qfont"
                    fontSize={{ base: "lg", lg: "xl" }}
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
                        rounded="full"
                        color="white"
                        textTransform={"uppercase"}
                        px={"40px"}
                        fontWeight="bold"
                        _hover={{
                          bg: "brand.400",
                        }}
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
