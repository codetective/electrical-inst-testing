import {
  Heading,
  SimpleGrid,
  Box,
  Image,
  Text,
  Stack,
  Avatar,
  useColorModeValue,
  Button,
} from "@chakra-ui/react";
import React from "react";
import WrapContent from "../../layout/WrapContent";
import SmallHorizontalBar from "../../components/SmallHorizontalBar";
import SmallTitleWithBar from "../../components/SmallTitleWithBar";
import Link from "next/link";

function Leadership() {
  return (
    <WrapContent>
      <Stack spacing="8" py="80px">
        <Box>
          <SmallHorizontalBar mb="5" />
          <Heading
            fontSize={["3xl", "3xl", "4xl"]}
            fontWeight="bold"
            lineHeight={"1.33"}
            color="brand.500"
          >
            Company Leadership
          </Heading>
        </Box>
        <SimpleGrid columns={[1, 1, 2]} spacing="10">
          <Card title="Management Team" />
          <Card title="Board of Directors" />
        </SimpleGrid>
      </Stack>
    </WrapContent>
  );
}

export default Leadership;

function Card({ title }) {
  return (
    <Box
      // maxW={"445px"}
      w={"full"}
      bg={useColorModeValue("white", "gray.900")}
      rounded={"md"}
      overflow={"hidden"}
    >
      <Box h={"350px"} bg={"gray.100"} mt={-6} mx={-6} mb={6} pos={"relative"}>
        <Image
          src={
            "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
          }
          objectFit={"cover"}
          h="full"
          w="full"
        />
      </Box>
      <Stack>
        <Box mb="5">
          <SmallTitleWithBar color="brand.300" title="COMPANY LEADERSHIP" />
        </Box>

        <Heading color="gray.700" fontSize={["2xl", "4xl"]} fontFamily={"body"}>
          {title}
        </Heading>
        <Text color={"gray.500"}>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
          rebum.
        </Text>
      </Stack>
      <Stack mt={6} direction={"row"} spacing={4} align={"center"}>
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
      </Stack>
    </Box>
  );
}
