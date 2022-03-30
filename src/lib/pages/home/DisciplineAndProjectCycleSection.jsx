import { Heading, SimpleGrid, Stack, Text, Box } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import WrapContent from "../../layout/WrapContent";
const contentForCards = [
  {
    heading: "heading fot this card here",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to m",
    link: "/link",
  },
  {
    heading: "heading fot this card here",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to m",
    link: "/link",
  },
];

export default function DisciplineAndProjectCycleSection() {
  return (
    <WrapContent>
      <Stack py="40px" spacing={"10"} my="40px">
        <Box textAlign="center">
          <Heading as="h2">
            lorem ipsum toreta about <br /> what the oufit engages in
          </Heading>
          <Text>
            {" "}
            Lorem Ipsum has been the industry's standard dummy text ever since
            the 1500s,
            <br /> when an unknown printer took a galley of type and scrambled
            it to make a type specimen book
          </Text>
        </Box>
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
