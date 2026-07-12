interface FrameworkCardProps {
  framework: string;
}

function FrameworkCard({
  framework,
}: FrameworkCardProps) {
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
        ⚛ Framework
      </h3>

      <h1 className="text-4xl font-bold text-white mt-6">
        {framework}
      </h1>

      <p className="text-cyan-400 mt-4">
        Detected Successfully
      </p>
    </div>
  );
}

export default FrameworkCard;