interface Props {
  compose: string;
}

function DownloadComposeButton({
  compose,
}: Props) {

  const download = () => {

    const blob = new Blob(
      [compose],
      {
        type: "text/plain",
      }
    );

    const url =
      window.URL.createObjectURL(blob);

    const link =
      document.createElement("a");

    link.href = url;

    link.download = "docker-compose.yml";

    link.click();

    window.URL.revokeObjectURL(url);

  };

  return (

    <button
      onClick={download}
      className="
      bg-cyan-600
      hover:bg-cyan-500
      transition
      rounded-xl
      px-6
      py-3
      text-white
      font-semibold
      "
    >
      ⬇ Download docker-compose.yml
    </button>

  );

}

export default DownloadComposeButton;