import type { ChatMessage as ChatMessageType } from "../../types/chat";
import ChatBubble from "./ChatBubble";

interface Props {
  messages: ChatMessageType[];
}

function ChatMessage({ messages }: Props) {
  return (
    <div className="space-y-4">
      {messages.map((message) => (
        <ChatBubble
          key={message.id}
          message={message}
        />
      ))}
    </div>
  );
}

export default ChatMessage;