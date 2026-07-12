import { useState } from "react";

import GenerateJenkinsButton from "./GenerateJenkinsButton";
import JenkinsViewer from "./JenkinsViewer";
import DownloadJenkinsButton from "./DownloadJenkinsButton";

function JenkinsGenerator() {
  const [framework, setFramework] =
    useState("");

  const [jenkinsfile, setJenkinsfile] =
    useState("");

  return (
    <div
      className="
      mt-14
      bg-white/5
      border
      border-white/10
      rounded-3xl
      p-8
      "
    >
      <h2 className="text-3xl font-bold text-white">
        ⚙ Jenkinsfile Generator
      </h2>

      <p className="text-slate-400 mt-2">
        Generate a Jenkins CI/CD Pipeline
        for your uploaded project.
      </p>

      <div className="mt-6">

        <GenerateJenkinsButton
          onGenerated={(
            framework,
            jenkinsfile
          ) => {

            setFramework(framework);

            setJenkinsfile(jenkinsfile);

          }}
        />

      </div>

      {jenkinsfile && (
        <>
          <JenkinsViewer
            framework={framework}
            jenkinsfile={jenkinsfile}
          />

          <div className="mt-6">

            <DownloadJenkinsButton
              jenkinsfile={jenkinsfile}
            />

          </div>
        </>
      )}
    </div>
  );
}

export default JenkinsGenerator;