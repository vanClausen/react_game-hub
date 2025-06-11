import APIClient from "../services/api-client";
import { useQuery } from "@tanstack/react-query";
import { Game } from "./entities/Game";

const apiClient = new APIClient<Game>("/games");

const useGame = (slug: string) => {
  return useQuery<Game, Error>({
    queryKey: ["game", slug],
    queryFn: () => apiClient.get(slug),
    // staleTime: 1000 * 60 * 60 * 24, // 24 hours
  });
};

export default useGame;
