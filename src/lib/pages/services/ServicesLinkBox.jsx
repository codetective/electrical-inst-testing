import { Stack, List, ListItem, Text } from "@chakra-ui/react";
import React from "react";
import { services } from "./index";
import NavLink from "../../components/NavLink";

export default function ServicesLinkBox() {
  return (
    <Stack spacing="5" w={["100%", "100%", "30%"]} mr={["0", 0, "10"]}>
      <Text fontSize="20px">All services:</Text>
      <List spacing={"5"}>
        {services.map((s, i) => {
          return (
            <ListItem key={i}>
              <NavLink href={s.path}>{s.title}</NavLink>
            </ListItem>
          );
        })}
      </List>
    </Stack>
  );
}
