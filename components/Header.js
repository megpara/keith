import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import Menu from "./Menu";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="absolute w-full z-10">
      <div className="md:m-10 m-8 flex">
        <div className="basis-1/2 title md:text-5xl text-4xl text-white">
          <Link href="/">EH</Link>
        </div>
        <div className="basis-1/2 flex flex-col items-end"></div>
        <Menu open={menuOpen} toggle={toggleMenu} />
        {!menuOpen && (
          <AnimatePresence>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ ease: "easeIn", duration: "1" }}
            >
              <button onClick={() => setMenuOpen(!menuOpen)}>
                <div className="group flex flex-col justify-between h-[25px] w-[35px] items-end">
                  <span className="h-[2px] w-full bg-white" />
                  <span className="h-[2px] w-[60%] group-hover:w-full duration-700 bg-white" />
                  <span className="h-[2px] w-[80%] group-hover:w-full duration-700 bg-white" />
                </div>
              </button>
            </motion.div>
          </AnimatePresence>
        )}
      </div>
    </div>
  );
}
