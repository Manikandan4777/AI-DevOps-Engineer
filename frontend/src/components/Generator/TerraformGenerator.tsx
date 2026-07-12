import { useState } from "react";

import GenerateTerraformButton from "./GenerateTerraformButton";
import TerraformViewer from "./TerraformViewer";
import DownloadTerraformButton from "./DownloadTerraformButton";

function TerraformGenerator() {

  const [framework, setFramework] = useState("");

  const [provider, setProvider] = useState("");

  const [main, setMain] = useState("");

  const [variables, setVariables] = useState("");

  const [outputs, setOutputs] = useState("");

  return (

    <div
      className="
      mt-16
      bg-white/5
      border
      border-white/10
      rounded-3xl
      p-8
      "
    >

      <h2 className="text-3xl font-bold text-white">
        🌍 Terraform Generator
      </h2>

      <p className="text-slate-400 mt-2">
        Generate Terraform Infrastructure automatically.
      </p>

      <div className="mt-6">

        <GenerateTerraformButton

          onGenerated={(
            framework,
            provider,
            main,
            variables,
            outputs
          ) => {

            setFramework(framework);

            setProvider(provider);

            setMain(main);

            setVariables(variables);

            setOutputs(outputs);

          }}

        />

      </div>

      {provider && (

        <>

          <TerraformViewer
            framework={framework}
            provider={provider}
            main={main}
            variables={variables}
            outputs={outputs}
          />

          <DownloadTerraformButton
            provider={provider}
            main={main}
            variables={variables}
            outputs={outputs}
          />

        </>

      )}

    </div>

  );

}

export default TerraformGenerator;