import PromptInput from "../PromptInput/PromptInput";

function AIWorkspace() {
  return (
    <section className="flex-1 flex items-center justify-center px-10">
      <div className="max-w-4xl w-full text-center">

        {/* Heading */}
        <h1 className="text-6xl font-bold text-white">
          Hello, Manikandan 👋
        </h1>

        {/* Subtitle */}
        <p className="text-slate-400 text-xl mt-5">
          I'm your AI DevOps Engineer.
        </p>

        <p className="text-slate-500 mt-2">
          Upload your project, paste a GitHub repository,
          or ask me anything.
        </p>

        {/* Action Buttons */}
        <div className="flex justify-center gap-6 mt-12">

          <button
            className="
            px-7
            py-4
            rounded-2xl
            bg-violet-600
            hover:bg-violet-500
            transition
            duration-300
            font-semibold
            "
          >
            📂 Upload Project
          </button>

          <button
            className="
            px-7
            py-4
            rounded-2xl
            bg-cyan-600
            hover:bg-cyan-500
            transition
            duration-300
            font-semibold
            "
          >
            🔗 GitHub Repository
          </button>

        </div>

        {/* Prompt Input Component */}
        <div className="mt-16">
          <PromptInput />
        </div>

      </div>
    </section>
  );
}

export default AIWorkspace;