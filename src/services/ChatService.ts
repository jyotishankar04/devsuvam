// services/chatService.ts
import axios from "axios"
import type { ChatRequest, ChatResponse } from "@/types/chat"


export const chatService = {
  sendMessage: async (request: ChatRequest): Promise<ChatResponse> => {
    const response = await axios.post<ChatResponse>(`${import.meta.env.VITE_API_URL}/api/ask`, {
      question: request.message,
      configId: request.configId,
    })
    return response.data
  },
}
