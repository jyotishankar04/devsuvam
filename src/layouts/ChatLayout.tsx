
import type React from "react"

import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Send } from "lucide-react"
import ChatMessages, { type Message } from "@/components/custom/chat/ChatMessages"
import { useChat } from "@/hooks/useChat"
import { useState } from "react"
import SiteNavbar from "@/components/custom/chat/SiteNavbar"
import BetaWarningModal from "@/components/custom/BetaWarningModel"

const ChatLayout = () => {
  const { messages, sendMessage, handleSuggestionClick, isLoading, error } = useChat()
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
      <div className="flex-1 flex flex-col min-h-0">
        {error && (
          <div className="mx-auto w-full max-w-3xl px-4 pt-4">
            <div className="rounded-lg border border-destructive/50 bg-destructive/10 px-4 py-3 text-sm text-destructive">
              {error}
            </div>
          </div>
        )}
        <div className="mx-auto w-full max-w-6xl flex-1 flex flex-col min-h-0">
          <ChatMessages
            messages={messages as Message[]}
            isLoading={isLoading}
            onSuggestionClick={handleSuggestionClick}
          />
        </div>
      </div>

      <div className="w-full border-t bg-background/80 backdrop-blur shrink-0">
        <div className="mx-auto w-full max-w-3xl p-4">
          <form onSubmit={handleSubmit}>
            <div className="relative flex items-end">
              <Textarea
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Type your message..."
                className="min-h-12 rounded-2xl resize-none p-4 pr-14 shadow-sm"
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
                  <Send size={18} />
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