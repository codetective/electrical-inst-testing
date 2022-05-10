import {
  Box,
  ListItem,
  Stack,
  List,
  SimpleGrid,
  Text,
  Image,
  Icon,
} from "@chakra-ui/react";
import React from "react";

import SectionHeading from "../../components/SectionHeading";
import PageTitleHero from "../../layout/PageTitleHero";
import WrapContent from "../../layout/WrapContent";
import ServiceFeaturesBox from "./ServiceFeaturesBox";
import ServicesLinkBox from "./ServicesLinkBox";

function Installation_and_maintenance() {
  return (
    <Box>
      <PageTitleHero
        title={"Installation & Maintenance"}
        tagline="Leverage our expert knowledge and experience in electrical installation and maintenance culture."
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
                  src={"/images/pj1.jpg"}
                  objectFit={"cover"}
                />
              </Box>
              <Box h="200px">
                <Image
                  alt={"feature image"}
                  w="full"
                  h="100%"
                  src={"/images/install.jpg"}
                  objectFit={"cover"}
                />
              </Box>
            </SimpleGrid>
            <SectionHeading text={"Efficient Installation services :"} />
            <Stack spacing="5" fontFamily={"Montserrat"}>
              {/* <Text></Text> */}
              <Text color="gray.700">
                ● Supply, Installation, maintenance and commissioning of
                pneumatics instrument such as pneumatic controllers, level
                switch, Pressure switch, Temperature switch, Robertshaw panel
                and calibration of any Pneumatic devices.
              </Text>
              <Text color="gray.700">
                ● Supply, Installation, calibration and commissioning of HART
                devices such as Pressure transmitters, Temperature transmitters,
                control valves, shut down valves, level transmitters, Flow
                Transmitters, controllers, solenoid valves, switches, pneumatic
                sensors, and transducers.
              </Text>

              <Text color="gray.700">
                ● Supply, Installation, calibration and commissioning of
                Foundation Fieldbus devices, Systems and packages ● Supply,
                Installation, Maintenance and Optimization of Heatec Hot Oil
                System with Eclipse Ratiomatic burners, Temperature controllers
                and safeguarding systems, Steam Bath Heating systems and any
                other Heating and combustion systems.
              </Text>
              <Text color="gray.700">
                ● Installation, configuration and commissioning of GE sensing
                instruments and Flow Meters.
              </Text>
              <Text color="gray.700">
                ● Supply, Installation and Commissioning, Validation and
                Calibration of Metering Systems
              </Text>
              <Text color="gray.700">
                ● Supply, Installation, commissioning and maintenance of Fire
                and Gas detection system, Fire and Gas suppression system.
              </Text>
              <Text color="gray.700">
                ● Supply, Installation, Overhauling and Servicing, Stroking and
                simulation of Control Valves and shut down valves.{" "}
              </Text>
              <Text color="gray.700">
                ● Supply, Installation, Overhauling, Servicing and Setting of
                Pressure Relieve Valves (PRVs), Pressure Safety Valve (PSVs) and
                Vacuum Valves.
              </Text>
              <Text color="gray.700">
                ● Supply, Design and Wiring of Marshalling Cabinets, Control
                Cabinet and PLC installation.
              </Text>
              <Text color="gray.700">
                ● Turn around maintenance, Preventive maintenance and Corrective
                Maintenance of Instruments and Vendor Packages.
              </Text>
              <Text color="gray.700">
                ● Supply, Installation, maintenance and commissioning of
                Lightning Protection systems, Earthling systems and General
                Electrification projects.
              </Text>
              <Text color="gray.700">
                ● Cabinets Assembly, wiring and configuration.
              </Text>
            </Stack>
            <ServiceFeaturesBox />
          </Stack>
        </Stack>
      </WrapContent>
    </Box>
  );
}

export default Installation_and_maintenance;
