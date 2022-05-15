import { useRouter } from "next/router";
import React from "react";
import ConsultModal from "../lib/components/ConsultModal";
import { Box } from "@chakra-ui/react";

function consult() {
  const router = useRouter();

  return (
    <>
      <ConsultModal
        size={"full"}
        close={() => router.push("/")}
        pageState={true}
      />
      ;
      <Box h="100vh" bg="gray.600" />
    </>
  );
}

export default consult;
