import { useEffect, useState } from "react";
import {
  motion,
  useViewportScroll,
  useSpring,
  useTransform,
} from "framer-motion";

export const CircleIndicator = () => {
  const [isComplete, setIsComplete] = useState(false);
  const { scrollYProgress } = useViewportScroll();
  const yRange = useTransform(scrollYProgress, [0, 0.9], [0, 1]);
  const pathLength = useSpring(yRange, { stiffness: 400, damping: 90 });

  useEffect(() => yRange.onChange((v) => setIsComplete(v >= 1)), [yRange]);

  return (
    <>
      {!isComplete && (
        <svg
          className="fixed bottom-[0] left-[50%] ml-[-40px] w-[80px] h-[80px] z-10"
          viewBox="0 0 60 60"
        >
          <motion.path
            fill="none"
            strokeWidth="3"
            stroke="#bab0b0"
            strokeDasharray="0 1"
            d="M 0, 20 a 20, 20 0 1,0 40,0 a 20, 20 0 1,0 -40,0"
            style={{
              pathLength,
              rotate: 90,
              translateX: 5,
              translateY: 5,
              scaleX: -1, // Reverse direction of line animation
            }}
          />
          <motion.text
            fill="white"
            strokeWidth="5"
            stroke="white"
            d="M14,26 L 22,33 L 35,16"
            initial={false}
            strokeDasharray="0 1"
            animate={{ pathLength: isComplete ? 1 : 0 }}
          />
          <text
            x="10"
            y="27"
            className="text-[7px] fill-[#bab0b0] uppercase tracking-widest font-semibold"
          >
            scroll
          </text>
        </svg>
      )}
      {isComplete && (
        <button
          onClick={() => {
            scrollTo(0, 0);
          }}
          className="fixed text-[#bab0b0] text-[10px] uppercase tracking-widest bottom-0 left-[50%] w-[120px] ml-[-60px] bottom-[40px] text-center font-semibold"
        >
          back to top
        </button>
      )}
    </>
  );
};
