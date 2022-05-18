import React from "react";
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  useColorModeValue,
  Text,
  useToast,
} from "@chakra-ui/react";
import { useState } from "react";
import axios from "axios";

function CreatAdmin() {
  const toast = useToast();
  const headers = { "Content-Type": "application/json" };
  const [isLoading, setloading] = useState(false);

  const handleCreateAdmin = async (e) => {
    e.preventDefault();
    setloading(true);
    const { password, email, token } = e.target;
    const data = {
      email: email.value,
      password: password.value,
      token: token.value,
    };
    axios
      .post("http://localhost:8000", data, { headers: headers })
      .then(function (response) {
        toast({
          status: "success",
          description: response.data.success || "Request successful",
          position: "bottom-right",
          isClosable: true,
        });
        e.target.reset();
      })
      .catch(function (error) {
        toast({
          status: "error",
          title: "Request failed",
          description: error.response.data.error || error.message,
          position: "bottom-right",
          isClosable: true,
        });
      });
    setloading(false);
  };
  return (
    <Box>
      <Flex
        minH={"100vh"}
        align={"center"}
        justify={"center"}
        bg={useColorModeValue("gray.50", "gray.800")}
      >
        <Stack
          as="form"
          onSubmit={handleCreateAdmin}
          spacing={4}
          w={"full"}
          maxW={"md"}
          bg={useColorModeValue("white", "gray.700")}
          rounded={"xl"}
          boxShadow={"lg"}
          p={6}
          my={12}
        >
          <Heading
            textAlign="center"
            lineHeight={1.1}
            fontSize={{ base: "2xl", md: "3xl" }}
          >
            Create an Admin
          </Heading>
          <Text textAlign="center">
            Enter Email, password and secret token to proceed
          </Text>
          <FormControl id="email" isRequired>
            <FormLabel>Email address</FormLabel>
            <Input
              placeholder="your-email@example.com"
              _placeholder={{ color: "gray.500" }}
              type="email"
            />
          </FormControl>
          <FormControl id="password" isRequired>
            <FormLabel>Password</FormLabel>
            <Input type="password" />
          </FormControl>
          <FormControl id="token" isRequired>
            <FormLabel>Token</FormLabel>
            <Input type="text" />
          </FormControl>
          <Stack spacing={6}>
            <Button
              bg={"blue.400"}
              color={"white"}
              _hover={{
                bg: "blue.500",
              }}
              type="submit"
              loadingText="submitting..."
              isLoading={isLoading}
              isDisabled={isLoading}
            >
              Submit
            </Button>
          </Stack>
        </Stack>
      </Flex>
    </Box>
  );
}

export default CreatAdmin;
