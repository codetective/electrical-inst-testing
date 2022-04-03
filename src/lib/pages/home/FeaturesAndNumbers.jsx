import {
  Box,
  Heading,
  SimpleGrid,
  Stack,
  Text,
  Icon,
  Flex,
} from "@chakra-ui/react";
import React from "react";
import { FcFactory } from "react-icons/fc";

import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";
import WrapContent from "../../layout/WrapContent";
import Link from "next/link";
import SmallHorizontalBar from "../../components/SmallHorizontalBar";
const acItemsList = [
  {
    title: " item atrrribute totle",
    text: "  Lorem ipsum dolor sit amet, consectetur adipiscing elit, seddo eiusmod tempor incididunt ut labore et dolore magna    aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    title: " item atrrribute totle",
    text: "  Lorem ipsum dolor sit amet, consectetur adipiscing elit, seddo eiusmod tempor incididunt ut labore et dolore magna    aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    title: " item atrrribute totle",
    text: "  Lorem ipsum dolor sit amet, consectetur adipiscing elit, seddo eiusmod tempor incididunt ut labore et dolore magna    aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
];

export default function FeaturesAndNumbers() {
  return (
    <WrapContent>
      <SimpleGrid columns={[1, 1, 2]} py="80px" spacing="40px">
        <Stack spacing={"5"}>
          <Box>
            <SmallHorizontalBar mb="5" />

            <Heading as="h2">
              lorem ipsum toreta about what the oufit engages in
            </Heading>
            <Text>
              {" "}
              Lorem Ipsum has been the industry's standard dummy text ever since
              the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book
            </Text>
          </Box>
          <Accordion allowToggle>
            {acItemsList.map((a, i) => {
              return <ACItem item={a} key={i} />;
            })}
          </Accordion>
          <Text>
            {" "}
            Lorem Ipsum has been the industry's standard dummy text ever since
            the 1500s,
          </Text>
          <Link href={"/"}>
            <Text
              as="a"
              fontSize="14px"
              fontWeight="bold"
              textTransform={"uppercase"}
              color="brand.300"
              fontFamily="Montserrat"
              cursor={"pointer"}
              width="fit-content"
            >
              WHY US
            </Text>
          </Link>
        </Stack>
        <Stack borderTop={"6px solid gray"}>
          <Box>
            <Text
              bg="white"
              width="fit-content"
              m={{ md: "auto" }}
              transform="translateY(-15px)"
              color="brand.400"
              textTransform={"uppercase"}
              fontWeight="bold"
              fontSize="14px"
              fontFamily={"Montserrat"}
              px="3"
            >
              numbers we're proud of
            </Text>
          </Box>
          <SimpleGrid columns="2" spacing={["5", "10"]}>
            <GridItem
              icon={FcFactory}
              title="56m"
              text=" sq ft of industrial building layout"
            />
            <GridItem
              icon={FcFactory}
              title="56m"
              text=" sq ft of industrial building layout"
            />
            <GridItem
              icon={FcFactory}
              title="56m"
              text=" sq ft of industrial building layout"
            />
            <GridItem
              icon={FcFactory}
              title="56m"
              text=" sq ft of industrial building layout"
            />
            <GridItem
              icon={FcFactory}
              title="56m"
              text=" sq ft of industrial building layout"
            />
            <GridItem
              icon={FcFactory}
              title="56m"
              text=" sq ft of industrial building layout"
            />
            <GridItem
              icon={FcFactory}
              title="56m"
              text=" sq ft of industrial building layout"
            />
            <GridItem
              icon={FcFactory}
              title="56m"
              text=" sq ft of industrial building layout"
            />
            <GridItem
              icon={FcFactory}
              title="56m"
              text=" sq ft of industrial building layout"
            />
          </SimpleGrid>
        </Stack>
      </SimpleGrid>
    </WrapContent>
  );
}

function ACItem({ item }) {
  return (
    <AccordionItem
      borderBottomWidth="0 !important"
      borderTopWidth="0 !important"
      paddingStart="0"
    >
      {({ isExpanded }) => (
        <>
          <h2>
            <AccordionButton
              borderBottomWidth="0"
              borderTopWidth="0"
              paddingStart={"0"}
              _focus={{
                boxShadow: "0",
                bg: "none",
                outline: "none",
              }}
              _hover={{
                boxShadow: "0",
                bg: "none",
                outline: "none",
              }}
            >
              <AccordionIcon />
              <Box
                flex="1"
                textAlign="left"
                fontWeight={"bold"}
                fontSize="18px"
                textTransform={"uppercase"}
                fontFamily="Montserrat"
                color="brand.200"
              >
                {item.title}
              </Box>
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>{item.text}</AccordionPanel>
        </>
      )}
    </AccordionItem>
  );
}

function GridItem({ icon, title, text }) {
  return (
    <Flex flexDir={{ base: "column", md: "column", lg: "row" }} spacing="0">
      <Icon as={icon} color="brand.300" fontSize="56px" />
      <Stack>
        <Heading
          fontWeight={"bolder"}
          color="brand.300"
          textTransform={"uppercase"}
          fontSize="2xl"
        >
          {title}
        </Heading>
        <Text
          fontWeight={"bolder"}
          color="gray.600"
          textTransform={"uppercase"}
          fontSize="sm"
          lineHeight={"15px"}
        >
          {text}
        </Text>
      </Stack>
    </Flex>
  );
}
