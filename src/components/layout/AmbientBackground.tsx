export function AmbientBackground() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <div
        className="animate-drift absolute -top-28 -left-24 h-[420px] w-[420px] rounded-full opacity-35 blur-[70px]"
        style={{
          background:
            "radial-gradient(circle at 30% 30%, var(--color-primary), transparent 70%)",
          animationDuration: "26s",
        }}
      />
      <div
        className="animate-drift absolute top-[40%] -right-[140px] h-[340px] w-[340px] rounded-full opacity-35 blur-[70px]"
        style={{
          background:
            "radial-gradient(circle at 30% 30%, var(--color-primary), transparent 70%)",
          animationDuration: "30s",
          animationDelay: "-6s",
        }}
      />
      <div
        className="animate-drift absolute -bottom-[100px] left-[30%] h-[300px] w-[300px] rounded-full opacity-35 blur-[70px]"
        style={{
          background:
            "radial-gradient(circle at 30% 30%, var(--color-primary), transparent 70%)",
          animationDuration: "24s",
          animationDelay: "-12s",
        }}
      />
    </div>
  );
}
