import { motion } from "framer-motion";

const LiquidBackground = () => (
  <div>
    <motion.div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[var(--color-blue-bg)] rounded-full blur-[120px]" />
    <motion.div className="absolute bottom-0 right-0 w-[600px] h-[600px]  bg-[var(--color-purple-bg)] rounded-full blur-[120px]" />
  </div>
);

export default LiquidBackground;
