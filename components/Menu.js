import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";

export default function Menu({ open, toggle }) {
  const menuWidth = () => {
    if (window.innerWidth < 640) {
      return "100%";
    } else {
      return "50%";
    }
  };
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ width: "0%", opacity: 0 }}
          animate={{
            width: menuWidth(),
            opacity: 1,
            transition: { duration: 1 },
          }}
          exit={{
            width: "0%",
            opacity: 0,
            transition: { duration: 1 },
          }}
          className="fixed top-0 right-0 z-10"
          id="menu-container"
        >
          <div className="bg-[#f8f7f6] fixed top-0 md:w-1/2 w-full h-screen opacity-95">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ ease: "easeIn", duration: "2" }}
            >
              <button
                className="primaryColor absolute right-0 md:mt-10 md:mr-8 mt-8 mr-8 text-[9px] uppercase tracking-[0.4em] hover:tracking-[0.7em] duration-700"
                onClick={toggle}
              >
                close
              </button>
            </motion.div>
            <div className="flex flex-col h-full w-[90%] justify-center">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ ease: "easeIn", duration: "2" }}
              >
                <div className="title primaryTitle primaryColor text-right flex flex-col justify-evenly">
                  <Link href="/gallery">
                    <div className="cursor-pointer hover:after:content-['-']">
                      Gallery
                    </div>
                  </Link>
                  <Link href="/services">
                    <div className="cursor-pointer hover:after:content-['-']">
                      Services
                    </div>
                  </Link>
                  <Link href="/company">
                    <div className="cursor-pointer hover:after:content-['-']">
                      Company
                    </div>
                  </Link>
                  <Link href="/team">
                    <div className="cursor-pointer hover:after:content-['-']">
                      Team
                    </div>
                  </Link>
                  <Link href="/accolades">
                    <div className="cursor-pointer hover:after:content-['-']">
                      Accolades
                    </div>
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
