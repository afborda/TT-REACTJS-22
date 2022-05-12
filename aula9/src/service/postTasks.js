import { api } from "./baseUrl";

export const AddTask = async (data) => {
  try {
    await api.post("TODO", data);
  } catch (error) {
    alert("Não foi possivel adicionar usuario =/");
  }
};
