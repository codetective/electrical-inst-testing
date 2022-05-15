import React from "react";
import WrapContent from "../../layout/WrapContent";
import SectionHeading from "../../components/SectionHeading";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  SimpleGrid,
  Stack,
  Text,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import SEO from "../../components/SEO";
import data from "../../data";
import { BsPerson } from "react-icons/bs";
import { MdOutlineEmail, MdOutlinePhone } from "react-icons/md";

function Getquote() {
  return (
    <>
      <SEO
        title={"Request a quote"}
        desc="about page for site"
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
                <Text>
                  Please fill out the form below, and we will respectfully
                  respond to you within 24 hours. If you require immediate
                  assistance, please feel free to connect with us over phone.
                  You can reach us by dialing{" "}
                  <b>
                    <a href={"tel:" + data.phone}>{data.phone}</a>
                  </b>{" "}
                  or{" "}
                  <b>
                    <a href={"tel:" + data.phone2}>{data.phone2}</a>
                  </b>
                </Text>
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

                  <Button
                    colorScheme="blue"
                    bg="blue.400"
                    color="white"
                    _hover={{
                      bg: "blue.500",
                    }}
                    isFullWidth
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
