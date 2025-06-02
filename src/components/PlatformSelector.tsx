import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/all";
import usePlatforms, { Platform } from "../hooks/usePlatforms";
import usePlatform from "../hooks/usePlatform";

interface Props {
  selectedPlatform?: number | null;
  onSelectPlatform: (platform: Platform | null) => void;
}

const PlatformSelector = ({ selectedPlatform, onSelectPlatform }: Props) => {
  const { data, error } = usePlatforms();
  const platform = usePlatform(selectedPlatform);
  if (error) return null;
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {platform ? platform.name : "Select Platform"}
      </MenuButton>
      <MenuList>
        {selectedPlatform && (
          <MenuItem key="clear" onClick={() => onSelectPlatform(null)}>
            All Platforms
          </MenuItem>
        )}
        {data?.results.map((platform) => (
          <MenuItem
            key={platform.id}
            value={platform.id}
            onClick={() => onSelectPlatform(platform)}
          >
            {platform.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default PlatformSelector;
