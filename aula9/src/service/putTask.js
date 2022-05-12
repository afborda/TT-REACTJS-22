import { api } from "./baseUrl";

export const updateTask = async (id, data) => {
  try {
    await api.put(`TODO/${id}`, data);
  } catch (error) {
    alert("Não foi possivel atualizar a tarefa");
  }
};
