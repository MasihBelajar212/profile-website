import type { TechItem } from "@/types";
import { iconMap } from "@/components/icons/iconMap";

export function TechBadge({ name, category, icon }: TechItem) {
  const Icon = iconMap[icon];

  return (
    <div className="flex items-center gap-2.5 rounded-xl border border-line bg-white p-4 transition-all duration-300 hover:-translate-y-1 hover:border-primary hover:shadow-[0_10px_22px_-12px_rgba(36,165,124,0.45)]">
      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-[9px] bg-primary-light text-primary-dark">
        <Icon className="h-[18px] w-[18px]" />
      </div>
      <div className="flex flex-col">
        <strong className="text-[14.5px] font-semibold text-ink">{name}</strong>
        <span className="font-mono text-[11.5px] text-muted">{category}</span>
      </div>
    </div>
  );
}
