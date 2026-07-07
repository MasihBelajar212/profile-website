import Link from "next/link";
import type { ReactNode } from "react";

interface ButtonProps {
  href: string;
  variant?: "primary" | "outline";
  size?: "md" | "sm";
  children: ReactNode;
  className?: string;
}

const sizeStyles: Record<NonNullable<ButtonProps["size"]>, string> = {
  md: "px-6 py-3.5 text-[15px]",
  sm: "px-5 py-2.5 text-sm",
};

const variantStyles: Record<NonNullable<ButtonProps["variant"]>, string> = {
  primary:
    "bg-primary text-white shadow-[0_8px_20px_-8px_rgba(36,165,124,0.55)] hover:bg-primary-dark hover:-translate-y-0.5 hover:shadow-[0_12px_24px_-8px_rgba(36,165,124,0.6)]",
  outline:
    "border-[1.5px] border-line text-ink hover:border-primary hover:text-primary-dark hover:-translate-y-0.5",
};

export function Button({
  href,
  variant = "primary",
  size = "md",
  children,
  className = "",
}: ButtonProps) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center gap-2 rounded-[10px] font-semibold transition-all duration-300 ease-out ${sizeStyles[size]} ${variantStyles[variant]} ${className}`}
    >
      {children}
    </Link>
  );
}
