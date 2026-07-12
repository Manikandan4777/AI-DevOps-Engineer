import type { ChatMessage } from "../../types/chat";

interface Props {
  message: ChatMessage;
}

function ChatBubble({ message }: Props) {
  const isUser = message.sender === "user";

  return (
    <div
      className={`flex ${
        isUser ? "justify-end" : "justify-start"
      }`}
    >
      <div
        className={`
          max-w-[75%]
          px-5
          py-3
          rounded-2xl
          shadow-lg
          ${
            isUser
              ? "bg-violet-600 text-white"
              : "bg-slate-700 text-white"
          }
        `}
      >
        <p>{message.message}</p>
      </div>
    </div>
  );
}

export default ChatBubble;