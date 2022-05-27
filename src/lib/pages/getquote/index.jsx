import React, { useState } from "react";
import WrapContent from "../../layout/WrapContent";
import SectionHeading from "../../components/SectionHeading";
import {
  Box,
  Button,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  SimpleGrid,
  Stack,
  Text,
  Textarea,
  useToast,
  VStack,
} from "@chakra-ui/react";
import SEO from "../../components/SEO";
import data from "../../data";
import { BsPerson } from "react-icons/bs";
import { MdOutlineEmail, MdOutlinePhone } from "react-icons/md";
import axios from "axios";
import { API_BASE_URL } from "../../config";
const headers = { "Content-Type": "application/json" };

function Getquote() {
  const toast = useToast();
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e) => {
    setSubmitting(true);
    e.preventDefault();
    const { name, email, phone, message } = e.target;
    const data = {
      email: email.value,
      name: name.value,
      phone: phone.value,
      message: message.value,
    };
    axios
      .post(API_BASE_URL + "/api/quote.php", data, { headers: headers })
      .then(function (response) {
        if (response.data.success) {
          toast({
            status: "success",
            description: response.data.success || "Request successful",
            position: "bottom-right",
            isClosable: true,
          });
          e.target.reset();
          setSubmitting(false);
        } else {
          setSubmitting(false);
          throw new Error(response.data);
        }
      })
      .catch(function (error) {
        setSubmitting(false);

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
      <SEO
        title={"Request a quote"}
        desc="Get a quote for your project, send us a message now and we will respond soon"
        path="/getquote"
      />
      <Box pt={["120px", "150px", "150px", "150px"]} pb="80px">
        <WrapContent>
          <SimpleGrid columns={[1, 1, 1, 2]} spacing="8">
            <Stack spacing="5">
              <SectionHeading text="Request a quote" />
              <Text>
                At Avetrix, we are known for delivering exceptional results for
                our clients. If you are looking for assistance with an upcoming
                electrical engineering project, we would be happy to discuss
                your specific needs and requirements.
              </Text>
              <Text>
                Please fill out the form below, and we will respectfully respond
                to you within 24 hours. If you require immediate assistance,
                please feel free to connect with us over phone. You can reach us
                by dialing{" "}
                <b>
                  <a href={"tel:" + data.phone}>{data.phone}</a>
                </b>{" "}
                or{" "}
                <b>
                  <a href={"tel:" + data.phone2}>{data.phone2}</a>
                </b>
              </Text>
            </Stack>
            <Stack bg="gray.50" spacing="5">
              <Box
                bg="white"
                borderRadius="lg"
                p={5}
                color="gray.700"
                shadow="base"
              >
                <VStack spacing={5} as="form" onSubmit={handleSubmit}>
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
                  {submitting && (
                    <FormControl>
                      <FormHelperText>
                        This may take some time... please wait!
                      </FormHelperText>
                    </FormControl>
                  )}

                  <Button
                    colorScheme="blue"
                    color="white"
                    bg="brand.400"
                    _hover={{
                      bg: "brand.300",
                    }}
                    isFullWidth
                    isLoading={submitting}
                    disabled={submitting}
                    loadingText="submitting"
                    type="submit"
                  >
                    Send Message
                  </Button>
                </VStack>
              </Box>
            </Stack>
          </SimpleGrid>
        </WrapContent>
      </Box>
    </>
  );
}

export default Getquote;
