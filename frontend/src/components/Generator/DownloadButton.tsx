interface Props {
  dockerfile: string;
}

function DownloadButton({
  dockerfile,
}: Props) {
  const handleDownload = () => {
    const blob = new Blob(
      [dockerfile],
      {
        type: "text/plain",
      }
    );

    const url =
      window.URL.createObjectURL(blob);

    const link =
      document.createElement("a");

    link.href = url;

    link.download = "Dockerfile";

    link.click();

    window.URL.revokeObjectURL(url);
  };

  if (!dockerfile) return null;

  return (
    <button
      onClick={handleDownload}
      className="
      bg-green-600
      hover:bg-green-500
      transition
      px-6
      py-3
      rounded-xl
      text-white
      font-semibold
      "
    >
      ⬇ Download Dockerfile
    </button>
  );
}

export default DownloadButton;