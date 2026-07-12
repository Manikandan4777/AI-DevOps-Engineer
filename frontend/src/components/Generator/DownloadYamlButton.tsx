interface Props {
  deployment: string;
  service: string;
  ingress: string;
}

function DownloadYamlButton({
  deployment,
  service,
  ingress,
}: Props) {

  const download = () => {

    const content =

`${deployment}

---

${service}

---

${ingress}`;

    const blob = new Blob(
      [content],
      {
        type: "text/plain",
      }
    );

    const url =
      window.URL.createObjectURL(blob);

    const link =
      document.createElement("a");

    link.href = url;

    link.download = "kubernetes.yaml";

    link.click();

    window.URL.revokeObjectURL(url);

  };

  return (

    <button
      onClick={download}
      className="
      bg-blue-600
      hover:bg-blue-500
      transition
      rounded-xl
      px-6
      py-3
      text-white
      font-semibold
      "
    >
      ⬇ Download Kubernetes YAML
    </button>

  );

}

export default DownloadYamlButton;