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
import { useContextualRouting } from "next-use-contextual-routing";
import Link from "next/link";
import { useRouter } from "next/router";
import ConsultModal from "../components/ConsultModal";
import WrapContent from "./WrapContent";

export default function PageTitleHero({ tagline, title }) {
  const { makeContextualHref, returnHref } = useContextualRouting();
  const router = useRouter();
  return (
    <>
      <ConsultModal
        pageState={router.query.id}
        close={() => router.push(returnHref)}
      />

      <Box
        pos="relative"
        // bgImage="url('/images/img1.jpg')"
        bgImage="url('/images/hero-bg.jpeg')"
        bgRepeat={"no-repeat"}
        bgSize="cover"
        bgPos={"center"}
        bgColor="gray.800"
        bgBlendMode={"overlay"}
        top={["0", "0", "0", "-46px"]}
      >
        <Box>
          <Container maxWidth="container.xl" px={[5, 5, 8]}>
            <Stack
              minH={["60vh", "70vh", "70vh"]}
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
                      textShadow="1px 1px black"
                      fontSize={["2rem", "3rem", "3.5rem", "4rem"]}
                      position={"relative"}
                    >
                      {title}
                    </Text>
                    <br />{" "}
                  </Heading>
                  <Box>
                    <Text
                      textShadow="1px 1px black"
                      className="qfont"
                      fontSize={{ base: "sm", lg: "lg" }}
                      color={"gray.100"}
                      fontFamily="Montserrat"
                    >
                      {tagline}
                      {/* router.query.id */}
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
            <Link href={makeContextualHref({ id: true })} as="/consult" shallow>
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
