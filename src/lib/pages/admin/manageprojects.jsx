import {
  Alert,
  AlertDescription,
  AlertIcon,
  Box,
  Button,
  Center,
  FormControl,
  HStack,
  IconButton,
  Image,
  Input,
  Spinner,
  Stack,
  Text,
  Textarea,
  useToast,
} from "@chakra-ui/react";

import React, { useState, useRef, useEffect } from "react";
import { API_BASE_URL } from "../../config";
import { useCtx } from "./AdminContext";
import { FaTrashAlt } from "react-icons/fa";
import axios from "axios";
const headers = { "Content-Type": "application/json" };

function Manageprojects({ jwt }) {
  const { projects, dispatchEvent, error, loading } = useCtx();
  useEffect(() => {
    dispatchEvent("FETCH_PROJECTS", null);
  }, []);
  return (
    <div>
      {!error && !loading && projects.length === 0 && (
        <>
          <Center fontSize={"2xl"}>No projects in db</Center>
        </>
      )}
      {error && !loading && (
        <Alert
          status="error"
          variant="subtle"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          textAlign="center"
          height="200px"
        >
          <AlertIcon boxSize="40px" mr={0} />
          <AlertTitle mt={4} mb={1} fontSize="lg">
            An error occurred!
          </AlertTitle>
          <AlertDescription maxWidth="sm">
            This may be a problem with the network.
            <br />
            <br />
            <Button
              onClick={() => dispatchEvent("FETCH_PROJECTS", null)}
              colorScheme={"blue"}
            >
              Pleast Retry
            </Button>
          </AlertDescription>
        </Alert>
      )}
      {!error && !loading && projects.length != 0 && (
        <Stack spacing={16}>
          <HStack justify={"space-between"}>
            <Text fontWeight="semibold">
              {projects.length} projects available
            </Text>
            <Button
              size="sm"
              onClick={() => dispatchEvent("FETCH_PROJECTS", null)}
            >
              REFRESH LIST
            </Button>
          </HStack>
          {projects.map((p, i) => (
            <Project jwt={jwt} key={i} p={p} />
          ))}
        </Stack>
      )}
      {loading && !error && (
        <Center flexDir="column">
          <Spinner size="xl" />
          <Text as="small">please wait, retreiving data</Text>
        </Center>
      )}
    </div>
  );
}

export default Manageprojects;

function Project({ p, jwt }) {
  const { dispatchEvent } = useCtx();

  const toast = useToast();
  const textarearef = useRef();
  const defaultCaption = useRef(p.caption);
  const defaultTitle = useRef(p.title);

  const [textAreaHeight, setTextAreaHeight] = useState("auto");
  const [parentHeight, setParentHeight] = useState("auto");
  const focusInput = () => {
    textarearef.current.focus();
  };
  const [caption, setCaption] = useState(p.caption);
  const [title, setTitle] = useState(p.title);
  const [editing, setEditing] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setParentHeight(`${textarearef.current.scrollHeight}px`);
    setTextAreaHeight(`${textarearef.current.scrollHeight}px`);
  }, [caption, editing]);

  const onChangeHandler = (event) => {
    setTextAreaHeight("auto");
    setParentHeight(`${textarearef.current.scrollHeight}px`);
    setCaption(event.target.value);
  };

  const cancelEditing = () => {
    setCaption(defaultCaption.current);
    setTitle(defaultTitle.current);
    setEditing(false);
  };

  const edit = (e) => {
    e.preventDefault();
    setLoading(true);
    let data = { caption, title, id: p.id, jwt };
    axios
      .put(API_BASE_URL + "/api/projects.php", data, { headers })
      .then(() => {
        setLoading(false);
        setEditing(false);
        defaultCaption.current = caption;
        toast({
          title: "Edited",
          status: "success",
          isClosable: true,
          position: "bottom-right",
        });
      })
      .catch((error) => {
        setLoading(false);
        toast({
          title: "Failed, please retry",
          description: error.message,
          status: "error",
          isClosable: true,
          position: "bottom-right",
        });
      });
  };
  const deleteProject = () => {
    setLoading(true);
    let data = { id: p.id, jwt };
    axios
      .delete(API_BASE_URL + "/api/projects.php", { data, headers })
      .then(() => {
        setLoading(false);
        setEditing(false);
        toast({
          title: "Deleted",
          status: "success",
          isClosable: true,
          position: "bottom-right",
        });
        dispatchEvent("DELETE_PROJECT", { id: p.id });
      })
      .catch((error) => {
        setLoading(false);
        toast({
          title: "Failes, please retry",
          description: error.message,
          status: "error",
          isClosable: true,
          position: "bottom-right",
        });
      });
  };

  return (
    <Stack
      pos="relative"
      rounded="md"
      shadow="xl"
      maxW={["100%", "80%", "70%"]}
      alignSelf={"center"}
      pb="2"
      as="form"
      onSubmit={edit}
    >
      <Image
        src={API_BASE_URL + p.path}
        alt={"project image"}
        objectFit="cover"
      />
      <HStack px="3" justify={"space-between"}>
        <Text as="i"> Caption:</Text>
        <Button
          size="sm"
          colorScheme={editing ? "yellow" : "blue"}
          onClick={() => {
            {
              editing ? cancelEditing() : setEditing(true);
            }
            focusInput();
          }}
        >
          {editing ? "cancel edit" : "Edit"}
        </Button>
      </HStack>
      <FormControl isRequired>
        <Input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          name="title"
          isReadOnly={!editing}
        />
      </FormControl>
      <Box p={editing ? "0" : "4"} bg="gray.100" fontSize="lg">
        {editing ? "" : caption}
      </Box>

      <FormControl
        display={editing ? "block" : "none"}
        style={{
          minHeight: parentHeight,
        }}
        isRequired
      >
        <Textarea
          rows={1}
          style={{
            height: textAreaHeight,
          }}
          onChange={onChangeHandler}
          ref={textarearef}
          value={caption}
        />
      </FormControl>
      <Button
        alignSelf={"self-end"}
        display={editing ? "block" : "none"}
        size="sm"
        colorScheme={"green"}
        style={{
          marginRight: "5px",
        }}
        type="submit"
        isLoading={loading}
      >
        Save
      </Button>

      <IconButton
        position="absolute"
        display={editing ? "none" : "flex"}
        top="0"
        right="5"
        shadow="xl"
        rounded="md"
        fontSize="2xl"
        color="white"
        isLoading={loading}
        colorScheme={"red"}
        onClick={deleteProject}
        aria-label="delete"
        icon={<FaTrashAlt />}
      />
    </Stack>
  );
}
