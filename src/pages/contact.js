/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/no-children-prop */
import {
  Box,
  Container,
  Heading,
  VStack,
  FormLabel,
  Text,
  Stack,
  FormControl,
  InputGroup,
  InputLeftElement,
  Input,
  Icon,
  Textarea,
  Button,
  SimpleGrid,
  SlideFade,
} from "@chakra-ui/react";
import { BsPerson } from "react-icons/bs";
import { MdOutlineEmail, MdOutlinePhone } from "react-icons/md";
import PageTitleHero from "../lib/layout/PageTitleHero";
import SmallTitleWithBar from "../lib/components/SmallTitleWithBar";
import SectionHeading from "../lib/components/SectionHeading";
import Link from "next/link";
import SiteLink from "../lib/components/SiteLink";

const pageDetails = {
  title: "Contact Us",
  tagline:
    "Let us know how we can help you with your existing or future projects, and one of our sales or support representatives will contact you shortly.",
};

export default function Contact() {
  return (
    <>
      <PageTitleHero tagline={pageDetails.tagline} title={pageDetails.title} />
      <SlideFade in offsetY="40px">
        <Box position="relative" width="100%" pt="40px" pb="80px">
          <Container maxW="container.xl" px={5}>
            <SimpleGrid columns={[1, 1, 2, 2]} spacing="20px">
              <Stack>
                <Stack alignItems={{ base: "center", md: "baseline" }}>
                  <SmallTitleWithBar title="CONTACT US" />
                  <SectionHeading text="Call or Write us!" />
                </Stack>
                <Stack fontSize={"xl"}>
                  <Text>Company Headquater LTD</Text>
                  <Text> 1738 Address Road</Text>
                  <Text> City, State</Text>
                  <SiteLink
                    text="GET DIRECTIONS"
                    path="/path"
                    target="_blank"
                  />
                  <br />
                  <Link href="tel:+2348177552052">
                    <Text cursor="pointer" width="fit-content">
                      Phone:{" "}
                      <Text as="span" color="brand.300">
                        +234 817 755 2052{" "}
                      </Text>
                    </Text>
                  </Link>
                  <Link href="mailto:company@email.domain">
                    <Text cursor="pointer" width="fit-content">
                      Email:{" "}
                      <Text as="span" color="brand.300">
                        company@email.domain
                      </Text>
                    </Text>
                  </Link>
                </Stack>
                <Text
                  textAlign="center"
                  display={{ base: "block", md: "none" }}
                >
                  Or
                </Text>
              </Stack>
              <Stack
                bg={"white"}
                rounded={"xl"}
                spacing={{ base: 8 }}
                justify="center"
                maxW="600px"
                m="auto"
              >
                <Stack
                  spacing={4}
                  w="100%"
                  textAlign="center"
                  className="qfont"
                >
                  <Text color={"gray.500"} fontSize={{ base: "sm", sm: "md" }}>
                    Fill out the form or give us a call and we’ll get back with
                    you as soon as possible.
                  </Text>
                </Stack>
                <Box
                  p="5"
                  bg="white"
                  borderRadius="lg"
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
                      <FormLabel>Subject</FormLabel>

                      <InputGroup>
                        <InputLeftElement children={<MdOutlineEmail />} />
                        <Input
                          type="text"
                          name="subject"
                          placeholder="Why you are contacting us"
                        />
                      </InputGroup>
                    </FormControl>
                    {/* <FormControl isRequired>
                      <FormLabel>Phone Number</FormLabel>

                      <InputGroup>
                        <InputLeftElement children={<MdOutlinePhone />} />
                        <Input
                          type="number"
                          name="number"
                          placeholder="Your Phone Number"
                        />
                      </InputGroup>
                    </FormControl> */}

                    <FormControl isRequired>
                      <FormLabel>Message</FormLabel>

                      <Textarea
                        name="message"
                        placeholder="Your Message, please be concise"
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
          </Container>
        </Box>
      </SlideFade>
    </>
  );
}
