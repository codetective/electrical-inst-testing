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
import AnimateInView from "../../components/motion/AnimateInView";

const projects = [
  {
    caption:
      "Revalidation and Verification of flow computers on a control console.",
    image: "/images/pj/controlpanel.jpg",
  },
  {
    caption: "Foundation fieldbus junction box termination and configuration.",
    image: "/images/pj/fieldbusinstallation.jpg",
  },
  {
    caption: "Chemical Injection packages installed and commissioned.",
    image: "/images/pj/chemicalinjectionplant.jpg",
  },
  {
    caption:
      "The shut-down valve and all regulators serviced and installed successfully.",
    image: "/images/pj/shutdown.jpg",
  },
];
const animProps = {
  width: "100%",
  hidden: { y: "50px", opacity: 0.5 },
  visible: {
    y: 0,
    opacity: 1,
  },
  duration: 2,
};

function Projects() {
  return (
    <Box bg="brand.500" id="services" color="white">
      <WrapContent>
        <SimpleGrid columns={[1, 1, 2, 2]} py="80px" spacing="40px">
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
            <Link href={"/why_us"}>
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
            <AnimateInView {...animProps}>
              <Pcard c={projects[2].caption} i={projects[2].image} />
            </AnimateInView>
            <AnimateInView {...animProps}>
              <Pcard c={projects[1].caption} i={projects[1].image} />
            </AnimateInView>
          </Stack>
          <Stack spacing="8">
            <AnimateInView {...animProps}>
              <Pcard c={projects[3].caption} i={projects[3].image} />
            </AnimateInView>
            <AnimateInView {...animProps}>
              <Pcard c={projects[0].caption} i={projects[0].image} />
            </AnimateInView>
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
                    px={["20px", "40px"]}
                    fontSize={["md", "xl"]}
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

function Pcard(props) {
  return (
    <Box pos="relative" rounded="lg" h={["320px", "350px", "380px", "350px"]}>
      <Image src={props.i} objectFit={"cover"} h="100%" rounded="lg" w="full" />
      <Box
        pos="absolute"
        right="0"
        bottom="4"
        bg="blackAlpha.500"
        color="white"
        fontSize="sm"
        fontWeight="bold"
        p="5"
        w={["100%", "80%"]}
        backdropFilter={"blur(10px)"}
        borderTopLeftRadius="lg"
      >
        {/* <Text as="h2">Installation</Text> */}
        <Text>{props.c}</Text>
      </Box>
    </Box>
  );
}
