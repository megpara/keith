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
          className="fixed bottom-[0px] left-[30px] w-[80px] h-[80px] z-10"
          viewBox="0 0 60 60"
        >
          <motion.path
            fill="none"
            strokeWidth="2"
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
            className="text-[5.5px] uppercase tracking-[0.35em] fill-[#bab0b0]"
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
          className="fixed text-[#bab0b0] text-xl hover:text-2xl duration-300 bottom-0 left-[50%] w-[40px] ml-[-20px] bottom-[40px] text-center"
        >
          ↑
        </button>
      )}
    </>
  );
};
