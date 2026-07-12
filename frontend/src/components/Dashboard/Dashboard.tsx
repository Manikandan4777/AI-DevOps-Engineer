import type { AnalysisResponse } from "../../types/analysis";

import HealthCard from "../Cards/HealthCard";
import FrameworkCard from "../Cards/FrameworkCard";
import AnalysisCard from "../Cards/AnalysisCard";
import RecommendationCard from "../Cards/RecommendationCard";

interface DashboardProps {
  data: AnalysisResponse;
}

function Dashboard({ data }: DashboardProps) {
  return (
    <div className="mt-10 space-y-8">

      {/* Dashboard Title */}
      <div className="text-left">
        <h2 className="text-3xl font-bold text-white">
          📊 AI DevOps Dashboard
        </h2>

        <p className="text-slate-400 mt-2">
          Project Summary and DevOps Analysis
        </p>
      </div>

      {/* Top Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

        <HealthCard
          healthScore={data.summary.health_score}
          maturity={data.summary.devops_maturity}
        />

        <FrameworkCard
          framework={data.framework}
        />

      </div>

      {/* Analysis Card */}
      <AnalysisCard
        analysis={data.analysis}
      />

      {/* Recommendation Card */}
      <RecommendationCard
        recommendations={data.recommendations}
      />

    </div>
  );
}

export default Dashboard;