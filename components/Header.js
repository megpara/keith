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
    <div>
      <div className="absolute md:m-10 m-8 z-10 title md:text-5xl text-4xl text-white">
        <Link href="/">EH</Link>
      </div>
      {!menuOpen && (
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ ease: "easeIn", duration: "1" }}
            className="absolute top-0 z-10 right-0 md:m-10 m-8"
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
      <Menu open={menuOpen} toggle={toggleMenu} />
    </div>
  );
}
