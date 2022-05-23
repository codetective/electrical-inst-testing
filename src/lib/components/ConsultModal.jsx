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
  Stack,
  Textarea,
  VStack,
  useToast,
  FormHelperText,
} from "@chakra-ui/react";
import { BsPerson } from "react-icons/bs";
import { MdOutlineEmail, MdOutlinePhone } from "react-icons/md";
import WrapContent from "../layout/WrapContent";
import { useState } from "react";
import axios from "axios";
import { API_BASE_URL } from "../config";
const headers = { "Content-Type": "application/json" };

export default function ConsultModal({ pageState, size = "md", close }) {
  const toast = useToast();

  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    const { name, email, phone, message } = e.target;
    const data = {
      email: email.value,
      name: name.value,
      phone: phone.value,
      message: message.value,
    };
    axios
      .post(API_BASE_URL + "/api/consult.php", data, { headers: headers })
      .then(function (response) {
        if (response.data.token) {
          toast({
            status: "success",
            description: response.data.success || "Request successful",
            position: "bottom-right",
            isClosable: true,
          });
          console.log(response);
          e.target.reset();
          setLoading(false);
        } else {
          setLoading(false);
          throw new Error(response.data);
        }
      })
      .catch(function (error) {
        console.log(error);
        setLoading(false);

        toast({
          status: "error",
          title: "Request failed",
          description: "Cannot send request, please retry",
          position: "bottom-right",
          isClosable: true,
        });
      });
  };
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
                  <VStack
                    spacing={5}
                    as="form"
                    onSubmit={handleSubmit}
                    id="consult"
                  >
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
                          name="phone"
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
            {loading && (
              <FormControl>
                <FormHelperText textAlign={"right"} px="6">
                  This may take some time... please wait!
                </FormHelperText>
              </FormControl>
            )}
            <DrawerFooter>
              <Button
                variant="outline"
                colorScheme={"red"}
                mr={3}
                onClick={close}
              >
                Cancel
              </Button>
              <Button
                colorScheme="blue"
                bg="brand.400"
                color="white"
                _hover={{
                  bg: "brand.300",
                }}
                type="submit"
                form="consult"
                isLoading={loading}
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
