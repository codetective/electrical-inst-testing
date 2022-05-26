import { Box, Image, SimpleGrid, Stack, Text } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import SectionHeading from "../../components/SectionHeading";
import SEO from "../../components/SEO";
import PageTitleHero from "../../layout/PageTitleHero";
import WrapContent from "../../layout/WrapContent";
import CTA from "../../components/CTA";

export const services = [
  {
    title: "Supply, Installation and Maintenace",
    img: "/images/install.jpg",
    path: "/installation_and_maintenance",
  },
  {
    title: "Fire and gas services",
    img: "/images/fireandgas.jpg",
    path: "/fire_and_gas",
  },
  {
    title: "Facility Installation",
    img: "/images/facility.jpg",
    path: "/facility_installation",
  },
  {
    title: "HVAC Installation Services ",
    img: "/images/hvac.jpg",
    path: "/hvac_installation",
  },
];

function index() {
  return (
    <>
      <SEO
        title={"Services offered at Avetrix"}
        desc="Here you'll find alist of services we offer"
        path="/services"
      />
      <PageTitleHero tagline={""} title="What We Do" />
      <Box py="80px">
        <WrapContent>
          <Stack spacing="5">
            <SectionHeading text={"We offer different services."} />{" "}
            <Box>
              <Text color="gray.600">
                AVETRIX is duly incorporated in Nigeria as an integrated
                Engineering firm offering strategic Engineering Services to the
                Oil & Gas sector, Manufacturing, Construction, Maritime,
                Industries and Government establishments.
                <br /> We believe we offer a more personalized approach to
                contracting which in turn offers a rapid response and timely
                quality service to our client at a lower cost.
              </Text>
            </Box>
            <SimpleGrid py="5" columns={[1, 1, 2]} spacing={[10, 10, 10]}>
              {services.map((s, i) => {
                return (
                  <Link href={s.path} key={i}>
                    <a className="pjlink">
                      <Stack>
                        <Box h="270px" overflow="hidden">
                          <Image
                            w="full"
                            h="full"
                            objectFit={"cover"}
                            src={s.img}
                          />
                        </Box>
                        <Box pt="5">
                          <Text fontSize="xl">{s.title}</Text>
                        </Box>
                      </Stack>
                    </a>
                  </Link>
                );
              })}
            </SimpleGrid>
            <Text fontSize={["24px", "2xl", "3xl"]}>
              Other services we offer include :
            </Text>
            <Stack spacing="3" fontSize="lg">
              <Text>● Procurement</Text>
              <Text>● Calibration services</Text>
              <Text>● Project Management Inspection</Text>
              <Text>● Non Destruction testing (NDT)</Text>
              <Text>● Equipment hiring and Rentals</Text>
              <Text>● Electrical System Installation </Text>
              <Text>● CCTV & Security System </Text>
              <Text>● Telecommunication System Installation </Text>
              <Text>● Solar & Inverter System Installation</Text>
            </Stack>
          </Stack>
        </WrapContent>
      </Box>
      <CTA />
    </>
  );
}

export default index;
