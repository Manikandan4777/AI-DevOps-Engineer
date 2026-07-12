import { generateDockerfile } from "../../services/generatorService";

interface Props {
  onGenerated: (
    framework: string,
    dockerfile: string
  ) => void;
}

function GenerateDockerButton({ onGenerated }: Props) {
  const handleClick = async () => {
    try {
      const response = await generateDockerfile();

      if (!response.success) {
        alert(response.dockerfile);
        return;
      }

      onGenerated(
        response.framework,
        response.dockerfile
      );
    } catch (error) {
      console.error(error);

      alert("Unable to generate Dockerfile.");
    }
  };

  return (
    <button
      onClick={handleClick}
      className="
      bg-cyan-600
      hover:bg-cyan-500
      transition
      rounded-xl
      px-6
      py-3
      font-semibold
      text-white
      "
    >
      🐳 Generate Dockerfile
    </button>
  );
}

export default GenerateDockerButton;