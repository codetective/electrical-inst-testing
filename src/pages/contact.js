/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/no-children-prop */
import {
  Box,
  Container,
  Heading,
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
import { MdContacts, MdSubject } from "react-icons/md";
import { FaFacebook, FaInstagram, FaTwitter, FaEnvelope } from "react-icons/fa";
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
          <Container maxW="container.xl" px={8}>
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
                p={{ base: 4, sm: 6, md: 8 }}
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
                  as={"form"}
                  mt={10}
                  // onSubmit={sendComplaints}
                >
                  <Stack spacing={5}>
                    {/* name */}
                    <FormControl>
                      <InputGroup>
                        <InputLeftElement
                          pl="2"
                          py="6"
                          pointerEvents="none"
                          children={
                            <Icon
                              as={MdContacts}
                              fontSize="24px"
                              color="brand.300"
                            />
                          }
                        />
                        <Input
                          type="text"
                          name="name"
                          placeholder="Your full name"
                          py="6"
                          className="afont"
                          required
                          pl="45px"
                          rounded="full"
                          bg="gray.100"
                        />
                      </InputGroup>
                    </FormControl>

                    {/* subject */}
                    <FormControl>
                      <InputGroup>
                        <InputLeftElement
                          pl="2"
                          py="6"
                          pointerEvents="none"
                          children={
                            <Icon
                              as={MdSubject}
                              fontSize="24px"
                              color="brand.300"
                            />
                          }
                        />
                        <Input
                          type="text"
                          name="subject"
                          required
                          placeholder="Topic of message eg, Inquiry"
                          py="6"
                          className="afont"
                          pl="45px"
                          rounded="full"
                          bg="gray.100"
                        />
                      </InputGroup>
                    </FormControl>
                    {/* email */}
                    <FormControl>
                      <InputGroup>
                        <InputLeftElement
                          pl="2"
                          py="6"
                          pointerEvents="none"
                          children={
                            <Icon
                              as={FaEnvelope}
                              fontSize="24px"
                              color="brand.300"
                            />
                          }
                        />
                        <Input
                          type="email"
                          placeholder="Your email"
                          py="6"
                          pl="45px"
                          name="email"
                          className="afont"
                          rounded="full"
                          required
                          bg="gray.100"
                        />
                      </InputGroup>
                    </FormControl>
                    {/* message box */}
                    <Textarea
                      name="message"
                      className="afont"
                      required
                      minH="140px"
                      bg="gray.100"
                      placeholder="Write your message. Please be concise and include as muchh information as necessary: don't include any private information"
                    />
                    <Button
                      size="lg"
                      rounded="34px"
                      type="submit"
                      color="white"
                      // disabled={sending}
                      // isLoading={sending}
                      bg="brand.400"
                      _hover={{
                        bg: "brand.300",
                      }}
                      px={"40px"}
                      className="afont"
                      w="full"
                    >
                      Submit response
                    </Button>
                  </Stack>
                </Box>
              </Stack>
            </SimpleGrid>
          </Container>
        </Box>
      </SlideFade>
    </>
  );
}
