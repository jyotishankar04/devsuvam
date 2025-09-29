"use client"

// hooks/useChat.ts
import { useMutation } from "@tanstack/react-query"
import { useState } from "react"
import { chatService } from "@/services/ChatService"
import type { Message } from "@/types/chat"
import { v4 as uuidv4 } from "uuid"

export const useChat = () => {
  const [configId] = useState(() => uuidv4()) // Generate random configId
  const [messages, setMessages] = useState<Message[]>([])

  const mutation = useMutation({
    mutationFn: (message: string) => chatService.sendMessage({ message, configId }),
    onSuccess: (data ) => {
      // Add assistant's response to messages
      const assistantMessage: Message = {
        id: uuidv4(),
        role: "assistant",
        content: data.content,
      }

      setMessages((prev) => [...prev, assistantMessage])
    },
    onError: (error) => {
      console.error("Failed to send message:", error)
      // You can add error handling here, like showing a toast notification
    },
  })

  const sendMessage = (content: string) => {
    // Add user message immediately
    const userMessage: Message = {
      id: uuidv4(),
      role: "user",
      content,
    }

    setMessages((prev) => [...prev, userMessage])
    mutation.mutate(content)
  }

  const handleSuggestionClick = (suggestion: string) => {
    sendMessage(suggestion)
  }

  return {
    messages,
    sendMessage,
    handleSuggestionClick,
    isLoading: mutation.isPending,
    error: mutation.error,
  }
}
