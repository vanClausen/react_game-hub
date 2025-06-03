import React from "react";
import { Box, HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";
import useGameQueryStore from "../store";

const NavBar = () => {
  const setSearchText = useGameQueryStore((select) => select.setSearchText);
  return (
    <HStack padding="10px">
      <Box as="button" onClick={() => setSearchText("")} flexShrink={0}>
        <Image src={logo} boxSize="60px" objectFit="cover" />
      </Box>
      <SearchInput />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
