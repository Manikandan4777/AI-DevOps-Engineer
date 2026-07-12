import { useState } from "react";
import type { AnalysisResponse } from "../../types/analysis";

import UploadCard from "../UploadProject/UploadCard";
import Loading from "../Loading/Loading";
import Dashboard from "../Dashboard/Dashboard";
import ChatWindow from "../Chat/ChatWindow";

import DockerGenerator from "../Generator/DockerGenerator";
import JenkinsGenerator from "../Generator/JenkinsGenerator";
import KubernetesGenerator from "../Generator/KubernetesGenerator";
import ComposeGenerator from "../Generator/ComposeGenerator";

function AIWorkspace() {

  const [loading, setLoading] = useState(false);

  const [analysis, setAnalysis] =
    useState<AnalysisResponse | null>(null);

  return (

    <section className="flex-1 px-10 py-10">

      <div className="max-w-7xl mx-auto">

        {/* ============================================= */}
        {/* Hero */}
        {/* ============================================= */}

        <div className="text-center">

          <h1 className="text-6xl font-bold text-white">
            Hello, Manikandan 👋
          </h1>

          <p className="text-slate-400 text-xl mt-5">
            I'm your AI DevOps Engineer
          </p>

          <p className="text-slate-500 mt-2">
            Upload your project, analyze it,
            chat with AI and generate DevOps files.
          </p>

        </div>

        {/* ============================================= */}
        {/* Upload */}
        {/* ============================================= */}

        <div className="flex justify-center gap-6 mt-12">

          <UploadCard
            onUploadStart={() => setLoading(true)}

            onUploadSuccess={(data) => {
              setLoading(false);
              setAnalysis(data);
            }}

            onUploadError={() => {
              setLoading(false);
              alert("Project Upload Failed!");
            }}
          />

          <button
            className="
            px-7
            py-4
            rounded-2xl
            bg-cyan-600
            hover:bg-cyan-500
            transition
            duration-300
            font-semibold
            "
          >
            🔗 GitHub Repository
          </button>

        </div>

        {/* ============================================= */}
        {/* Loading */}
        {/* ============================================= */}

        {loading && (

          <div className="mt-12">

            <Loading />

          </div>

        )}

        {/* ============================================= */}
        {/* Dashboard */}
        {/* ============================================= */}

        {analysis && (

          <div className="mt-16">

            <h2 className="text-3xl font-bold text-white mb-6">
              📊 Project Dashboard
            </h2>

            <Dashboard data={analysis} />

          </div>

        )}

        {/* ============================================= */}
        {/* AI Chat */}
        {/* ============================================= */}

        <div className="mt-16">

          <h2 className="text-3xl font-bold text-white mb-6">
            🤖 AI DevOps Assistant
          </h2>

          <ChatWindow />

        </div>

        {/* ============================================= */}
        {/* Docker Generator */}
        {/* ============================================= */}

        <DockerGenerator />

        {/* ============================================= */}
        {/* Jenkins Generator */}
        {/* ============================================= */}

        <JenkinsGenerator />

        {/* ============================================= */}
        {/* Kubernetes Generator */}
        {/* ============================================= */}

        <KubernetesGenerator />

        {/* ============================================= */}
        {/* Docker Compose Generator */}
        {/* ============================================= */}

        <ComposeGenerator />

      </div>

    </section>

  );

}

export default AIWorkspace;