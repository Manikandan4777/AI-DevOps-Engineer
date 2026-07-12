interface HealthCardProps {
  healthScore: string;
  maturity: string;
}

function HealthCard({
  healthScore,
  maturity,
}: HealthCardProps) {
  return (
    <div
      className="
      bg-white/5
      backdrop-blur-xl
      border
      border-white/10
      rounded-3xl
      p-6
      text-center
      shadow-lg
      "
    >
      <h3 className="text-lg text-slate-400">
        🟢 Health Score
      </h3>

      <h1 className="text-5xl font-bold text-white mt-4">
        {healthScore}
      </h1>

      <p className="text-violet-400 mt-4 font-semibold">
        {maturity}
      </p>
    </div>
  );
}

export default HealthCard;