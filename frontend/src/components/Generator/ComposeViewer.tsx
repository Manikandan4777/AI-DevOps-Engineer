interface Props {
  framework: string;
  compose: string;
}

function ComposeViewer({
  framework,
  compose,
}: Props) {

  if (!compose) return null;

  return (

    <div
      className="
      mt-8
      bg-slate-900
      rounded-2xl
      border
      border-slate-700
      overflow-hidden
      "
    >

      <div
        className="
        bg-slate-800
        px-6
        py-4
        border-b
        border-slate-700
        "
      >

        <h2 className="text-xl font-bold text-white">
          📦 Docker Compose
        </h2>

        <p className="text-slate-400 mt-1">
          Framework : {framework}
        </p>

      </div>

      <div className="p-6">

        <pre className="text-green-400 overflow-x-auto">
          <code>{compose}</code>
        </pre>

      </div>

    </div>

  );

}

export default ComposeViewer;