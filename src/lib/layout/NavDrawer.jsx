import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  HStack,
  Text,
  VStack,
} from "@chakra-ui/react";
import Link from "next/link";
import Logo from "./Logo";
import navLists from "../../lib/navLists";

export default function NavDrawer({ isOpen, onClose }) {
  return (
    <>
      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader fontFamily={"Montserrat"}>Menu</DrawerHeader>

          <DrawerBody>
            <VStack spacing="4">
              {navLists.mainNav.map((item, idx) => (
                <Link href={item.path} key={idx}>
                  <Text
                    width={"full"}
                    as="a"
                    fontSize="16px"
                    fontWeight="bold"
                    textTransform={"uppercase"}
                    color={item.button ? "white" : "gray.700"}
                    fontFamily="Montserrat"
                    cursor={"pointer"}
                    bg={item.button && "brand.300"}
                    py={item.button && "1"}
                    px={item.button && "3"}
                    borderRadius={item.button && "md"}
                    transition="all 0.5s ease"
                    _hover={{
                      color: item.button ? "red" : "#ef682f",
                    }}
                  >
                    {item.name}
                  </Text>
                </Link>
              ))}
            </VStack>
          </DrawerBody>

          <DrawerFooter>
            <Logo />
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}
