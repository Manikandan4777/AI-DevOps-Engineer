import { useState } from "react";

import type { ChatMessage } from "../../types/chat";
import { sendMessage } from "../../services/chatService";

import ChatInput from "./ChatInput";
import ChatBubble from "./ChatBubble";

function ChatWindow() {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [loading, setLoading] = useState(false);

  const handleSend = async (text: string) => {
    const userMessage: ChatMessage = {
      id: Date.now(),
      sender: "user",
      message: text,
    };

    setMessages((prev) => [...prev, userMessage]);

    setLoading(true);

    try {
      const response = await sendMessage(text);

      const aiMessage: ChatMessage = {
        id: Date.now() + 1,
        sender: "ai",
        message: response.answer,
      };

      setMessages((prev) => [...prev, aiMessage]);
    } catch (error) {
      console.error(error);

      const aiMessage: ChatMessage = {
        id: Date.now() + 1,
        sender: "ai",
        message: "❌ Unable to connect to AI backend.",
      };

      setMessages((prev) => [...prev, aiMessage]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="
      mt-10
      bg-white/5
      backdrop-blur-xl
      border
      border-white/10
      rounded-3xl
      p-6
      shadow-lg
      "
    >
      <h2 className="text-3xl font-bold text-white">
        🤖 AI DevOps Engineer
      </h2>

      <p className="text-slate-400 mt-2">
        Ask anything about Docker, Kubernetes, Jenkins, AWS, Terraform, or your uploaded project.
      </p>

      <div
        className="
        mt-6
        h-[450px]
        overflow-y-auto
        space-y-4
        pr-2
        "
      >
        {messages.length === 0 ? (
          <div className="text-center text-slate-500 mt-24">
            💬 No messages yet.
            <br />
            Start chatting with your AI DevOps Engineer.
          </div>
        ) : (
          messages.map((message) => (
            <ChatBubble
              key={message.id}
              message={message}
            />
          ))
        )}
      </div>

      {loading && (
        <p className="text-cyan-400 mt-4 animate-pulse">
          🤖 AI is thinking...
        </p>
      )}

      <ChatInput onSend={handleSend} />
    </div>
  );
}

export default ChatWindow;