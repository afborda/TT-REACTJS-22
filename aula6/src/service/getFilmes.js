import { api } from "./baseUrl";

export const GetFilmes = async () => {
  try {
    const response = await api.get("?apikey=fa70f7a7&s=hulk");
    console.log(response);
    return response.data.Search;
  } catch (error) {
    console.log(error);
  }
};
