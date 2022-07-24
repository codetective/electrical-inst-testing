import {
  chakra,
  SimpleGrid,
  Stack,
  Text,
  Box,
  Icon,
  Flex,
  Button,
} from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import { FiArrowDown } from "react-icons/fi";
import SectionHeading from "../../components/SectionHeading";
import WrapContent from "../../layout/WrapContent";
const contentForCards = [
  {
    heading: "Supply, installation, maintenance and calibration of:",
    link: "/installation_and_maintenance",
    content: [
      "Pneumatic devices and control.",
      "HART devices, systems and packages.",
      "Flow sensing instruments and packages.",
      "Weight measuring instruments and packages.",
    ],
  },
  {
    heading: "Facility installation and commissioning, via:",
    link: "/instrumentation",
    content: [
      "Implementation of P&ID and PEFs from design stage",
      "Supply and Implementation of design strategies for facilities",
      "Carryout project modification, loop checks and function testing.",
      "Provide high level technical support.",
      "Periodic Intervention Campaigns for Facility Maintenance and Upgrade.",
    ],
  },
  {
    heading: "Fire and gas services:",
    link: "/instrumentation",
    content: [
      "Supply and installation of Active and Passive fire protection systems.",
      " Voice Evacuation Systems such as PAGA systems,",
      "Advance automated fire detection and alarm systems,",
      "Fire and Gas RIM SEAL Detection systems, and",
      " Rescue and safety Facility ",
    ],
  },
  {
    heading: "Other services",
    link: "/instrumentation",
    content: [
      "Procurement",
      "Calibration services",
      "Project Management Inspection",
      "Non Destructive Testing (NDT)",
      "Equipment hiring and Rentals",
      "Electrical System Installation ,",
      "CCTV & Security System ",
      "Telecommunication System Installation ",
      "Solar & Inverter System Installation",
    ],
  },
];

export default function OurServicesAreas() {
  return (
    <Box bg="gray.50">
      <WrapContent>
        <Stack py="60px" spacing={"10"}>
          <Stack spacing="5">
            <SectionHeading text="What we do" />
            <Text>
              As an integrated Engineering firm, we offer strategic Engineering
              Services to <br />
              the Oil & Gas sector, Manufacturing, Construction, Maritime,
              Industries and Government establishments.
            </Text>
          </Stack>
          <SimpleGrid columns={[1, 1, 1, 2]} spacing="10">
            {contentForCards.map((c, i) => {
              return (
                <CardBox
                  heading={c.heading}
                  text={c.text}
                  link={c.link}
                  key={i}
                  idx={i}
                  content={c.content}
                />
              );
            })}
            {/* end of cards */}
          </SimpleGrid>
          <Link href="/services">
            <a
              style={{
                width: "fit-content",
                display: "block",
                marginInline: "auto",
              }}
            >
              <Button
                rounded="full"
                bg="brand.300"
                color="white"
                size="lg"
                px={"40px"}
                fontSize="xl"
                fontWeight="bold"
                _hover={{
                  bg: "brand.400",
                  color: "white",
                }}
                rightIcon={<FiArrowDown />}
              >
                see full list
              </Button>
            </a>
          </Link>
        </Stack>
      </WrapContent>
    </Box>
  );
}

function CardBox({ heading, content, idx = 1 }) {
  let c = "'";
  return (
    <Stack
      rounded="md"
      shadow="lg"
      spacing="5"
      pt="10"
      pb="6"
      px={[5, 8]}
      position={"relative"}
      _before={{
        content: c + (idx + 1) + c,
        height: "50px",
        width: "50px",
        // backgroundColor: "#ef682f",
        backgroundColor: "brand.400",
        position: "absolute",
        top: "-3",
        left: "-3",
        borderRadius: "50%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "white",
        fontSize: "20px",
        fontWeight: "bold",
      }}
    >
      <Text
        as="h3"
        fontWeight="light"
        fontSize={["xl", "2xl"]}
        fontFamily="Montserrat"
      >
        {heading}
      </Text>
      {content && content.map((c, i) => <Feature key={i}>{c}</Feature>)}
    </Stack>
  );
}

const Feature = (props) => {
  return (
    <Flex>
      <Icon boxSize={5} mt={1} mr={2} viewBox="0 0 20 20" fill="currentColor">
        <path
          fillRule="evenodd"
          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
          clipRule="evenodd"
        ></path>
      </Icon>
      <chakra.p fontSize="md" {...props} />
    </Flex>
  );
};
