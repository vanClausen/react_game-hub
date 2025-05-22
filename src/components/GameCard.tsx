import React from "react";
import { Game } from "../hooks/useGames";
import { Box, Card, CardBody, Heading, HStack, Image } from "@chakra-ui/react";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";
import getCroppedImageUrl from "../services/image-url";
import Emoji from "./Emoji";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card height="100%">
      <Box position="relative">
        <Image
          src={getCroppedImageUrl(game.background_image)}
          alt={game.name}
        />
        <Emoji
          rating={game.rating_top}
          style={{ position: "absolute", bottom: 2, right: 2 }}
        />
      </Box>
      <CardBody>
        <HStack justifyContent={"space-between"} marginBottom={3}>
          {game.parent_platforms && (
            <PlatformIconList
              platforms={game.parent_platforms.map((pp) => pp.platform)}
            />
          )}
          <CriticScore score={game.metacritic} />
        </HStack>
        <Heading fontSize="xl">{game.name}</Heading>
      </CardBody>
    </Card>
  );
};

export default GameCard;
