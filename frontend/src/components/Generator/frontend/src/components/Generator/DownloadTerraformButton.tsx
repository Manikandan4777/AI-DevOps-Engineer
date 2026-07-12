interface Props {
  provider: string;
  main: string;
  variables: string;
  outputs: string;
}

function DownloadTerraformButton({
  provider,
  main,
  variables,
  outputs,
}: Props) {

  const download = (
    filename: string,
    content: string
  ) => {

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

    link.download = filename;

    link.click();

    window.URL.revokeObjectURL(url);

  };

  return (

    <div className="flex flex-wrap gap-4 mt-6">

      <button
        onClick={() => download("provider.tf", provider)}
        className="bg-blue-600 hover:bg-blue-500 px-5 py-3 rounded-xl text-white"
      >
        ⬇ provider.tf
      </button>

      <button
        onClick={() => download("main.tf", main)}
        className="bg-blue-600 hover:bg-blue-500 px-5 py-3 rounded-xl text-white"
      >
        ⬇ main.tf
      </button>

      <button
        onClick={() => download("variables.tf", variables)}
        className="bg-blue-600 hover:bg-blue-500 px-5 py-3 rounded-xl text-white"
      >
        ⬇ variables.tf
      </button>

      <button
        onClick={() => download("outputs.tf", outputs)}
        className="bg-blue-600 hover:bg-blue-500 px-5 py-3 rounded-xl text-white"
      >
        ⬇ outputs.tf
      </button>

    </div>

  );

}

export default DownloadTerraformButton;