interface DockerViewerProps {
  framework: string;
  dockerfile: string;
}

function DockerViewer({
  framework,
  dockerfile,
}: DockerViewerProps) {
  if (!dockerfile) return null;

  return (
    <div
      className="
      mt-8
      bg-slate-900
      border
      border-slate-700
      rounded-2xl
      overflow-hidden
      shadow-lg
      "
    >
      {/* Header */}
      <div
        className="
        flex
        justify-between
        items-center
        px-6
        py-4
        bg-slate-800
        border-b
        border-slate-700
        "
      >
        <div>
          <h2 className="text-xl font-bold text-white">
            🐳 Generated Dockerfile
          </h2>

          <p className="text-slate-400 text-sm mt-1">
            Framework : {framework}
          </p>
        </div>
      </div>

      {/* Dockerfile */}

      <pre
        className="
        overflow-x-auto
        p-6
        text-green-400
        text-sm
        leading-7
        "
      >
        <code>{dockerfile}</code>
      </pre>
    </div>
  );
}

export default DockerViewer;