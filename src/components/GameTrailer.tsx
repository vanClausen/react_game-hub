import useTrailers from "../hooks/useTrailers";
import { AspectRatio } from "@chakra-ui/react";

interface Props {
  id: number;
}

const GameTrailer = ({ id }: Props) => {
  const { data: gameTrailerList, isLoading, error } = useTrailers(id);
  console.log("Game Trailer:", gameTrailerList);

  if (isLoading) return null;

  if (error) throw error;

  const firstTrailer = gameTrailerList?.results[0];

  if (!firstTrailer) return null;

  return (
    <AspectRatio maxH="100vh" ratio={16 / 9} marginTop={5}>
      <video
        src={firstTrailer.data.max}
        title={firstTrailer.name}
        poster={firstTrailer.preview}
        controls
      />
    </AspectRatio>
  );
};

export default GameTrailer;
