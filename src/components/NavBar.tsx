import React from "react";
import { Box, HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

interface Props {
  onSearch: (searchText: string) => void;
  onClearGameQuery: () => void;
}

const NavBar = ({ onSearch, onClearGameQuery }: Props) => {
  return (
    <HStack padding="10px">
      <Box as="button" onClick={onClearGameQuery} flexShrink={0}>
        <Image src={logo} boxSize="60px" objectFit="cover" />
      </Box>
      <SearchInput onSearch={onSearch} />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
