import {
  Box,
  Button,
  Flex,
  Heading,
  Stack,
  Container,
  Text,
} from "@chakra-ui/react";

export default function PageTitleHero({ tagline, title }) {
  return (
    <Box
      pos="relative"
      bgImage="url('/images/img1.jpg')"
      bgRepeat={"no-repeat"}
      bgSize="cover"
      bgPos={"center"}
      bgColor="gray.700"
      bgBlendMode={"overlay"}
      top="-46px"
    >
      <Box className="bgr">
        <Container maxWidth="container.xl" px={8}>
          <Stack
            minH={["60vh", "60vh", "70vh"]}
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
                    fontSize={{ base: "md", lg: "xl" }}
                    color={"gray.100"}
                    fontWeight="bold"
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
  );
}
