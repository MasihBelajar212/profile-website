"use client";

import { useRef } from "react";
import { useTypingEffect } from "@/hooks/useTypingEffect";
import { useParallax } from "@/hooks/useParallax";

const SKILLS = ["react", "next.js", "node.js", "postgresql", "tailwind"];

export function TerminalWindow() {
  const ref = useRef<HTMLDivElement>(null);
  const typed = useTypingEffect(SKILLS);
  useParallax(ref);

  return (
    <div
      ref={ref}
      className="w-full max-w-[460px] overflow-hidden rounded-2xl bg-[#151A18] shadow-[0_30px_60px_-20px_rgba(15,40,30,0.35)] will-change-transform"
    >
      <div className="flex items-center gap-1.5 bg-[#1E2622] px-4 py-3">
        <span className="h-[11px] w-[11px] rounded-full bg-[#FF5F57]" />
        <span className="h-[11px] w-[11px] rounded-full bg-[#FEBC2E]" />
        <span className="h-[11px] w-[11px] rounded-full bg-[#28C840]" />
      </div>
      <div className="min-h-[220px] px-5 pb-7 pt-[22px] font-mono text-[13.5px] text-[#B8E5D3]">
        <div className="mb-2.5 text-[#8CA69B]">$ whoami</div>
        <div className="mb-4 text-[#8CA69B]">
          &gt; <span className="text-[#5FD3A4]">arya</span>_wicaksana
        </div>
        <div className="mb-2.5 text-[#8CA69B]">$ skills --list</div>
        <div className="text-[#8CA69B]">
          {typed}
          <span className="animate-blink text-[#5FD3A4]">▍</span>
        </div>
      </div>
    </div>
  );
}
