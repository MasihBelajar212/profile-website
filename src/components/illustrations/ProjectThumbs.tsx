import type { ComponentType } from "react";
import type { ThumbnailKey } from "@/types";

interface ThumbProps {
  className?: string;
}

export function EcommerceThumb({ className }: ThumbProps) {
  return (
    <svg className={className} viewBox="0 0 400 200" preserveAspectRatio="xMidYMid slice" aria-hidden>
      <rect width="400" height="200" fill="#E8F5F0" />
      <rect x="24" y="24" width="352" height="26" rx="6" fill="#24A57C" opacity="0.85" />
      <rect x="24" y="66" width="200" height="12" rx="4" fill="#1B7A5C" opacity="0.5" />
      <rect x="24" y="90" width="150" height="12" rx="4" fill="#1B7A5C" opacity="0.3" />
      <rect x="24" y="118" width="110" height="46" rx="8" fill="#24A57C" opacity="0.65" />
      <rect x="146" y="118" width="110" height="46" rx="8" fill="#24A57C" opacity="0.4" />
      <rect x="268" y="118" width="108" height="46" rx="8" fill="#24A57C" opacity="0.25" />
    </svg>
  );
}

export function DashboardThumb({ className }: ThumbProps) {
  return (
    <svg className={className} viewBox="0 0 400 200" preserveAspectRatio="xMidYMid slice" aria-hidden>
      <rect width="400" height="200" fill="#E8F5F0" />
      <circle cx="90" cy="70" r="46" fill="#24A57C" opacity="0.5" />
      <rect x="160" y="40" width="200" height="16" rx="5" fill="#1B7A5C" opacity="0.5" />
      <rect x="160" y="66" width="150" height="12" rx="4" fill="#1B7A5C" opacity="0.3" />
      <rect x="40" y="130" width="320" height="10" rx="5" fill="#24A57C" opacity="0.3" />
      <rect x="40" y="150" width="220" height="10" rx="5" fill="#24A57C" opacity="0.2" />
    </svg>
  );
}

export function CompanyThumb({ className }: ThumbProps) {
  return (
    <svg className={className} viewBox="0 0 400 200" preserveAspectRatio="xMidYMid slice" aria-hidden>
      <rect width="400" height="200" fill="#E8F5F0" />
      <rect x="24" y="24" width="150" height="152" rx="10" fill="#24A57C" opacity="0.3" />
      <rect x="190" y="24" width="186" height="70" rx="10" fill="#24A57C" opacity="0.55" />
      <rect x="190" y="106" width="186" height="70" rx="10" fill="#1B7A5C" opacity="0.35" />
    </svg>
  );
}

export const thumbnailMap: Record<ThumbnailKey, ComponentType<ThumbProps>> = {
  ecommerce: EcommerceThumb,
  dashboard: DashboardThumb,
  company: CompanyThumb,
};
