// --- 2. CUSTOM CURSOR COMPONENT ---
import { useEffect } from "react";
import { motion, useSpring, useMotionValue } from 'framer-motion';
const CustomCursor = () => {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const springConfig = { damping: 25, stiffness: 250 };
  const smoothedX = useSpring(cursorX, springConfig);
  const smoothedY = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };
    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, [cursorX, cursorY]);

  return (
    <motion.div
      className="fixed top-0 left-0 w-8 h-8 pointer-events-none z-[9999] hidden md:flex items-center justify-center"
      style={{ x: smoothedX, y: smoothedY, translateX: "-50%", translateY: "-50%" }}
    >
      <div className="absolute inset-0 border border-blue-500/30 rounded-full"></div>
      <div className="w-1 h-1 bg-blue-500 rounded-full shadow-[0_0_8px_#3b82f6]"></div>
      <div className="absolute top-0 w-[1px] h-2 bg-blue-500"></div>
      <div className="absolute bottom-0 w-[1px] h-2 bg-blue-500"></div>
      <div className="absolute left-0 w-2 h-[1px] bg-blue-500"></div>
      <div className="absolute right-0 w-2 h-[1px] bg-blue-500"></div>
    </motion.div>
  );
};
export default CustomCursor;