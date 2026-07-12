interface Props {
  framework: string;
  jenkinsfile: string;
}

function JenkinsViewer({
  framework,
  jenkinsfile,
}: Props) {
  if (!jenkinsfile) return null;

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
        px-6
        py-4
        bg-slate-800
        border-b
        border-slate-700
        "
      >
        <h2 className="text-xl font-bold text-white">
          ⚙ Generated Jenkinsfile
        </h2>

        <p className="text-slate-400 text-sm mt-1">
          Framework : {framework}
        </p>
      </div>

      <pre
        className="
        p-6
        overflow-x-auto
        text-green-400
        text-sm
        leading-7
        "
      >
        <code>{jenkinsfile}</code>
      </pre>
    </div>
  );
}

export default JenkinsViewer;