import usePlatforms from "./usePlatforms";

const usePlatform = (id?: number | null) => {
  const { data: platforms } = usePlatforms();
  return platforms?.results.find((p) => p.id === id) || null;
};

export default usePlatform;
