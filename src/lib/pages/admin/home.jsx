import {
  Box,
  Text,
  Center,
  Stack,
  Button,
  useDisclosure,
} from "@chakra-ui/react";
import { useState } from "react";
import DrawerContainer from "./drawer";

function Home({ auth }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [action, setAction] = useState(null);
  function g() {
    let hour = new Date().getHours();
    if (hour >= 6 && hour < 12) {
      return "Good morning";
    } else if (hour > +12 && hour < 18) {
      return "Good afternoon";
    } else {
      return "Good evening";
    }
  }
  return (
    <Box>
      <Center bg="black" color="white">
        <Text textAlign={"center"} fontSize="sm">
          Logged in as {auth.email}
        </Text>
      </Center>
      <Stack py="60px" spacing="5">
        <Box>
          <Text textAlign={"center"} as="h1" fontSize={["xl", "3xl", "4xl"]}>
            {g()} , Admin!
          </Text>
          <Text textAlign={"center"} fontSize="sm">
            what would you like to do?
          </Text>
        </Box>
        <Center flexDir="column">
          <Button
            px="40px"
            size="md"
            colorScheme={"green"}
            onClick={() => {
              setAction("ADD");
              onOpen();
            }}
          >
            Add Projects
          </Button>
          <Button
            my="5"
            px="40px"
            size="md"
            colorScheme={"green"}
            onClick={() => {
              setAction("MANAGE");
              onOpen();
            }}
          >
            {" "}
            Manage Projects
          </Button>
        </Center>
      </Stack>
      {isOpen && (
        <DrawerContainer action={action} isOpen={isOpen} onClose={onClose} />
      )}
    </Box>
  );
}

export default Home;
