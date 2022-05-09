import React, { useState, useEffect } from "react";
import {
  Text,
  Box,
  Flex,
  useColorModeValue,
  Image,
  HStack,
  Stack,
  Button,
} from "@chakra-ui/react";
import { AnimatePresence, motion, useAnimation } from "framer-motion";

const Carousel = () => {
  const arrowStyles = {
    cursor: "pointer",
    pos: "absolute",
    top: "50%",
    w: "auto",
    mt: "-22px",
    p: "16px",
    color: "white",
    fontWeight: "bold",
    fontSize: "18px",
    transition: "0.6s ease",
    borderRadius: "0 3px 3px 0",
    userSelect: "none",
    _hover: {
      opacity: 0.8,
      bg: "black",
    },
  };

  const slides = [
    {
      img: "https://images.pexels.com/photos/2599537/pexels-photo-2599537.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      label: "First Slide",
      description: "Nulla vitae elit libero, a pharetra augue mollis interdum.",
    },
    {
      img: "https://images.pexels.com/photos/2714581/pexels-photo-2714581.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      label: "Second Slide",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      img: "https://images.pexels.com/photos/2878019/pexels-photo-2878019.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
      label: "Third Slide",
      description:
        "Praesent commodo cursus magna, vel scelerisque nisl consectetur.",
    },
    {
      img: "https://images.pexels.com/photos/1142950/pexels-photo-1142950.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      label: "Fourth Slide",
      description: "Nulla vitae elit libero, a pharetra augue mollis interdum.",
    },
    {
      img: "https://images.pexels.com/photos/3124111/pexels-photo-3124111.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      label: "Fifth Slide",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const slidesCount = slides.length;

  const prevSlide = () => {
    setCurrentSlide((s) => (s === 0 ? slidesCount - 1 : s - 1));
  };
  const nextSlide = () => {
    setCurrentSlide((s) => (s === slidesCount - 1 ? 0 : s + 1));
  };
  const setSlide = (slide) => {
    setCurrentSlide(slide);
  };
  const carouselStyle = {
    transition: "all .5s",
    ml: `-${currentSlide * 100}%`,
  };
  const SLIDES_INTERVAL_TIME = 3000;
  const ANIMATION_DIRECTION = "right";

  // useEffect(() => {
  //   const prevSlide = () => {
  //     setCurrentSlide((s) => (s === 0 ? slidesCount - 1 : s - 1));
  //   };

  //   const nextSlide = () => {
  //     setCurrentSlide((s) => (s === slidesCount - 1 ? 0 : s + 1));
  //   };

  //   const automatedSlide = setInterval(() => {
  //     ANIMATION_DIRECTION.toLowerCase() === "left" ? prevSlide() : nextSlide();
  //   }, SLIDES_INTERVAL_TIME);
  //   return () => clearInterval(automatedSlide);
  // }, [slidesCount]);
  const controls = useAnimation();

  const variants = {
    hidden: { scale: 0 },
    visible: {
      scale: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <Box py="80px">
      <Box pos="relative" minH="400px" bg="gray.100">
        <Button
          onClick={() => {
            prevSlide();
          }}
          zIndex="1"
          bg="teal"
          pos="absolute"
          top="50%"
          left="0"
        >
          Left {currentSlide}
        </Button>
        <Button
          onClick={() => {
            nextSlide();
          }}
          zIndex="1"
          bg="teal"
          pos="absolute"
          top="50%"
          right="0"
        >
          Right {currentSlide}
        </Button>
        <Card c={slides[currentSlide]} />
      </Box>
    </Box>
  );
};
export default Carousel;

function Card(props) {
  return (
    <AnimatePresence>
      <Box
        as={motion.div}
        bg="whiteAlpha.300"
        w="full"
        h="full"
        pos="absolute"
        top="0"
        left="0"
        key={props.c.img}
        initial={{ x: 300, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: -300, opacity: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Image src={props.c.img} w="full" h="full" objectFit={"cover"} />
      </Box>
    </AnimatePresence>
  );
}
