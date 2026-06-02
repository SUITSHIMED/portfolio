// --- 3. TYPEWRITER COMPONENT ---
import { useRef } from "react";
import { motion, useInView } from 'framer-motion';
const TypewriterText = ({ text, delay = 0 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  const sentence = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: { delayChildren: delay, staggerChildren: 0.02 },
    },
  };

  const letter = {
    hidden: { opacity: 0, display: "none" },
    visible: { opacity: 1, display: "inline" },
  };

  return (
    <motion.span ref={ref} variants={sentence} initial="hidden" animate={isInView ? "visible" : "hidden"} className="font-mono">
      {text.split("").map((char, index) => (
        <motion.span key={index} variants={letter}>{char}</motion.span>
      ))}
      <motion.span animate={{ opacity: [0, 1, 0] }} transition={{ repeat: Infinity, duration: 0.8 }} className="inline-block w-2 h-4 ml-1 bg-blue-500 align-middle" />
    </motion.span>
  );
};
export default TypewriterText;