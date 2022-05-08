import React from "react";
import {
  Box,
  Button,
  Image,
  Link,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import WrapContent from "../../layout/WrapContent";
import SmallHorizontalBar from "../../components/SmallHorizontalBar";
import SectionHeading from "../../components/SectionHeading";
import { FiArrowUpRight } from "react-icons/fi";

function Projects() {
  return (
    <Box bg="brand.500" id="services" color="white">
      <WrapContent>
        <SimpleGrid columns={[1, 1, 2]} py="80px" spacing="40px">
          <Stack spacing={"8"}>
            <Stack spacing="5">
              <SmallHorizontalBar />

              <SectionHeading color="white" text="Our Projects" />
              <Text>
                {" "}
                Here are some projects completed satisfactorily by our
                experienced engineers for our esteemed clients.
              </Text>
            </Stack>
            <Link href={"/"}>
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
                WHY US?
              </Text>
            </Link>
            <Pcard />
            <Pcard />
          </Stack>
          <Stack spacing="8">
            <Pcard />
            <Pcard />
            <Stack spacing="5" p="5">
              <Text>
                Customer reliability and consistently high quality services are
                essential to our philosophy and we approach all of our projects
                in the same proven manner. To see more projects, click here:
              </Text>
              <Link href="/projects">
                <a
                  style={{
                    width: "fit-content",
                    display: "block",
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
                    rightIcon={<FiArrowUpRight />}
                  >
                    see more projects
                  </Button>
                </a>
              </Link>
            </Stack>
          </Stack>
        </SimpleGrid>
      </WrapContent>
    </Box>
  );
}

export default Projects;

function Pcard(image, caption, type) {
  return (
    <Box pos="relative" rounded="lg" maxH={["320px", "350px", "350px"]}>
      <Image
        src={"https://source.unsplash.com/random/" + Math.random() * 9}
        objectFit={"cover"}
        h="100%"
        rounded="lg"
        w="full"
      />
      <Box
        pos="absolute"
        right="0"
        bottom="5"
        bg="blackAlpha.500"
        color="white"
        fontSize="sm"
        fontWeight="bold"
        p="5"
        w="80%"
        backdropFilter={"blur(10px)"}
        borderTopLeftRadius="lg"
      >
        <Text as="h2">Installation</Text>
        <Text>
          Installation og jredsn dsiisd dijdjdj djididid ddiidjijd didididid
        </Text>
      </Box>
    </Box>
  );
}
