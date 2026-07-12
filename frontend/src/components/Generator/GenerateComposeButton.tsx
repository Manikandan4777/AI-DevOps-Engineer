import { generateCompose } from "../../services/generatorService";

interface Props {
  onGenerated: (
    framework: string,
    compose: string
  ) => void;
}

function GenerateComposeButton({
  onGenerated,
}: Props) {

  const handleGenerate = async () => {

    try {

      const response =
        await generateCompose();

      if (!response.success) {

        alert(response.compose);

        return;

      }

      onGenerated(
        response.framework,
        response.compose
      );

    } catch (error) {

      console.error(error);

      alert(
        "Unable to generate Docker Compose."
      );

    }

  };

  return (

    <button
      onClick={handleGenerate}
      className="
      bg-sky-600
      hover:bg-sky-500
      transition
      rounded-xl
      px-6
      py-3
      font-semibold
      text-white
      "
    >
      📦 Generate Docker Compose
    </button>

  );

}

export default GenerateComposeButton;