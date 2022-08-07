import {
  Box,
  Text,
  Center,
  Stack,
  Button,
  useDisclosure,
  Circle,
  Icon,
} from "@chakra-ui/react";
import { useState } from "react";
import { HiOutlineLogout } from "react-icons/hi";
import DrawerContainer from "./drawer";

function Home({ auth, jwt }) {
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
        <DrawerContainer
          jwt={jwt}
          action={action}
          isOpen={isOpen}
          onClose={onClose}
        />
      )}
      <Button
        onClick={() => {
          localStorage.removeItem("alvesharp");
          window.location.reload();
        }}
        rounded={"50%"}
        w="45px"
        h="45px"
        colorScheme={"red"}
        pos="fixed"
        bottom={"50px"}
        right="50px"
        transition="all 1s ease"
        _hover={{
          w: "100px",
          rounded: "30px",
        }}
        data-group
      >
        <Icon fontSize={"25px"}>
          <HiOutlineLogout />
        </Icon>
        <Box
          display={"none"}
          _groupHover={{
            display: "block",
          }}
        >
          Log out
        </Box>
      </Button>
    </Box>
  );
}

export default Home;
