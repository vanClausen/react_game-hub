import React from "react";
import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";
import useGameQueryStore from "../store";
import { Link } from "react-router-dom";

const NavBar = () => {
  const resetGameQuery = useGameQueryStore((select) => select.resetGameQuery);
  return (
    <HStack padding="10px">
      <Link
        to="/"
        onClick={() => resetGameQuery()}
        type="button"
        style={{ width: "60px", display: "flex" }}
      >
        <Image src={logo} boxSize="60px" objectFit="cover" flexShrink={0} />
      </Link>
      <SearchInput />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
