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
import CTA from "../../components/CTA";

import SectionHeading from "../../components/SectionHeading";
import PageTitleHero from "../../layout/PageTitleHero";
import WrapContent from "../../layout/WrapContent";
import ServiceFeaturesBox from "./ServiceFeaturesBox";
import ServicesLinkBox from "./ServicesLinkBox";

function facility_installation() {
  return (
    <>
      <Box>
        <PageTitleHero
          title={"Facility installation and commissioning"}
          tagline=""
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
                    src={"/images/facility.jpg"}
                    objectFit={"cover"}
                  />
                </Box>
                <Box h="200px">
                  <Image
                    alt={"feature image"}
                    w="full"
                    h="100%"
                    src={"/images/img2.jpg"}
                    objectFit={"cover"}
                  />
                </Box>
              </SimpleGrid>
              <SectionHeading
                text={"Effective facility installation services :"}
              />
              <Stack spacing="5" fontFamily={"Montserrat"}>
                {/* <Text></Text> */}
                <Text color="gray.700">
                  ● Implementation of P&ID and PEFs from design stage,
                  Installation, commissioning and Facility Start up.
                </Text>

                <Text color="gray.700">
                  ● Supply and Implementation of Cable scheduled Bill of
                  Materials and Design strategies for Facility installation and
                  commissioning, involving:
                  <List
                    pl="8"
                    fontWeight="400"
                    spacing="3"
                    listStyleType={"lower-alpha"}
                  >
                    <ListItem pt="3">
                      Carrying out project modification like erection, circuitry
                      wiring and termination, loop checks, function testing and
                      commissioning.
                    </ListItem>
                    <ListItem>
                      {" "}
                      Providing high level technical support to Client at their
                      location.
                    </ListItem>

                    <ListItem>
                      {" "}
                      Installation, Commissioning and Start-up of Vendor
                      Packages.
                    </ListItem>
                    <ListItem>
                      {" "}
                      Periodic Intervention Campaign for Facility Maintenance
                      and Upgrade.
                    </ListItem>
                  </List>
                </Text>

                <Text color="gray.700">
                  ● Commissioning and facility start-up by:
                  <List
                    pl="8"
                    fontWeight="400"
                    spacing="3"
                    listStyleType={"lower-alpha"}
                  >
                    <ListItem pt="3">
                      Providing commissioning support, preparation of
                      pre-commissioning, commission and start-up execution plan.
                    </ListItem>
                    <ListItem>
                      {" "}
                      Developing, planning and scheduling of pre-commissioning
                      and commissioning for the entire projects and integration
                      for client start-up.
                    </ListItem>
                    <ListItem>
                      Fire suppression systems such as FM200, CO2 discharge,
                      Sprinkler unit and Foam compound
                    </ListItem>
                    <ListItem>
                      {" "}
                      Preparing operational test procedures for packages unit,
                      specific utility or process systems in collaboration with
                      vendors and FEED.
                    </ListItem>
                  </List>
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

export default facility_installation;
