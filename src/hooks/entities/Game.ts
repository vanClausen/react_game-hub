import Genre from "./Genre";
import Publisher from "./Publisher";
import Platform from "./Platform";

export default interface Game {
  id: number;
  slug: string;
  name: string;
  description: string;
  description_raw: string;
  genres: Genre[];
  publishers: Publisher[];
  children: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  rating_top: number;
}
