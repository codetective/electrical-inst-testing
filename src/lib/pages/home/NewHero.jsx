import {
  Box,
  Image,
  SimpleGrid,
  Button,
  Flex,
  chakra,
  useColorModeValue,
} from "@chakra-ui/react";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import WrapContent from "../../layout/WrapContent";
import { FiArrowDown } from "react-icons/fi";
import { AnimatePresence, motion } from "framer-motion";
const slides = [
  {
    img: "/images/pj/crs1.jpeg",
  },
  {
    img: "/images/pj/crs2.jpeg",
  },
  {
    img: "/images/pj/crs3.jpeg",
  },
  {
    img: "/images/pj/controlpanel.jpg",
  },
  {
    img: "/images/pj/chemicalinjectionplant.jpg",
  },
];

function NewHero() {
  const SLIDES_INTERVAL_TIME = 5000;
  const ANIMATION_DIRECTION = "right";
  const [currentSlide, setCurrentSlide] = useState(0);
  const slidesCount = slides.length;

  useEffect(() => {
    const prevSlide = () => {
      setCurrentSlide((s) => (s === 0 ? slidesCount - 1 : s - 1));
    };

    const nextSlide = () => {
      setCurrentSlide((s) => (s === slidesCount - 1 ? 0 : s + 1));
    };

    const automatedSlide = setInterval(() => {
      ANIMATION_DIRECTION.toLowerCase() === "left" ? prevSlide() : nextSlide();
    }, SLIDES_INTERVAL_TIME);
    return () => clearInterval(automatedSlide);
  }, [slidesCount]);
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
      <SimpleGrid columns={[1, 1, 1, 2]}>
        <WrapContent>
          <Flex
            direction="column"
            alignItems="center"
            justifyContent="center"
            px={{ base: 4, md: 10, lg: 5 }}
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
              <SimpleGrid
                columns={[1, 2]}
                spacing={4}
                w="fit-content"
                m={{ base: "auto", lg: "initial" }}
              >
                <Link href="/getquote">
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
                        window && window.document.querySelector("#explore");

                      elem.scrollIntoView({
                        behavior: "smooth",
                        block: "center",
                        inline: "center",
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
          // bg="url('/images/header.jpg')"
          // bgSize="cover"
          // bgRepeat={"no-repeat"}
          h={["0", 0, 0, "full"]}
          borderBottomLeftRadius="85%"
          overflow="hidden"
          pos="relative"
        >
          {/* <Image
            src="/images/header.jpg"
            h="full"
            w="full"
            objectFit={"cover"}
          /> */}
          <AnimatePresence>
            <motion.img
              style={{
                position: "absolute",
                top: "0",
                left: "0",
                height: "100%",
                width: "100%",
                objectFit: "cover",
              }}
              key={slides[currentSlide].img}
              src={slides[currentSlide].img}
              initial={{ x: 300, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -300, opacity: 0 }}
            />
          </AnimatePresence>
        </Box>
      </SimpleGrid>
    </Box>
  );
}

export default NewHero;
