import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  useBreakpointValue,
  Box,
  useToast,
} from "@chakra-ui/react";
import Upload from "./upload";
import { useState } from "react";
import axios from "axios";

function DrawerContainer({ isOpen, action, onClose, jwt }) {
  const loci = useBreakpointValue(["bottom", "bottom", "right"]);
  const size =
    action === "MANAGE" ? useBreakpointValue(["full", "lg", "xl"]) : "md";
  const [loading, setloading] = useState(false);
  const [image, setImage] = useState(null);
  const [caption, setCaption] = useState("");
  const toast = useToast();

  const handleSubmit = () => {
    setloading(true);
    const formData = new FormData();
    formData.append("image", image);
    formData.append("caption", caption);
    formData.append("jwt", jwt);
    axios
      .post("http://localhost:8000/api/projects.php", formData, {
        headers: { "content-Type": "multipart/form-data" },
      })
      .then(function (response) {
        console.log(response);

        if (response.data) {
          toast({
            status: "success",
            description: response.data.success || "Request successful",
            position: "bottom-right",
            isClosable: true,
          });
          onClose();
        } else {
          throw new Error(response.data);
        }
      })
      .catch(function (error) {
        if (
          error.response &&
          error.response.data &&
          error.response.data.error === "Expired token"
        ) {
          window.location.reload();
        }
        toast({
          status: "error",
          title: "Request failed",
          description: error.response
            ? error.response.data.error
            : error.message,
          position: "bottom-right",
          isClosable: true,
        });
        setloading(false);
      });
  };

  return (
    <>
      <Drawer
        closeOnOverlayClick={false}
        size={size}
        placement={loci}
        isOpen={isOpen}
        onClose={onClose}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>
            {action === "ADD" ? "Add Project" : "Manage Project"}
          </DrawerHeader>

          <DrawerBody>
            <Box h={action === "MANAGE" ? "81.7vh" : "60vh"}>
              {action === "ADD" && (
                <Upload
                  caption={caption}
                  image={image}
                  setImage={setImage}
                  setCaption={setCaption}
                />
              )}
            </Box>
          </DrawerBody>

          <DrawerFooter>
            <Button
              variant="outline"
              colorScheme={"red"}
              mr={3}
              onClick={onClose}
            >
              Cancel
            </Button>
            <Button
              onClick={handleSubmit}
              disabled={loading || caption.trim() === "" || !image}
              colorScheme="blue"
            >
              Save
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default DrawerContainer;
