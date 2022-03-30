import { Box, Heading, SimpleGrid, Stack, Text } from "@chakra-ui/react";
import React from "react";

import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";
import WrapContent from "../../layout/WrapContent";
import Link from "next/link";
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
      <SimpleGrid columns={[1, 1, 2]} py="40px" spacing="40px">
        <Stack spacing={"5"}>
          <Box>
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
        <Stack>
          <SimpleGrid columns="2">right</SimpleGrid>
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
