import { useState } from "react";

import GenerateComposeButton from "./GenerateComposeButton";
import ComposeViewer from "./ComposeViewer";
import DownloadComposeButton from "./DownloadComposeButton";

function ComposeGenerator() {

  const [framework, setFramework] =
    useState("");

  const [compose, setCompose] =
    useState("");

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
        📦 Docker Compose Generator
      </h2>

      <p className="text-slate-400 mt-2">
        Generate docker-compose.yml automatically.
      </p>

      <div className="mt-6">

        <GenerateComposeButton

          onGenerated={(framework, compose) => {

            setFramework(framework);

            setCompose(compose);

          }}

        />

      </div>

      {compose && (

        <>

          <ComposeViewer

            framework={framework}

            compose={compose}

          />

          <div className="mt-6">

            <DownloadComposeButton

              compose={compose}

            />

          </div>

        </>

      )}

    </div>

  );

}

export default ComposeGenerator;