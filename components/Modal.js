import { AnimatePresence, motion } from "framer-motion";

export default function Modal({ open, closeModal, children }) {
  const overlayVariants = {
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        duration: 0.3,
        delayChildren: 0.4,
      },
    },
    hidden: {
      opacity: 0,
      transition: {
        when: "afterChildren",
        duration: 0.3,
        delay: 0.4,
      },
    },
  };
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={overlayVariants}
          className="fixed top-0 right-0 left-0 bottom-0 flex bg-[#0000001a] items-center justify-center z-10"
        >
          <div
            className="absolute w-full h-full top-0"
            onClick={closeModal}
          ></div>
          <motion.div
            className="md:w-1/2 w-4/5 bg-white rounded p-12"
            initial={{ y: "100vh", opacity: 1 }}
            animate={{ y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <button
              className="primaryColor absolute md:right-8 md:top-8 right-4 top-4 text-[9px] uppercase tracking-[0.4em] hover:tracking-[0.7em] duration-700"
              onClick={closeModal}
            >
              close
            </button>
            {children}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
