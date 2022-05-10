import { api } from "./baseUrl";

export const GetFilmes = async (data) => {
  try {
    const response = await api.get(`?apikey=fa70f7a7&s=${data}`);
    console.log("GetFilmes>>", response);
    return response.data.Search;
  } catch (error) {
    console.log(error);
  }
};

export const GetDetails = async (id) => {
  try {
    const response = await api.get(`?apikey=fa70f7a7&i=${id}`);
    console.log("GetDetails>>", response);

    return response.data;
  } catch (error) {
    alert("Deu erro!!", error);
  }
};
