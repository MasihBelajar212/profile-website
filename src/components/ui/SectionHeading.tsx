interface SectionHeadingProps {
  title: string;
  eyebrow?: string;
}

export function SectionHeading({ title, eyebrow }: SectionHeadingProps) {
  return (
    <div>
      {eyebrow && (
        <span className="mb-3 inline-block font-mono text-[13px] font-medium text-primary-dark">
          {eyebrow}
        </span>
      )}
      <h2 className="text-[clamp(28px,3.2vw,38px)] font-bold text-primary">{title}</h2>
    </div>
  );
}
