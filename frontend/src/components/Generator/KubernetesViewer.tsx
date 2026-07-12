interface Props {
  framework: string;
  deployment: string;
  service: string;
  ingress: string;
}

function KubernetesViewer({
  framework,
  deployment,
  service,
  ingress,
}: Props) {

  if (!deployment) return null;

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
          ☸ Kubernetes YAML
        </h2>

        <p className="text-slate-400 mt-1">
          Framework : {framework}
        </p>

      </div>

      {/* Deployment */}

      <div className="p-6">

        <h3 className="text-cyan-400 font-semibold mb-2">
          deployment.yaml
        </h3>

        <pre className="text-green-400 overflow-x-auto">
          <code>{deployment}</code>
        </pre>

        <hr className="my-6 border-slate-700" />

        <h3 className="text-cyan-400 font-semibold mb-2">
          service.yaml
        </h3>

        <pre className="text-green-400 overflow-x-auto">
          <code>{service}</code>
        </pre>

        <hr className="my-6 border-slate-700" />

        <h3 className="text-cyan-400 font-semibold mb-2">
          ingress.yaml
        </h3>

        <pre className="text-green-400 overflow-x-auto">
          <code>{ingress}</code>
        </pre>

      </div>

    </div>

  );

}

export default KubernetesViewer;