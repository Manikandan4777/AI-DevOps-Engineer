export interface ChatMessage {
  id: number;
  sender: "user" | "ai";
  message: string;
  timestamp?: string;
}

export interface ChatRequest {
  question: string;
}

export interface ChatResponse {
  answer: string;
}