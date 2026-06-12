import { motion } from "framer-motion";
import React, { useLayoutEffect, useState } from "react";

interface RevealProps {
  children: React.ReactNode;
  direction?: "up" | "down" | "left" | "right" | "none";
  delay?: number;
  duration?: number;
  className?: string;
}

const MOBILE_BREAKPOINT = 768;
const visible = { opacity: 1, y: 0, x: 0 };

const getHiddenStyles = (direction: RevealProps["direction"]) => {
  switch (direction) {
    case "up":
      return { y: 30, opacity: 0 };
    case "down":
      return { y: -30, opacity: 0 };
    case "left":
      return { x: 30, opacity: 0 };
    case "right":
      return { x: -30, opacity: 0 };
    case "none":
      return { opacity: 0 };
    default:
      return { y: 30, opacity: 0 };
  }
};

export const Reveal = ({
  children,
  direction = "up",
  delay = 0,
  duration = 0.6,
  className = "",
}: RevealProps) => {
  const [isMobile, setIsMobile] = useState<boolean | null>(null);

  useLayoutEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const shouldAnimate = isMobile === false;

  if (!shouldAnimate) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      initial={getHiddenStyles(direction)}
      whileInView={visible}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration,
        delay,
        ease: "easeOut",
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};
