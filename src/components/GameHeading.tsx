import { Heading } from "@chakra-ui/react";
import usePlatform from "../hooks/usePlatform";
import useGenre from "../hooks/useGenre";
import useGameQueryStore from "../store";

const GameHeading = () => {
  const genreId = useGameQueryStore((select) => select.gameQuery.genreId);
  const genre = useGenre(genreId);

  const platformId = useGameQueryStore((select) => select.gameQuery.platformId);
  const platform = usePlatform(platformId);

  const heading = `${platform?.name || ""} ${genre?.name || ""} Games`;
  return (
    <Heading marginBottom={5} as="h1" fontSize="5xl">
      {heading}
    </Heading>
  );
};

export default GameHeading;
