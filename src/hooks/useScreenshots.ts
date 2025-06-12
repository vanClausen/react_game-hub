import APIClient from "../services/api-client";
import { useQuery } from "@tanstack/react-query";
import Screenshot from "./entities/Screenshot";

const useScreenshots = (id: number) => {
  const apiClient = new APIClient<Screenshot>(`/games/${id}/screenshots`);

  return useQuery({
    queryKey: ["gameScreenshots", id],
    queryFn: apiClient.getAll,
  });
};

export default useScreenshots;
