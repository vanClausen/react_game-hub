import useGenres from "../hooks/useGenres";
import {
  Button,
  Heading,
  HStack,
  Image,
  List,
  ListItem,
  Spinner,
} from "@chakra-ui/react";
import getCroppedImageUrl from "../services/image-url";
import useGameQueryStore from "../store";

const GenreList = () => {
  const { data, error, isLoading } = useGenres();

  const selectedGenreId = useGameQueryStore((s) => s.gameQuery.genreId);
  const setSelectedGenreId = useGameQueryStore((s) => s.setGenreId);

  if (error) return null;

  if (isLoading) return <Spinner />;

  return (
    <>
      <Heading
        fontSize="2xl"
        marginBottom={2}
        onClick={() => (selectedGenreId ? setSelectedGenreId(null) : undefined)}
        cursor={selectedGenreId ? "pointer" : "default"}
        _hover={selectedGenreId ? { color: "gray.200" } : {}}
      >
        Genres
      </Heading>
      <List>
        {/*{selectedGenreId && (*/}
        {/*  <ListItem key="0" paddingY="5px">*/}
        {/*    <Button*/}
        {/*      whiteSpace="normal"*/}
        {/*      textAlign="left"*/}
        {/*      variant="link"*/}
        {/*      fontWeight="normal"*/}
        {/*      fontSize="m"*/}
        {/*      onClick={() => setSelectedGenreId(null)}*/}
        {/*    >*/}
        {/*      All Genres*/}
        {/*    </Button>*/}
        {/*  </ListItem>*/}
        {/*)}*/}
        {data?.results.map((genre) => (
          <ListItem key={genre.id} paddingY="5px">
            <HStack>
              <Image
                boxSize="32px"
                objectFit="cover"
                borderRadius={8}
                src={getCroppedImageUrl(genre.image_background)}
              />
              <Button
                whiteSpace="normal"
                textAlign="left"
                variant="link"
                fontWeight={genre.id === selectedGenreId ? "bold" : "normal"}
                fontSize="lg"
                onClick={() => setSelectedGenreId(genre.id)}
              >
                {genre.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreList;
