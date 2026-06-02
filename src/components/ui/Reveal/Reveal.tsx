import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";

interface RevealProps {
  children: React.ReactNode;
  direction?: "up" | "down" | "left" | "right" | "none";
  delay?: number;
  duration?: number;
  className?: string;
}

export const Reveal = ({
  children,
  direction = "up",
  delay = 0,
  duration = 0.6,
  className = "",
}: RevealProps) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
  }, []);

  const getInitialStyles = () => {
    if (isMobile) {
      return { opacity: 1, y: 0, x: 0 };
    }
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

  return (
    <motion.div
      initial={getInitialStyles()}
      whileInView={isMobile ? {} : { opacity: 1, y: 0, x: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: isMobile ? 0 : duration,
        delay: isMobile ? 0 : delay,
        ease: "easeOut",
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};
