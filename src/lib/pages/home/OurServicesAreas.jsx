import { Heading, SimpleGrid, Stack, Text, Box } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import SectionHeading from "../../components/SectionHeading";
import WrapContent from "../../layout/WrapContent";
const contentForCards = [
  {
    heading: "Installation and maintenance",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to m",
    link: "/installation_and_maintenance",
  },
  {
    heading: "Instrumentation and testing of equipment",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to m",
    link: "/link",
  },
];

export default function OurServicesAreas() {
  return (
    <Box bg="gray.50">
      <WrapContent>
        <Stack py="60px" spacing={"10"}>
          <Stack spacing="5">
            <SectionHeading text="Services we offer" />
            <Text>
              {" "}
              Lorem Ipsum has been the industry's standard dummy text ever since
              the 1500s,
              <br /> when an unknown printer took a galley of type and scrambled
              it to make a type specimen book
            </Text>
          </Stack>
          <SimpleGrid columns={[1, 1, 2]} spacing="10">
            {contentForCards.map((c, i) => {
              return (
                <CardBox
                  heading={c.heading}
                  text={c.text}
                  link={c.link}
                  key={i}
                />
              );
            })}
            {/* end of card one */}
          </SimpleGrid>
        </Stack>
      </WrapContent>
    </Box>
  );
}

function CardBox({ heading, text, link }) {
  return (
    <Stack
      rounded="md"
      shadow="lg"
      spacing="5"
      p="6"
      position={"relative"}
      _before={{
        content: `''`,
        height: "100%",
        width: "5px",
        backgroundColor: "#ef682f",
        position: "absolute",
        top: "0",
        left: "0",
        borderTopLeftRadius: "10px",
        borderBottomLeftRadius: "10px",
      }}
    >
      <Text
        as="h3"
        textTransform={"capitalize"}
        fontWeight="bold"
        fontSize={"19px"}
        fontFamily="Montserrat"
      >
        {heading}
      </Text>
      <Text>{text}</Text>

      <Link href={link}>
        <Text
          as="a"
          fontSize="14px"
          fontWeight="bold"
          textTransform={"uppercase"}
          color="brand.300"
          fontFamily="Montserrat"
          cursor={"pointer"}
          width="fit-content"
        >
          READ MORE
        </Text>
      </Link>
    </Stack>
  );
}
