import React from "react";
import { Box, HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";
import useGameQueryStore from "../store";

const NavBar = () => {
  const resetGameQuery = useGameQueryStore((select) => select.resetGameQuery);
  return (
    <HStack padding="10px">
      <Box as="button" onClick={() => resetGameQuery()} flexShrink={0}>
        <Image src={logo} boxSize="60px" objectFit="cover" />
      </Box>
      <SearchInput />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
