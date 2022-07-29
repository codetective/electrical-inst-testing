import { Image, Text, Stack, Box, SimpleGrid } from "@chakra-ui/react";
import { API_BASE_URL } from "../../config";

export default function ProjectDetails({ image, title, desc }) {
  return (
    <Stack
      maxW={["100%", "100%", "100%", "85%"]}
      spacing={[1, 2, 5]}
      rounded="lg"
      mx="auto"
    >
      <Box maxH="500px">
        <Image
          rounded="lg"
          src={API_BASE_URL + image}
          objectFit="cover"
          width="full"
          height="full"
          alt={desc}
        />
      </Box>
      <Stack p="5" spacing={3} textAlign={"center"}>
        <Text as="h5" fontSize={["20px", "2xl"]}>
          {desc}
        </Text>
        <Text
          as="small"
          textTransform="uppercase"
          fontSize={"xs"}
          fontWeight="bold"
          color="brand.300"
        >
          {title || "Suitable title for project"}
        </Text>
      </Stack>
    </Stack>
  );
}
