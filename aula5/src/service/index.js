import { api } from "./UrlBase";

export const GetMovie = async () => {
  try {
    const movie = await api.get("?apikey=fa70f7a7&s=hulk");
    return movie.data.Search;
  } catch (error) {
    alert(error);
  }
};
