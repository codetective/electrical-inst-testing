import {
  Box,
  Flex,
  Text,
  HStack,
  IconButton,
  useDisclosure,
  useMediaQuery,
} from "@chakra-ui/react";
import Link from "next/link";
import WrapContent from "./WrapContent";
import Logo from "./Logo";
import { BiMenuAltRight } from "react-icons/bi";
import navLists from "../../lib/navLists";
import NavDrawer from "./NavDrawer";

const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isLargerThan914] = useMediaQuery("(min-width: 990.5px)");

  return (
    <>
      {!isLargerThan914 && <NavDrawer isOpen={isOpen} onClose={onClose} />}
      <Box bg="brand.100" color="gray.200">
        <WrapContent>
          <Flex
            as="header"
            width="full"
            align="center"
            justifyContent={"space-between"}
            py="3"
          >
            <HStack
              justifyContent={"space-between"}
              w={["full", "full", "fit-content", "fit-content"]}
            >
              <Logo display={["initial", "initial", "initial", "none"]} />
              <Text
                display={["none", "initial", "initial", "initial"]}
                as="h1"
                fontSize="lg"
                fontWeight="bolder"
                color="brand.300"
              >
                <Link href="tel:+2349023510969">+234 817 755 2052</Link>
              </Text>
            </HStack>

            <HStack>
              <Box
                marginLeft="auto"
                display={["none", "none", "none", "initial"]}
              >
                <HStack spacing="4">
                  {navLists.subNav.map((item, idx) => (
                    <Link href={item.path} key={idx}>
                      <Text
                        as="a"
                        fontSize="14px"
                        fontWeight="bold"
                        textTransform={"uppercase"}
                        color={item.button ? "white" : "#cccccc"}
                        fontFamily="Montserrat"
                        cursor={"pointer"}
                        bg={item.button && "brand.300"}
                        py={item.button && "1"}
                        px={item.button && "3"}
                        borderRadius={item.button && "md"}
                      >
                        {item.name}
                      </Text>
                    </Link>
                  ))}
                </HStack>
              </Box>
              <IconButton
                onClick={onOpen}
                display={["initial", "initial", "inital", "none"]}
                as={BiMenuAltRight}
                borderRadius="sm"
                color="gray.200"
                variant={"link"}
                cursor="pointer"
                size="lg"
              />
            </HStack>
          </Flex>
        </WrapContent>
      </Box>

      <Box
        className="mainNavGradient"
        color="white"
        display={["none", "none", "none", "initial"]}
        position="absolute"
        left="0"
        zIndex={"10"}
        w="full"
      >
        <WrapContent>
          <HStack justifyContent={"space-between"} w="full" py="3">
            <Logo h="100px" />

            <Box marginLeft="auto">
              <HStack spacing="5">
                {navLists.mainNav.map((item, idx) => (
                  <Link href={item.path} key={idx}>
                    <Text
                      className="hover-underline-animation"
                      as="a"
                      fontSize="14px"
                      pb="2"
                      fontWeight="bold"
                      textTransform={"uppercase"}
                      fontFamily="Montserrat"
                      cursor={"pointer"}
                      textAlign="center"
                    >
                      {item.name}
                    </Text>
                  </Link>
                ))}
              </HStack>
            </Box>
          </HStack>
        </WrapContent>
      </Box>
    </>
  );
};

export default Header;
