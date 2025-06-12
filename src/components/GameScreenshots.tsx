import useScreenshots from "../hooks/useScreenshots";
import { Image, SimpleGrid, Spinner } from "@chakra-ui/react";

interface Props {
  gameId: number;
}

const GameScreenshots = ({ gameId }: Props) => {
  const { data, isLoading, error } = useScreenshots(gameId);

  if (isLoading) return <Spinner />;

  if (error) throw error;

  const screenshots = data?.results;

  if (!screenshots || screenshots.length === 0) return null;

  return (
    <SimpleGrid
      columns={{ base: 1, md: 2 }}
      spacing={2}
      marginTop={5}
      maxW="1900px"
      // mx="auto"
    >
      {screenshots.map((screenshot) => (
        <Image
          src={screenshot.image}
          key={screenshot.id}
          objectFit="cover"
          aspectRatio={16 / 9}
          width="100%"
        />
      ))}
    </SimpleGrid>
  );
};

export default GameScreenshots;
