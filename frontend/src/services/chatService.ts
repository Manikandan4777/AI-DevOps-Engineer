import axios from "axios";
import type { ChatRequest, ChatResponse } from "../types/chat";

const API_URL = "http://127.0.0.1:8000";

export async function sendMessage(
  question: string
): Promise<ChatResponse> {
  const body: ChatRequest = {
    question,
  };

  const response = await axios.post<ChatResponse>(
    `${API_URL}/chat`,
    body
  );

  return response.data;
}