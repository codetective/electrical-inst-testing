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

function Login({ handleAuth }) {
  const toast = useToast();
  const headers = { "Content-Type": "application/json" };
  const [isLoading, setloading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setloading(true);
    const { password, email } = e.target;
    const data = {
      email: email.value,
      password: password.value,
    };
    axios
      .post("http://localhost:8000/api/login.php", data, { headers: headers })
      .then(function (response) {
        if (response.data.token) {
          toast({
            status: "success",
            description: response.data.success || "Request successful",
            position: "bottom-right",
            isClosable: true,
          });
          handleAuth(response.data.token);
          console.log(response);
        } else {
          throw new Error(response.data);
        }
      })
      .catch(function (error) {
        console.log(error);
        toast({
          status: "error",
          title: "Request failed",
          description: error.response.data.error
            ? error.response.data.error
            : error.response.data
            ? error.response.data
            : error.message,
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
          onSubmit={handleLogin}
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
            Alvitrex Admin Login
          </Heading>
          <Text textAlign="center">Enter Email and password to login</Text>
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

export default Login;
