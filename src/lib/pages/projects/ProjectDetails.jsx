import { Image, Text, Stack, Box, SimpleGrid } from "@chakra-ui/react";
import { API_BASE_URL } from "../../config";

export default function ProjectDetails({ image, title, desc }) {
  return (
    <SimpleGrid
      maxW={["100%", "100%", "100%", "85%"]}
      columns={[1, 1, 2]}
      spacing={[1, 2, 5]}
      rounded="lg"
      mx="auto"
    >
      <Box maxH="320px">
        <Image
          roundedLeft="lg"
          src={API_BASE_URL + image}
          objectFit="cover"
          width="full"
          height="full"
          alt={desc}
        />
      </Box>
      <Stack p="5" spacing={[4, 5]}>
        <Text as="h6" fontSize={["2xl", "2xl", "3xl", "3xl"]}>
          {title || "Suitable title for project"}
        </Text>
        <Text>{desc}</Text>
      </Stack>
    </SimpleGrid>
  );
}
