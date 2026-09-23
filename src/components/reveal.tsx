"use client";

import { useEffect, useRef, type ReactNode } from "react";
import { cn } from "@/lib/utils";

/**
 * Scroll-triggered reveal wrapper. Toggles `.is-visible` once the element
 * enters the viewport; pair with the `.reveal` / `.reveal-mask` classes in
 * globals.css. `variant="none"` only toggles the class so children can react
 * via `group-[.is-visible]/reveal:` utilities.
 */
export function Reveal({
  children,
  className,
  delay = 0,
  variant = "up",
}: {
  children: ReactNode;
  className?: string;
  /** Stagger delay in ms */
  delay?: number;
  variant?: "up" | "mask" | "none";
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") {
      el.classList.add("is-visible");
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          el.classList.add("is-visible");
          io.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -6% 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
      className={cn(
        "group/reveal",
        variant === "up" && "reveal",
        variant === "mask" && "reveal-mask",
        className,
      )}
    >
      {children}
    </div>
  );
}
