import { useState } from "react";

import GenerateKubernetesButton from "./GenerateKubernetesButton";

import KubernetesViewer from "./KubernetesViewer";

import DownloadYamlButton from "./DownloadYamlButton";

function KubernetesGenerator() {

  const [framework, setFramework] =
    useState("");

  const [deployment, setDeployment] =
    useState("");

  const [service, setService] =
    useState("");

  const [ingress, setIngress] =
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
        ☸ Kubernetes Generator
      </h2>

      <p className="text-slate-400 mt-2">
        Generate Deployment, Service and
        Ingress YAML automatically.
      </p>

      <div className="mt-6">

        <GenerateKubernetesButton

          onGenerated={(
            framework,
            deployment,
            service,
            ingress
          ) => {

            setFramework(framework);

            setDeployment(deployment);

            setService(service);

            setIngress(ingress);

          }}

        />

      </div>

      {deployment && (

        <>

          <KubernetesViewer

            framework={framework}

            deployment={deployment}

            service={service}

            ingress={ingress}

          />

          <div className="mt-6">

            <DownloadYamlButton

              deployment={deployment}

              service={service}

              ingress={ingress}

            />

          </div>

        </>

      )}

    </div>

  );

}

export default KubernetesGenerator;