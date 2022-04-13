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
import { GrUserExpert } from "react-icons/gr";
import { HiBadgeCheck, HiOutlineThumbUp } from "react-icons/hi";
import { AiOutlineFieldTime } from "react-icons/ai";
import SectionHeading from "../../components/SectionHeading";
import PageTitleHero from "../../layout/PageTitleHero";
import WrapContent from "../../layout/WrapContent";
import NavLink from "../../components/NavLink";
import ServicesLinkBox from "./ServicesLinkBox";

function Installation_and_maintenance() {
  return (
    <Box>
      <PageTitleHero
        title={"Installation & Maintenance"}
        tagline="Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate."
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
              <Image
                alt={"feature image"}
                w="full"
                h="full"
                src={"/images/pj1.jpg"}
                objectFit={"cover"}
              />
              <Image
                alt={"feature image"}
                w="full"
                h="full"
                src={"/images/pj2.jpg"}
                objectFit={"cover"}
              />
            </SimpleGrid>
            <SectionHeading text={"Efficient Installation service"} />
            <Text color="gray.600">
              Leverage agile frameworks to provide a robust synopsis for high
              level overviews. Iterative approaches to corporate strategy foster
              collaborative thinking to further the overall value proposition.
              Organically grow the holistic world view of disruptive innovation
              via workplace diversity and empowerment.
            </Text>
            <Text color="gray.600">
              Bring to the table win-win survival strategies to ensure proactive
              domination. At the end of the day, going forward, a new normal
              that has evolved from generation X is on the runway heading
              towards a streamlined cloud solution. User generated content in
              real-time will have multiple touchpoints for offshoring.
              Capitalize on low hanging fruit to identify a ballpark value added
              activity to beta test.
            </Text>
            <SimpleGrid columns={[1, 1, 2]}>
              <InfoCard
                title={"expert personnel"}
                desc=" Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment"
                icon={GrUserExpert}
              />

              <InfoCard
                title={"Delivery on time"}
                desc=" Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment"
                icon={AiOutlineFieldTime}
              />
              <InfoCard
                title={"quality products"}
                desc=" Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment"
                icon={HiBadgeCheck}
              />
              <InfoCard
                title={"#1 consultancy team"}
                desc=" Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment"
                icon={HiOutlineThumbUp}
              />
            </SimpleGrid>
          </Stack>
        </Stack>
      </WrapContent>
    </Box>
  );
}

export default Installation_and_maintenance;

function InfoCard({ title, icon, desc }) {
  return (
    <Stack
      border="1px solid"
      borderColor={"gray.300"}
      flexDir={["column", "column", "row"]}
      p="4"
    >
      <Box w="fit-content" pr="5" pt="2" pb="5" mx="auto">
        <Icon as={icon} fontSize="40px" />
      </Box>
      <Stack spacing="3" w="100%">
        <Text
          textTransform={"capitalize"}
          textAlign={["center", "center", "left"]}
          fontWeight="500"
          fontSize={"18px"}
          fontFamily="Poppins"
        >
          {title}
        </Text>
        <Text color="gray.500" textAlign={["center", "center", "left"]}>
          {desc}
        </Text>
      </Stack>
    </Stack>
  );
}
