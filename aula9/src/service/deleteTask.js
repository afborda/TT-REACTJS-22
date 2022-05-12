import { api } from "./baseUrl";

export const DeleteTask = async (id) => {
  try {
    await api.delete(`TODO/${id}`);
  } catch (error) {
    alert("Nào foi possivel deletar está tarefa!");
  }
};
