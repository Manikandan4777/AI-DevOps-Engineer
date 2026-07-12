import { generateJenkinsfile } from "../../services/generatorService";

interface Props {
  onGenerated: (
    framework: string,
    jenkinsfile: string
  ) => void;
}

function GenerateJenkinsButton({
  onGenerated,
}: Props) {
  const handleGenerate = async () => {
    try {
      const response =
        await generateJenkinsfile();

      if (!response.success) {
        alert(response.jenkinsfile);
        return;
      }

      onGenerated(
        response.framework,
        response.jenkinsfile
      );
    } catch (error) {
      console.error(error);

      alert("Unable to generate Jenkinsfile.");
    }
  };

  return (
    <button
      onClick={handleGenerate}
      className="
      bg-orange-600
      hover:bg-orange-500
      transition
      px-6
      py-3
      rounded-xl
      font-semibold
      text-white
      "
    >
      ⚙ Generate Jenkinsfile
    </button>
  );
}

export default GenerateJenkinsButton;