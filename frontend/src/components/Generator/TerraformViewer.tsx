interface Props {
  framework: string;
  provider: string;
  main: string;
  variables: string;
  outputs: string;
}

function TerraformViewer({
  framework,
  provider,
  main,
  variables,
  outputs,
}: Props) {

  if (!provider) return null;

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
        <h2 className="text-2xl font-bold text-white">
          🌍 Terraform Configuration
        </h2>

        <p className="text-slate-400 mt-1">
          Framework: {framework}
        </p>
      </div>

      {/* provider.tf */}

      <div className="p-6 border-b border-slate-700">
        <h3 className="text-cyan-400 font-semibold mb-3">
          provider.tf
        </h3>

        <pre className="text-green-400 overflow-x-auto">
          <code>{provider}</code>
        </pre>
      </div>

      {/* main.tf */}

      <div className="p-6 border-b border-slate-700">
        <h3 className="text-cyan-400 font-semibold mb-3">
          main.tf
        </h3>

        <pre className="text-green-400 overflow-x-auto">
          <code>{main}</code>
        </pre>
      </div>

      {/* variables.tf */}

      <div className="p-6 border-b border-slate-700">
        <h3 className="text-cyan-400 font-semibold mb-3">
          variables.tf
        </h3>

        <pre className="text-green-400 overflow-x-auto">
          <code>{variables}</code>
        </pre>
      </div>

      {/* outputs.tf */}

      <div className="p-6">
        <h3 className="text-cyan-400 font-semibold mb-3">
          outputs.tf
        </h3>

        <pre className="text-green-400 overflow-x-auto">
          <code>{outputs}</code>
        </pre>
      </div>

    </div>
  );

}

export default TerraformViewer;