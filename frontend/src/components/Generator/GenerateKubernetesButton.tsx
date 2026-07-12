import { generateKubernetes } from "../../services/generatorService";

interface Props {
  onGenerated: (
    framework: string,
    deployment: string,
    service: string,
    ingress: string
  ) => void;
}

function GenerateKubernetesButton({
  onGenerated,
}: Props) {
  const handleGenerate = async () => {
    try {
      const response = await generateKubernetes();

      if (!response.success) {
        alert(response.deployment);
        return;
      }

      onGenerated(
        response.framework,
        response.deployment,
        response.service,
        response.ingress
      );
    } catch (error) {
      console.error(error);

      alert("Unable to generate Kubernetes YAML.");
    }
  };

  return (
    <button
      onClick={handleGenerate}
      className="
      bg-blue-600
      hover:bg-blue-500
      transition
      px-6
      py-3
      rounded-xl
      font-semibold
      text-white
      "
    >
      ☸ Generate Kubernetes YAML
    </button>
  );
}

export default GenerateKubernetesButton;