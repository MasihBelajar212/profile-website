import { useEffect, type RefObject } from "react";

/**
 * Applies a subtle vertical parallax translate to the given element based on
 * scroll position. No-ops when the user prefers reduced motion.
 */
export function useParallax(ref: RefObject<HTMLElement | null>, factor = 0.08) {
  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    const handleScroll = () => {
      node.style.transform = `translateY(${window.scrollY * factor}px)`;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [ref, factor]);
}
