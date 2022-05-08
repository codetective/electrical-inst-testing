import {
  Box,
  HStack,
  Image,
  SimpleGrid,
  Stack,
  Center,
  Text,
} from "@chakra-ui/react";
import React from "react";
import SectionHeading from "../../components/SectionHeading";
import SmallHorizontalBar from "../../components/SmallHorizontalBar";
import WrapContent from "../../layout/WrapContent";

function OurApproach() {
  return (
    <Box id="services">
      <WrapContent>
        <SimpleGrid columns={[1, 1, 2, 2]} py="80px" spacing="40px">
          <Stack spacing={"8"}>
            <Stack spacing="5">
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
              <Text> //TODO</Text>
            </Stack>
          </Stack>
        </SimpleGrid>
      </WrapContent>
    </Box>
  );
}

export default OurApproach;
