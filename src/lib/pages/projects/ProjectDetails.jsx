import { Image, Text, Stack, Box } from "@chakra-ui/react";

export default function ProjectDetails({
  idx,
  title,
  image,
  location,
  tag,
  desc,
}) {
  return (
    <Stack shadow="base" rounded="lg">
      <Box maxH="400px">
        <Image
          roundedTop="lg"
          src={image}
          objectFit="cover"
          width="full"
          height="full"
          alt={desc}
        />
      </Box>
      <Box p="4">
        <Text as="h6">{desc}</Text>
      </Box>
    </Stack>
  );
}
