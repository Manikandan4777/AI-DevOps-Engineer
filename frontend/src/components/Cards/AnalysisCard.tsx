interface AnalysisCardProps {
  analysis: Record<string, boolean>;
}

function AnalysisCard({ analysis }: AnalysisCardProps) {

  const labels: Record<string, string> = {
    dockerfile: "Dockerfile",
    docker_compose: "Docker Compose",
    readme: "README",
    gitignore: ".gitignore",
    github_actions: "GitHub Actions",
    jenkins: "Jenkins",
    kubernetes: "Kubernetes",
    terraform: "Terraform",
  };

  return (
    <div
      className="
      bg-white/5
      backdrop-blur-xl
      border
      border-white/10
      rounded-3xl
      p-6
      shadow-lg
      "
    >
      <h2 className="text-2xl font-bold text-white mb-6">
        📋 Project Analysis
      </h2>

      <div className="space-y-4">

        {Object.entries(analysis).map(([key, value]) => (

          <div
            key={key}
            className="
            flex
            justify-between
            items-center
            bg-slate-800/40
            rounded-xl
            p-4
            "
          >
            <span className="text-white">
              {labels[key] ?? key}
            </span>

            <span className="text-xl">
              {value ? "✅" : "❌"}
            </span>

          </div>

        ))}

      </div>

    </div>
  );
}

export default AnalysisCard;