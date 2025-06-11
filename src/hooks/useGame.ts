import APIClient from "../services/api-client";
import { useQuery } from "@tanstack/react-query";

interface GameDetails {
  id: number;
  slug: string;
  name: string;
  name_original: string;
  description: string;
  description_raw: string;
}

const apiClient = new APIClient<GameDetails>("/games");

const useGame = (slug: string) => {
  return useQuery<GameDetails, Error>({
    queryKey: ["game", slug],
    queryFn: () => apiClient.get(slug),
    // staleTime: 1000 * 60 * 60 * 24, // 24 hours
  });
};

export default useGame;
