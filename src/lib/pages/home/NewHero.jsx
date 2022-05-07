import {
  Box,
  SimpleGrid,
  Button,
  Flex,
  chakra,
  useColorModeValue,
} from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import WrapContent from "../../layout/WrapContent";
import { FiArrowDown } from "react-icons/fi";

function NewHero() {
  return (
    <Box
      pos="relative"
      top={["0", 0, 0, "-46px"]}
      bg={{ base: "url('/images/header.jpg')", lg: "none" }}
      bgSize="cover"
      bgRepeat={"no-repeat"}
      bgColor="whiteAlpha.800"
      bgBlendMode={"overlay"}
    >
      <SimpleGrid columns={[1, 1, 1, 2]} minH="100vh">
        <WrapContent>
          <Flex
            direction="column"
            alignItems="center"
            justifyContent="center"
            px={{ base: 4, md: 10, lg: 10 }}
            pt={["200px", "200px", "220px", "150px"]}
            pb={"40px"}
            minH="100vh"
          >
            <Box>
              <chakra.h1
                mb={6}
                fontSize={{ base: "4xl", md: "5xl", lg: "5xl" }}
                fontWeight="600"
                color={useColorModeValue("brand.600", "gray.300")}
                lineHeight="shorter"
                textAlign={["center", "center", "center", "left"]}
              >
                We are Avetrix, an electrical instrumentation and automation
                company...
              </chakra.h1>

              <chakra.p
                pr={{ base: 0, lg: 16 }}
                mb={6}
                fontSize="sm"
                color={useColorModeValue("brand.600", "gray.400")}
                letterSpacing="wide"
                textAlign={["center", "center", "center", "left"]}
              >
                We have extensive experience in Engineering, Procurement,
                Construction, Project Management and Facility Maintenance.
              </chakra.p>
              <SimpleGrid columns={[1, 2]} spacing={4} w="fit-content" m="auto">
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
                      Get a quote
                    </Button>
                  </a>
                </Link>
                <a>
                  <Button
                    rounded="full"
                    color="brand.400"
                    bg="transparent"
                    px={"40px"}
                    fontWeight="bold"
                    _hover={{
                      bg: "brand.400",
                      color: "white",
                    }}
                    rightIcon={<FiArrowDown />}
                    onClick={() => {
                      var elem =
                        window && window.document.querySelector("#services");

                      elem.scrollIntoView({
                        behavior: "smooth",
                        block: "start",
                        inline: "nearest",
                      });
                    }}
                  >
                    Explore
                  </Button>
                </a>
              </SimpleGrid>
            </Box>
          </Flex>
        </WrapContent>
        <Box
          bg="url('/images/header.jpg')"
          bgSize="cover"
          bgRepeat={"no-repeat"}
          h={["0", 0, 0, "full"]}
          borderBottomLeftRadius="85%"
        />
      </SimpleGrid>
    </Box>
  );
}

export default NewHero;
