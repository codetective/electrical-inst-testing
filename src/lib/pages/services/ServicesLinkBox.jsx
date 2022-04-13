import { Stack, List, ListItem, Text } from "@chakra-ui/react";
import React from "react";
import NavLink from "../../components/NavLink";

export default function ServicesLinkBox() {
  return (
    <Stack spacing="5" w={["100%", "100%", "30%"]} mr={["0", 0, "10"]}>
      <Text fontSize="20px">All services:</Text>
      <List spacing={"5"}>
        <ListItem>
          <NavLink href="/installation_and_maintenance">
            Installation and Maintenance
          </NavLink>
        </ListItem>
        <ListItem>
          <NavLink href="/instrumentation">Instrumentation and Testing</NavLink>
        </ListItem>
      </List>
    </Stack>
  );
}
