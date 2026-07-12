import { generateTerraform } from "../../services/generatorService";

interface Props {
  onGenerated: (
    framework: string,
    provider: string,
    main: string,
    variables: string,
    outputs: string
  ) => void;
}

function GenerateTerraformButton({
  onGenerated,
}: Props) {

  const handleGenerate = async () => {

    try {

      const response =
        await generateTerraform();

      if (!response.success) {

        alert(response.provider);

        return;

      }

      onGenerated(
        response.framework,
        response.provider,
        response.main,
        response.variables,
        response.outputs
      );

    } catch (error) {

      console.error(error);

      alert("Unable to generate Terraform.");

    }

  };

  return (

    <button
      onClick={handleGenerate}
      className="
      bg-indigo-600
      hover:bg-indigo-500
      transition
      px-6
      py-3
      rounded-xl
      font-semibold
      text-white
      "
    >
      🌍 Generate Terraform
    </button>

  );

}

export default GenerateTerraformButton;