import { Paperclip, Mic, Send } from "lucide-react";

function PromptInput() {
  return (
    <div
      className="
      mt-10
      w-full
      bg-white/5
      border
      border-white/10
      rounded-3xl
      backdrop-blur-xl
      p-5
      shadow-lg
      "
    >
      <textarea
        rows={3}
        placeholder="Ask AI DevOps Engineer anything..."
        className="
        w-full
        bg-transparent
        outline-none
        resize-none
        text-white
        placeholder:text-slate-400
        text-lg
        "
      />

      <div className="flex justify-between items-center mt-5">

        <div className="flex gap-3">

          <button className="p-3 rounded-xl hover:bg-white/10 transition">
            <Paperclip size={20} />
          </button>

          <button className="p-3 rounded-xl hover:bg-white/10 transition">
            <Mic size={20} />
          </button>

        </div>

        <button
          className="
          bg-violet-600
          hover:bg-violet-500
          rounded-xl
          p-3
          transition
          "
        >
          <Send size={20} />
        </button>

      </div>

    </div>
  );
}

export default PromptInput;