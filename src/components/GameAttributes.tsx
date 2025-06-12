import { List, ListItem, SimpleGrid } from "@chakra-ui/react";
import DefinitionItem from "./DefinitionItem";
import CriticScore from "./CriticScore";
import { Game } from "../hooks/entities/Game";

interface Props {
  game: Game;
}

const GameAttributes = ({ game }: Props) => {
  return (
    <SimpleGrid
      columns={{ base: 1, md: 2 }}
      spacing={5}
      marginTop={5}
      maxW="1900px"
      as="dl"
    >
      <DefinitionItem term="Platforms">
        <List>
          {game.parent_platforms.map(({ platform }) => {
            return <ListItem key={platform.id}>{platform.name}</ListItem>;
          })}
        </List>
      </DefinitionItem>
      <DefinitionItem term="Metascore">
        <CriticScore score={game.metacritic} />
      </DefinitionItem>
      <DefinitionItem term="Genres">
        <List>
          {game.genres.map((genre) => (
            <ListItem key={genre.id}>{genre.name}</ListItem>
          ))}
        </List>
      </DefinitionItem>
      <DefinitionItem term="Publishers">
        <List>
          {game.publishers.map((publisher) => (
            <ListItem key={publisher.id}>{publisher.name}</ListItem>
          ))}
        </List>
      </DefinitionItem>
    </SimpleGrid>
  );
};

export default GameAttributes;
