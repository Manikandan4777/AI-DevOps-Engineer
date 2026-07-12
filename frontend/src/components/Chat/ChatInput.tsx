import { useState } from "react";

interface Props {
  onSend: (message: string) => void;
}

function ChatInput({ onSend }: Props) {
  const [message, setMessage] = useState("");

  const handleSend = () => {
    if (!message.trim()) return;

    onSend(message);

    setMessage("");
  };

  return (
    <div className="flex gap-4 mt-5">

      <input
        type="text"
        placeholder="Ask AI DevOps Engineer anything..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        className="
        flex-1
        bg-slate-800
        border
        border-slate-700
        rounded-xl
        px-5
        py-3
        text-white
        outline-none
        "
      />

      <button
        onClick={handleSend}
        className="
        bg-violet-600
        hover:bg-violet-500
        rounded-xl
        px-6
        font-semibold
        transition
        "
      >
        Send
      </button>

    </div>
  );
}

export default ChatInput;