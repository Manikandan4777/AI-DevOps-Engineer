import api from "../api/api";

export const uploadProject = async (file: File) => {
  const formData = new FormData();

  formData.append("file", file);

  const response = await api.post("/upload", formData);

  return response.data;
};