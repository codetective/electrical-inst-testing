import {
  Box,
  Button,
  Flex,
  Heading,
  Stack,
  Container,
  Text,
  Center,
  VStack,
} from "@chakra-ui/react";
import Link from "next/link";
import WrapContent from "./WrapContent";

export default function PageTitleHero({ tagline, title }) {
  return (
    <>
      <Box
        pos="relative"
        bgImage="url('/images/img1.jpg')"
        bgRepeat={"no-repeat"}
        bgSize="cover"
        bgPos={"center"}
        bgColor="gray.700"
        bgBlendMode={"overlay"}
        top={["0", "0", "0", "-46px"]}
      >
        <Box>
          <Container maxWidth="container.xl" px={[5, 5, 8]}>
            <Stack
              minH={["50vh", "50vh", "50vh"]}
              // maxH="700px"
              direction={{ base: "column", md: "row" }}
              pt={["100px", "150px"]}
              pb={["40px", "40px"]}
            >
              <Flex flex={1} align={"center"} justify={"flex-start"}>
                <Stack spacing={3} w={["full", "full", "80%"]}>
                  <Heading fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}>
                    <Text
                      as={"span"}
                      color="gray.100"
                      textShadow="2px 2px 5px black"
                      fontSize={["2rem", "3rem", "3.5rem", "4rem"]}
                      position={"relative"}
                    >
                      {title}
                    </Text>
                    <br />{" "}
                  </Heading>
                  <Box>
                    <Text
                      textShadow="2px 2px 5px black"
                      className="qfont"
                      fontSize={{ base: "sm", lg: "lg" }}
                      color={"gray.100"}
                      fontFamily="Montserrat"
                    >
                      {tagline}
                    </Text>
                  </Box>
                </Stack>
              </Flex>
            </Stack>
          </Container>
        </Box>
      </Box>
      <Box
        py="5"
        bg="brand.500"
        color="gray.100"
        pos="relative"
        top={["0", "0", "0", "-46px"]}
      >
        <WrapContent>
          <VStack>
            <Text textAlign={"center"} fontSize={["md", "lg", "xl", "xl"]}>
              Get a FREE consultation from our experts now!
            </Text>
            <Link href="/consult" passHref>
              <a>
                <Text textDecoration={"underline"} textUnderlineOffset="5px">
                  Get started!
                </Text>
              </a>
            </Link>
          </VStack>
        </WrapContent>
      </Box>
    </>
  );
}
