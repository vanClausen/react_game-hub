import APIClient, { FetchResponse } from "../services/api-client";
import { useQuery } from "@tanstack/react-query";
import Trailer from "./entities/Trailer";

const useTrailers = (id: number) => {
  const apiClient = new APIClient<Trailer>(`/games/${id}/movies`);

  return useQuery<FetchResponse<Trailer>, Error>({
    queryKey: ["gameTrailers", id],
    queryFn: apiClient.getAll,
  });
};

export default useTrailers;
