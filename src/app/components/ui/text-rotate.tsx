import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";

interface TextRotateProps {
  texts: string[];
  rotationInterval?: number;
  mainClassName?: string;
  splitLevelClassName?: string;
  staggerFrom?: "first" | "last" | "center";
  staggerDuration?: number;
  transition?: object;
}

export function TextRotate({
  texts,
  rotationInterval = 2000,
  mainClassName,
  splitLevelClassName,
  staggerFrom = "first",
  staggerDuration = 0.025,
  transition = { type: "spring", damping: 30, stiffness: 400 },
}: TextRotateProps) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % texts.length);
    }, rotationInterval);
    return () => clearInterval(id);
  }, [texts.length, rotationInterval]);

  const text = texts[index];
  const chars = text.split("");

  const getDelay = (i: number) => {
    if (staggerFrom === "last") return (chars.length - 1 - i) * staggerDuration;
    if (staggerFrom === "center") {
      const mid = (chars.length - 1) / 2;
      return Math.abs(i - mid) * staggerDuration;
    }
    return i * staggerDuration;
  };

  const charVariants = {
    initial: { y: "1.1em" },
    animate: { y: "0em" },
    exit: { y: "-1.1em" },
  };

  return (
    <span className={mainClassName}>
      <AnimatePresence mode="wait">
        <motion.span
          key={index}
          className="flex"
          aria-label={text}
          initial="initial"
          animate="animate"
          exit="exit"
        >
          {chars.map((char, i) => (
            <span
              key={i}
              className={splitLevelClassName}
              style={{ display: "inline-block", overflow: "hidden" }}
            >
              <motion.span
                variants={charVariants}
                style={{ display: "inline-block" }}
                transition={{ ...(transition as object), delay: getDelay(i) }}
              >
                {char === " " ? " " : char}
              </motion.span>
            </span>
          ))}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}
