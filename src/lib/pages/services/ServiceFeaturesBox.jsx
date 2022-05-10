import { Box, Icon, SimpleGrid, Stack, Text } from "@chakra-ui/react";
import React from "react";
import { GrUserExpert } from "react-icons/gr";
import { HiBadgeCheck, HiOutlineThumbUp } from "react-icons/hi";
import { AiOutlineFieldTime } from "react-icons/ai";

export default function ServiceFeaturesBox() {
  return (
    <SimpleGrid columns={[1, 1, 2]}>
      <InfoCard
        title={"expert personnel"}
        desc=" Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment"
        icon={GrUserExpert}
      />

      <InfoCard
        title={"Delivery on time"}
        desc=" Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment"
        icon={AiOutlineFieldTime}
      />
      <InfoCard
        title={"quality products"}
        desc=" Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment"
        icon={HiBadgeCheck}
      />
      <InfoCard
        title={"#1 consultancy team"}
        desc=" Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment"
        icon={HiOutlineThumbUp}
      />
    </SimpleGrid>
  );
}

function InfoCard({ title, icon, desc }) {
  return (
    <Stack
      border="1px solid"
      borderColor={"gray.300"}
      flexDir={["column", "column", "row"]}
      p="4"
    >
      <Box w="fit-content" pr="5" pt="2" pb="5" mx="auto">
        <Icon as={icon} fontSize="40px" />
      </Box>
      <Stack spacing="3" w="100%">
        <Text
          textTransform={"capitalize"}
          textAlign={["center", "center", "left"]}
          fontWeight="500"
          fontSize={"18px"}
          fontFamily="Poppins"
        >
          {title}
        </Text>
        <Text color="gray.500" textAlign={["center", "center", "left"]}>
          {desc}
        </Text>
      </Stack>
    </Stack>
  );
}
