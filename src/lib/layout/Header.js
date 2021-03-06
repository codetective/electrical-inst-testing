import {
  Box,
  Flex,
  Text,
  HStack,
  Button,
  useDisclosure,
  useMediaQuery,
  Icon,
  Stack,
} from "@chakra-ui/react";
import Link from "next/link";
import WrapContent from "./WrapContent";
import Logo from "./Logo";
import { GoLocation } from "react-icons/go";
import { HiOutlineMail } from "react-icons/hi";
import { BiMenu } from "react-icons/bi";
import { BsTelephone } from "react-icons/bs";
import navLists from "../../lib/navLists";
import NavDrawer from "./NavDrawer";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import data from "../data";

const Header = () => {
  const router = useRouter();
  const [navbar, setNavbar] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isLargerThan914] = useMediaQuery("(min-width: 990.5px)");
  const changeBackground = () => {
    if (window.scrollY >= 66) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };
  useEffect(() => {
    changeBackground();
    window.addEventListener("scroll", changeBackground);
    return () => {
      window.removeEventListener("scroll", changeBackground);
    };
  }, []);

  return (
    <Box position={"sticky"} top={[0, 0, "-50"]} zIndex={"11"}>
      {!isLargerThan914 && <NavDrawer isOpen={isOpen} onClose={onClose} />}
      <Box
        bg={[
          "black",
          "black",
          "black",
          router.pathname != "/getquote" && !navbar
            ? "rgba(0,0,0,0.0)"
            : router.pathname === "/getquote"
            ? "black"
            : "black",
        ]}
        transition="all .5s ease"
        display={["none", "none", "block", "block"]}
      >
        <WrapContent>
          <Flex
            as="header"
            width="full"
            align="center"
            justifyContent={"space-between"}
            py="3"
            borderBottom={"0.5px solid "}
            borderBottomColor="rgba(255,255,255,0.2)"
          >
            <HStack justifyContent={"space-between"} w="full" spacing="5">
              <HStack justifyContent={"space-between"} spacing="5">
                <HeaderInfoText
                  icon={BsTelephone}
                  href={"tel:+" + data.phone}
                  text={data.phone}
                />
                <HeaderInfoText
                  icon={HiOutlineMail}
                  href={"mailto: " + data.email}
                  text={data.email}
                />
              </HStack>
              <HeaderInfoText
                icon={GoLocation}
                href="maps.google.com"
                text={data.location}
              />
            </HStack>
          </Flex>
        </WrapContent>
      </Box>

      <Box
        display={"block"}
        position="absolute"
        left="0"
        // bg={["black", "black", "black", !navbar ? "rgba(0,0,0,0.0)" : "black"]}
        bg={[
          "black",
          "black",
          "black",
          router.pathname != "/getquote" && !navbar
            ? "rgba(0,0,0,0.0)"
            : router.pathname === "/getquote"
            ? "black"
            : "black",
        ]}
        zIndex={"10"}
        color={[
          "gray.200",
          "gray.200",
          "gray.200",
          !navbar ? "gray.100" : "gray.200",
        ]}
        w="full"
        transition="all .5s ease"
        textShadow="1px 1px black"
      >
        <WrapContent>
          <Stack
            flexDir={["row", "row", "column", "row"]}
            justifyContent={"space-between"}
            w="full"
            py="3"
          >
            <Box
              display={["block", "block", "block", !navbar ? "none" : "block"]}
            >
              <Logo h="50px" state={{ base: false, lg: navbar }} />
            </Box>
            <Box display={["none", "none", "none", !navbar ? "block" : "none"]}>
              {router.pathname == "/" ? (
                <Logo h="50px" state={false} />
              ) : (
                <Logo h="50px" state={true} />
              )}
            </Box>

            <Box marginLeft="auto" display={["none", "none", "block", "block"]}>
              <HStack spacing="5">
                {navLists.mainNav.map((item, idx) => (
                  <Link href={item.path} key={idx}>
                    <Text
                      className="hover-underline-animation"
                      as="a"
                      fontWeight="bold"
                      textTransform={"capitalize"}
                      fontFamily="Poppins"
                      cursor={"pointer"}
                      textAlign="center"
                    >
                      {item.name}
                    </Text>
                  </Link>
                ))}
              </HStack>
            </Box>

            <Button
              rounded="sm"
              fontSize={"35px"}
              color="gray.200"
              onClick={onOpen}
              display={["flex", "flex", "none", "none"]}
              borderRadius="sm"
              variant={"link"}
              cursor="pointer"
            >
              <BiMenu />
            </Button>
          </Stack>
        </WrapContent>
      </Box>
    </Box>
  );
};

export default Header;

function HeaderInfoText({ icon, text, href }) {
  return (
    <Link href={href}>
      <Text
        as="a"
        _hover={{
          color: "brand.300",
        }}
        fontSize="14px"
        fontWeight="light"
        color={["gray.200", "white"]}
        textShadow="1px 1px black"
        fontFamily={"Poppins"}
        cursor="pointer"
      >
        <HStack spacing="1">
          {icon && <Icon as={icon} />}
          <Text>{text}</Text>
        </HStack>
      </Text>
    </Link>
  );
}
