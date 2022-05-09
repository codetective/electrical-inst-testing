import { Box, HStack, Image, Stack, Center, Text } from "@chakra-ui/react";
import React from "react";
import SectionHeading from "../../components/SectionHeading";
import SmallHorizontalBar from "../../components/SmallHorizontalBar";
import WrapContent from "../../layout/WrapContent";

function OurApproach() {
  return (
    <Box id="services" py="80px">
      <WrapContent>
        <Stack spacing={"8"}>
          <Stack spacing="5" fontFamily="Montserrat">
            <SmallHorizontalBar />

            <SectionHeading text="Our Approach" />
            <HStack spacing="6">
              <Center flexDir={"column"}>
                <Image src="/images/safety.svg" w="65px" h="65px" />
                <Text as="b" pt="2">
                  SAFETY
                </Text>
              </Center>
              <Center flexDir={"column"}>
                <Image src="/images/cordial.svg" w="65px" h="65px" />
                <Text as="b" pt="2">
                  CORDIAL
                </Text>
              </Center>
              <Center flexDir={"column"}>
                <Image src="/images/quality.svg" w="65px" h="65px" />
                <Text as="b" pt="2">
                  QUALITY
                </Text>
              </Center>
            </HStack>
            <Text fontSize={["24px", "2xl", "3xl"]}>
              We focus on clients’ requirements and satisfaction as we approach
              all our projects with industry proven methods and standard
              conventions, with safety of our team and the clients in mind.
            </Text>
            <Text color="gray.600">
              Over the years our experiences have gained outstanding reputation
              for innovation, reliability and service excellence. Customer
              reliability and consistently high quality services are essential
              to our philosophy. Accordingly, each project is implemented based
              on approved industry standard conventions as well as a commitment
              to meet the client’s exact requirements uncompromised by any
              vested interests.
              <br />
              We have acquired trainings and technical expertise from Original
              Equipment Manufacturer (OEMs). Our strong support and maintenance
              culture has enabled us establish very good relationships with our
              clients. With our experienced engineers operating in Lagos, Abuja
              and Port Harcourt, a minimal response time to any maintenance
              requirements is guaranteed.
            </Text>
          </Stack>
        </Stack>
      </WrapContent>
    </Box>
  );
}

export default OurApproach;
