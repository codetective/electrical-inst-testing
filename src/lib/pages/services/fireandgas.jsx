import {
  Box,
  ListItem,
  Stack,
  List,
  SimpleGrid,
  Text,
  Image,
  Icon,
  HStack,
} from "@chakra-ui/react";
import React from "react";
import CTA from "../../components/CTA2";

import SectionHeading from "../../components/SectionHeading";
import PageTitleHero from "../../layout/PageTitleHero";
import WrapContent from "../../layout/WrapContent";
import ServiceFeaturesBox from "./ServiceFeaturesBox";
import ServicesLinkBox from "./ServicesLinkBox";

function Fire_and_gas() {
  return (
    <>
      <Box>
        <PageTitleHero
          title={"Fire and Gas services"}
          tagline="We provide and install very high quality fire suppression and fire detection equipment"
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
                    src={"/images/fireandgas.jpg"}
                    objectFit={"cover"}
                  />
                </Box>
                <Box h="200px">
                  <Image
                    alt={"feature image"}
                    w="full"
                    h="100%"
                    src={"/images/firegas.jpg"}
                    objectFit={"cover"}
                  />
                </Box>
              </SimpleGrid>
              <SectionHeading text={"Effective Fire & Gas services :"} />
              <Stack spacing="5" fontFamily={"Montserrat"}>
                {/* <Text></Text> */}
                <Text color="gray.700" fontWeight="500">
                  ● Supply, Installation, configuration and commissioning of:
                  <List
                    pl="8"
                    fontWeight="400"
                    spacing="3"
                    listStyleType={"lower-alpha"}
                  >
                    <ListItem pt="3">
                      Advance automated fire detection and alarm system e. Voice
                      Evacuation Systems such PAGA system etc
                    </ListItem>
                    <ListItem> Fire and Gas RIM SEAL Detection system</ListItem>
                    <ListItem>
                      Fire suppression systems such as FM200, CO2 discharge,
                      Sprinkler unit and Foam compound
                    </ListItem>
                    <ListItem> Fire Fighting Systems</ListItem>
                    <ListItem> Fire Trainings and consultancy</ListItem>
                    <ListItem> Rescue and safety Facility</ListItem>
                    <ListItem>
                      Fire engineering Design (FEED & Detailed Design)
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

export default Fire_and_gas;
