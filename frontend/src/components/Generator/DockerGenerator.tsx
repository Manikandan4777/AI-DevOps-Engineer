import { useState } from "react";

import GenerateDockerButton from "./GenerateDockerButton";
import DockerViewer from "./DockerViewer";
import DownloadButton from "./DownloadButton";

function DockerGenerator() {
  const [framework, setFramework] = useState("");
  const [dockerfile, setDockerfile] = useState("");

  return (
    <div
      className="
      mt-12
      bg-white/5
      border
      border-white/10
      rounded-3xl
      p-8
      "
    >
      <h2 className="text-3xl font-bold text-white">
        🐳 Dockerfile Generator
      </h2>

      <p className="text-slate-400 mt-2">
        Generate a production-ready Dockerfile based on your uploaded project.
      </p>

      <div className="mt-6">
        <GenerateDockerButton
          onGenerated={(framework, dockerfile) => {
            setFramework(framework);
            setDockerfile(dockerfile);
          }}
        />
      </div>

      {dockerfile && (
        <>
          <DockerViewer
            framework={framework}
            dockerfile={dockerfile}
          />

          <div className="mt-6">
            <DownloadButton
              dockerfile={dockerfile}
            />
          </div>
        </>
      )}
    </div>
  );
}

export default DockerGenerator;