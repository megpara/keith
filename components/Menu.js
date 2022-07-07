import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";

export default function Menu({ open, toggle }) {
  return (
    <AnimatePresence>
      {open && (
        <motion.aside
          initial={{ width: 0, opacity: 0 }}
          animate={{
            width: "100%",
            opacity: 1,
            transition: { duration: 0.5 },
          }}
          exit={{
            width: 0,
            opacity: 0,
            transition: { duration: 1 },
          }}
        >
          <div className="bg-[#f8f7f6] fixed top-0 w-[50%] h-screen opacity-95">
            <AnimatePresence>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ ease: "easeIn", duration: "2" }}
              >
                <button
                  className="primaryColor absolute right-0 md:mt-10 md:mr-8 mt-8 mr-8 text-2xl font-thin"
                  onClick={toggle}
                >
                  X
                </button>
              </motion.div>
            </AnimatePresence>
            <div className="flex flex-col h-full w-[90%] justify-center">
              <AnimatePresence>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ ease: "easeIn", duration: "2" }}
                >
                  <div className="title primaryTitle primaryColor text-right flex flex-col justify-evenly">
                    <Link href="/">
                      <div className="cursor-pointer hover:after:content-['-']">
                        Gallery
                      </div>
                    </Link>
                    <Link href="/">
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
              </AnimatePresence>
            </div>
          </div>
        </motion.aside>
      )}
    </AnimatePresence>
  );
}
