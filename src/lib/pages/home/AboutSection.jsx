import { Box, Button, Image, SimpleGrid, Stack, Text } from "@chakra-ui/react";
import React from "react";
import WrapContent from "../../layout/WrapContent";
import SectionHeading from "../../components/SectionHeading";
import SmallHorizontalBar from "../../components/SmallHorizontalBar";
import Link from "next/link";
import AnimateInView from "../../components/motion/AnimateInView";

export default function AboutSection() {
  return (
    <WrapContent>
      <SimpleGrid id="explore" columns={[1, 1, 2]} py="40px" spacing="20">
        <Stack spacing="5">
          <Box>
            <SmallHorizontalBar mb="5" />
            <SectionHeading text="Who we are" />
          </Box>
          <Text fontWeight="semibold">
            Established in 2012, AVETRIX is duly incorporated in Nigeria as an
            integrated Engineering firm offering strategic Engineering Services
            to the Oil & Gas sector, Manufacturing, Construction, Maritime,
            Industries and Government establishments.
          </Text>
          <Text fontSize={"15px"} color="gray.600">
            We utilise advanced technologies to serve our clients looking for
            efficient and more reliable services in different areas such as
            installation and maintenance of special electrical equipment. Our
            wealth of experience acquired over the years help us deliver beyond
            expectations.
          </Text>
          <Link href="/about_us">
            <a>
              <Button
                bg={"brand.300"}
                rounded="full"
                color="white"
                px={"40px"}
                fontWeight="bold"
                _hover={{
                  bg: "brand.400",
                }}
              >
                Learn more about us
              </Button>
            </a>
          </Link>
        </Stack>

        <AnimateInView
          hidden={{ y: "50px", opacity: 0.5 }}
          visible={{
            y: 0,
            opacity: 1,
          }}
          duration={2}
        >
          <Image
            alt={"feature image"}
            w="full"
            h="full"
            src={"/images/pj1.jpg"}
            objectFit={"cover"}
          />
        </AnimateInView>
      </SimpleGrid>
    </WrapContent>
  );
}
