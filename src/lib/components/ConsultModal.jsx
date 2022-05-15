import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Text,
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  SimpleGrid,
  Stack,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import SectionHeading from "./SectionHeading";
import { BsPerson } from "react-icons/bs";
import { MdOutlineEmail, MdOutlinePhone } from "react-icons/md";
import WrapContent from "../layout/WrapContent";

export default function ConsultModal({ pageState, size = "md", close }) {
  return (
    <>
      <Drawer size={size} isOpen={pageState} placement="right" onClose={close}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton onClick={close} zIndex="10" />
          <WrapContent px={[0, 0, 0, 8]}>
            <DrawerHeader>Get a free Consultation</DrawerHeader>
          </WrapContent>

          <DrawerBody>
            <WrapContent px={[0, 0, 0, 8]}>
              <Stack bg="gray.50" spacing="5">
                <Box bg="white" borderRadius="lg" color="gray.700">
                  <VStack spacing={5}>
                    <FormControl isRequired>
                      <FormLabel>Name</FormLabel>

                      <InputGroup>
                        <InputLeftElement children={<BsPerson />} />
                        <Input
                          type="text"
                          name="name"
                          placeholder="Your Full Name"
                        />
                      </InputGroup>
                    </FormControl>

                    <FormControl isRequired>
                      <FormLabel>Email</FormLabel>

                      <InputGroup>
                        <InputLeftElement children={<MdOutlineEmail />} />
                        <Input
                          type="email"
                          name="email"
                          placeholder="Your Email"
                        />
                      </InputGroup>
                    </FormControl>
                    <FormControl isRequired>
                      <FormLabel>Phone Number</FormLabel>

                      <InputGroup>
                        <InputLeftElement children={<MdOutlinePhone />} />
                        <Input
                          type="number"
                          name="number"
                          placeholder="Your Phone Number"
                        />
                      </InputGroup>
                    </FormControl>

                    <FormControl isRequired>
                      <FormLabel>Message</FormLabel>

                      <Textarea
                        name="message"
                        placeholder="Your Message, include details of proposed project"
                        rows={6}
                        resize="none"
                      />
                    </FormControl>
                  </VStack>
                </Box>
              </Stack>
            </WrapContent>
          </DrawerBody>

          <WrapContent px={[0, 0, 0, 8]}>
            <DrawerFooter>
              <Button
                variant="outline"
                color="white"
                mr={3}
                onClick={close}
                _hover={{
                  bg: "brand.500",
                }}
              >
                Cancel
              </Button>
              <Button
                colorScheme="blue"
                bg="blue.400"
                color="white"
                _hover={{
                  bg: "brand.300",
                }}
              >
                Send Message
              </Button>
            </DrawerFooter>
          </WrapContent>
        </DrawerContent>
      </Drawer>
    </>
  );
}
