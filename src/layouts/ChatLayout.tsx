"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import ChatMessages, { type Message } from "@/components/custom/chat/ChatMessages"
import { useChat } from "@/hooks/useChat"
import { useState } from "react"
import SiteNavbar from "@/components/custom/chat/SiteNavbar"
import BetaWarningModal from "@/components/custom/BetaWarningModel"

const ChatLayout = () => {
  const { messages, sendMessage, handleSuggestionClick, isLoading } = useChat()
  const [inputValue, setInputValue] = useState("")
  const [showBetaModal, setShowBetaModal] = useState(true)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (inputValue.trim() && !isLoading) {
      sendMessage(inputValue.trim())
      setInputValue("")
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      handleSubmit(e)
    }
  }

  return (
    <div className="w-full h-screen flex flex-col">
      <SiteNavbar />
      <BetaWarningModal
        isOpen={showBetaModal}
        onOpenChange={setShowBetaModal}
      />
      <div className="flex-1 flex flex-col min-h-0"> {/* Added min-h-0 to prevent overflow */}
        <div className="mx-auto w-full max-w-6xl flex-1 flex flex-col min-h-0"> {/* Added flex-1 and min-h-0 */}
          <ChatMessages
            messages={messages as Message[]}
            isLoading={isLoading}
            onSuggestionClick={handleSuggestionClick}
          />
        </div>
      </div>

      <div className="w-full border-t bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60 shrink-0"> {/* Added shrink-0 */}
        <div className="mx-auto w-full max-w-3xl p-4">
          <form onSubmit={handleSubmit}>
            <div className="relative flex items-end">
              <Textarea
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Type your message..."
                className="min-h-[48px] rounded-2xl resize-none p-4 pr-14 shadow-sm"
                disabled={isLoading}
              />
              <Button
                type="submit"
                size="icon"
                className="absolute right-3 bottom-3 h-9 w-9"
                disabled={!inputValue.trim() || isLoading}
                aria-label="Send message"
              >
                {isLoading ? (
                  <div className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
                ) : (
                  // send icon
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
                    <path d="M3.478 2.405a.75.75 0 0 0-.926.94l2.432 7.905H13.5a.75.75 0 0 1 0 1.5H4.984l-2.432 7.905a.75.75 0 0 0 .926.94 60.519 60.519 0 0 0 18.445-8.986.75.75 0 0 0 0-1.218A60.517 60.517 0 0 0 3.478 2.405Z" />
                  </svg>
                )}
                <span className="sr-only">Send message</span>
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default ChatLayout