import { CSSProperties, ReactNode } from "react";
import { cn } from "./utils";

interface AnimatedGradientTextProps {
  children: ReactNode;
  className?: string;
  colorFrom?: string;
  colorTo?: string;
  speed?: number;
}

export function AnimatedGradientText({
  children,
  className,
  colorFrom = "#4ade80",
  colorTo = "#06b6d4",
  speed = 2,
}: AnimatedGradientTextProps) {
  return (
    <span
      className={cn("inline-block bg-clip-text text-transparent", className)}
      style={
        {
          backgroundImage: `linear-gradient(90deg, ${colorFrom}, ${colorTo}, ${colorFrom})`,
          backgroundSize: "200% auto",
          animation: `gradient-shift ${speed}s linear infinite`,
          "--color-from": colorFrom,
          "--color-to": colorTo,
        } as CSSProperties
      }
    >
      {children}
      <style>{`
        @keyframes gradient-shift {
          0% { background-position: 0% center; }
          100% { background-position: 200% center; }
        }
      `}</style>
    </span>
  );
}
