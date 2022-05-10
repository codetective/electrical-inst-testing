import {
  Box,
  ListItem,
  Stack,
  List,
  SimpleGrid,
  Text,
  Image,
} from "@chakra-ui/react";
import React from "react";
import CTA from "../../components/CTA2";

import SectionHeading from "../../components/SectionHeading";
import PageTitleHero from "../../layout/PageTitleHero";
import WrapContent from "../../layout/WrapContent";
import ServiceFeaturesBox from "./ServiceFeaturesBox";
import ServicesLinkBox from "./ServicesLinkBox";

function HVAC() {
  return (
    <>
      <Box>
        <PageTitleHero
          title={"Heating and Ventilation Services"}
          tagline="From unitary products to applied systems, AVETRIX Global offers a comprehensive line of commercial HVAC systems and services."
        />
        <WrapContent>
          <Stack
            flexDir={["column-reverse", "column-reverse", "row"]}
            // spacing="10"
            py="40px"
          >
            <ServicesLinkBox />
            <Stack spacing="8" w={["100%", "100%", "70%"]} pb="10">
              <SimpleGrid columns={[1, 2, 2]} spacing="10">
                <Box h="200px">
                  <Image
                    alt={"feature image"}
                    w="full"
                    h="full"
                    src={"/images/hvac1.jpg"}
                    objectFit={"cover"}
                  />
                </Box>
                <Box h="200px">
                  <Image
                    alt={"feature image"}
                    w="full"
                    h="100%"
                    src={"/images/hvac2.jpg"}
                    objectFit={"cover"}
                  />
                </Box>
              </SimpleGrid>
              <SectionHeading text={"HVAC services :"} />
              <Stack spacing="5" fontFamily={"Montserrat"}>
                {/* <Text></Text> */}
                <Text color="gray.700">
                  ● AVETRIX Global offers a large range of choice for air
                  conditioning / heating and refrigeration units to satisfy
                  every customer’s needs.
                  <p>
                    These include reputable and reliable World-Wide brands such
                    as Carrier, Panasonic and Fujitsu.
                  </p>
                  <p>
                    Furthermore, AVETRIX Global also provides a unique service
                    that ensures your system operates at peak efficiency, in
                    both energy management and in system performance.
                  </p>
                </Text>
                <Text color="gray.700">
                  ● Cooling and Heating Systems:
                  <p>
                    From unitary products to applied systems, AVETRIX Global
                    offers a comprehensive line of commercial HVAC systems and
                    services for office buildings, manufacturing, retail,
                    schools and universities, Oil and Gas sector, companies and
                    Government agencies.
                  </p>
                </Text>
                <Text color="gray.700">
                  ● Accommodation Air Conditioning:{" "}
                  <p>
                    AVETRIX Global offers Corrective and Preventative
                    Maintenance Services for a complete heating/cooling solution
                    for hotels, industries, and apartment buildings.{" "}
                  </p>
                </Text>
                <Text color="gray.700">
                  ● Preventative Maintenance Agreements:{" "}
                  <p>
                    AVETRIX Global Customised Preventative Maintenance service
                    is unique to the industry. The Maintenance Service Agreement
                    keeps your system in tip-top shape, and helps prevent
                    unwanted service calls.
                  </p>
                  A Preventative Maintenance service agreement from AVETRIX
                  Global Air Conditioning, will save you money and assure
                  uninterrupted all year round comfort
                </Text>
              </Stack>
              <ServiceFeaturesBox />
            </Stack>
          </Stack>
        </WrapContent>
      </Box>
      <CTA />
    </>
  );
}

export default HVAC;
