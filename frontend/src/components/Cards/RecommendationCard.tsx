interface RecommendationCardProps {
  recommendations: string[];
}

function RecommendationCard({
  recommendations,
}: RecommendationCardProps) {
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
        💡 Recommendations
      </h2>

      <div className="space-y-4">

        {recommendations.map((item, index) => (

          <div
            key={index}
            className="
            bg-slate-800/40
            rounded-xl
            p-4
            text-white
            "
          >
            🚀 {item}
          </div>

        ))}

      </div>

    </div>
  );
}

export default RecommendationCard;