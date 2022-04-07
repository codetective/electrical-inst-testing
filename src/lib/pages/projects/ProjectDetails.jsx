// import React from 'react'
import WrapContent from "../../layout/WrapContent";

// export default function ProjectDetails() {
//   return (
//     <WrapContent>
// <Stack dir={['column', 'column', 'row']}>

// </Stack>
//     </WrapContent>
//   )
// }

import {
  Container,
  SimpleGrid,
  Image,
  Flex,
  Heading,
  Text,
  Stack,
  StackDivider,
  Icon,
  useColorModeValue,
  Box,
  VStack,
} from "@chakra-ui/react";
import { IoLocationSharp, IoSearchSharp } from "react-icons/io5";
import { BiCategoryAlt } from "react-icons/bi";

const Feature = ({ text, icon, iconBg, tag }) => {
  return (
    <Stack direction={"row"} align={"center"} alignItems="flex-start">
      <Flex
        w={6}
        h={6}
        align={"center"}
        justify={"center"}
        rounded={"full"}
        bg={iconBg}
      >
        {icon}
      </Flex>
      <Stack>
        <Text fontSize="14px" fontWeight={700}>
          {tag}
        </Text>
        <Text fontWeight={500}>{text}</Text>
      </Stack>
    </Stack>
  );
};

export default function ProjectDetails({
  idx,
  title,
  image,
  location,
  tag,
  desc,
}) {
  return (
    // <WrapContent>
    <Stack
      flexDir={
        idx % 2 == 0
          ? ["column-reverse", , "row", "row"]
          : [, "column-reverse", "row-reverse", "row-reverse"]
      }
    >
      <Stack
        spacing={4}
        justifyContent="center"
        w={["100%", "100%", "50%"]}
        p="10"
      >
        <Heading>{title}</Heading>
        <Text color={"gray.500"} fontSize={"md"}>
          {desc}
        </Text>
        <Stack
          spacing={1}
          divider={
            <StackDivider
              borderColor={useColorModeValue("gray.100", "gray.700")}
            />
          }
        >
          <Feature
            icon={
              <Icon as={IoLocationSharp} color={"yellow.500"} w={5} h={5} />
            }
            iconBg={useColorModeValue("yellow.100", "yellow.900")}
            text={location}
            tag="LOCATION"
          />

          <Feature
            icon={<Icon as={BiCategoryAlt} color={"purple.500"} w={5} h={5} />}
            iconBg={useColorModeValue("purple.100", "purple.900")}
            text={tag}
            tag="CATEGORY"
          />
        </Stack>
      </Stack>
      <Flex w={["100%", "100%", "50%"]}>
        <Image
          alt={"feature image"}
          w="full"
          h="full"
          src={image}
          objectFit={"cover"}
        />
      </Flex>
    </Stack>
    // </WrapContent>
  );
}
