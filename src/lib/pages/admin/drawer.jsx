import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  useBreakpointValue,
  Box,
} from "@chakra-ui/react";

function DrawerContainer({ isOpen, action, onClose }) {
  const loci = useBreakpointValue(["bottom", "bottom", "right"]);
  return (
    <>
      <Drawer size={"md"} placement={loci} isOpen={isOpen} onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>
            {action === "ADD" ? "Add Project" : "Manage Project"}
          </DrawerHeader>

          <DrawerBody>
            <Box h="70vh"></Box>
          </DrawerBody>

          <DrawerFooter>
            <Button
              variant="outline"
              colorScheme={"red"}
              mr={3}
              onClick={onClose}
            >
              Cancel
            </Button>
            <Button colorScheme="blue">Save</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default DrawerContainer;
