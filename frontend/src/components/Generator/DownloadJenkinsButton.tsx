interface Props {
  jenkinsfile: string;
}

function DownloadJenkinsButton({
  jenkinsfile,
}: Props) {
  const download = () => {
    const blob = new Blob(
      [jenkinsfile],
      {
        type: "text/plain",
      }
    );

    const url =
      window.URL.createObjectURL(blob);

    const link =
      document.createElement("a");

    link.href = url;

    link.download = "Jenkinsfile";

    link.click();

    window.URL.revokeObjectURL(url);
  };

  if (!jenkinsfile) return null;

  return (
    <button
      onClick={download}
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
      ⬇ Download Jenkinsfile
    </button>
  );
}

export default DownloadJenkinsButton;