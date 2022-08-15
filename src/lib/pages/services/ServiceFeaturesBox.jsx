import { Box, Icon, SimpleGrid, Stack, Text } from "@chakra-ui/react";
import React from "react";
import { GrUserExpert } from "react-icons/gr";
import { HiBadgeCheck, HiOutlineThumbUp } from "react-icons/hi";
import { AiOutlineFieldTime } from "react-icons/ai";
// Our strong support and maintenance culture has enabled us establish very good relationships with our clients.

export default function ServiceFeaturesBox() {
  return (
    <Stack>
      <SimpleGrid columns={[1, 1, 2]}>
        <InfoCard
          title={"expert personnel"}
          desc="We have acquired trainings and technical expertise from Original Equipment Manufacturer (OEMs). With our experienced engineers operating in Lagos, Abuja and Port Harcourt, a minimal response time to any maintenance requirements is guaranteed"
          icon={GrUserExpert}
        />

        <InfoCard
          title={"Delivery on time"}
          desc="AVETRIX drives innovation and timely delivery that makes the world safer and sustainable."
          icon={AiOutlineFieldTime}
        />
        <InfoCard
          title={"quality products"}
          desc="AVETRIX CONTROLS set industry standards for reliability, adaptability and energy efficiency."
          icon={HiBadgeCheck}
        />
        <InfoCard
          title={"#1 consultancy team"}
          desc="Our consultants employ innovative technologies to accelerate your competitive edge."
          icon={HiOutlineThumbUp}
        />
      </SimpleGrid>
    </Stack>
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
