import useGenres from "./useGenres";

const useGenre = (genreId?: number | null) => {
  const { data: genres } = useGenres();
  return genres?.results.find((g) => g.id === genreId) || null;
};

export default useGenre;
