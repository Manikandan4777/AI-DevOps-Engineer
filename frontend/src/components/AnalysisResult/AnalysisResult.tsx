import type { AnalysisResponse } from "../../types/analysis";

interface AnalysisResultProps {
  data: AnalysisResponse;
}

function AnalysisResult({ data }: AnalysisResultProps) {
  return (
    <div
      className="
      mt-10
      bg-white/5
      backdrop-blur-xl
      border
      border-white/10
      rounded-3xl
      p-8
      text-left
      "
    >
      <h2 className="text-3xl font-bold text-white mb-6">
        📊 Project Analysis
      </h2>

      {/* Project Details */}
      <div className="space-y-3 text-slate-300">

        <p>
          <strong className="text-white">Project Name:</strong>{" "}
          {data.project.name}
        </p>

        <p>
          <strong className="text-white">Framework:</strong>{" "}
          {data.framework}
        </p>

        <p>
          <strong className="text-white">Health Score:</strong>{" "}
          {data.summary.health_score}
        </p>

        <p>
          <strong className="text-white">DevOps Maturity:</strong>{" "}
          {data.summary.devops_maturity}
        </p>

        <p>
          <strong className="text-white">Total Checks:</strong>{" "}
          {data.summary.total_checks}
        </p>

        <p>
          <strong className="text-white">Passed Checks:</strong>{" "}
          {data.summary.passed_checks}
        </p>

        <p>
          <strong className="text-white">Issues Found:</strong>{" "}
          {data.summary.issues_found}
        </p>

      </div>

      {/* Recommendations */}
      <div className="mt-8">
        <h3 className="text-2xl font-semibold text-white mb-4">
          💡 Recommendations
        </h3>

        <ul className="space-y-2">
          {data.recommendations.map((recommendation, index) => (
            <li
              key={index}
              className="bg-slate-800/50 rounded-xl p-3 text-slate-300"
            >
              ✅ {recommendation}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default AnalysisResult;