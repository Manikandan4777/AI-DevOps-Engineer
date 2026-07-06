function Background() {
  return (
    <>
      <div
        className="
        fixed
        inset-0
        -z-10
        bg-[radial-gradient(circle_at_top,#1e1b4b_0%,#050816_70%)]
        "
      />

      <div
        className="
        fixed
        top-40
        left-40
        w-72
        h-72
        rounded-full
        bg-violet-600/20
        blur-[120px]
        -z-10
        "
      />

      <div
        className="
        fixed
        bottom-40
        right-40
        w-96
        h-96
        rounded-full
        bg-cyan-500/10
        blur-[150px]
        -z-10
        "
      />
    </>
  );
}

export default Background;