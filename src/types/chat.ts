// types/chat.ts
export interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
}

export interface ChatRequest {
  message: string;
  configId: string;
}

export interface ChatResponse {
  content: string;
  role: "assistant";
}