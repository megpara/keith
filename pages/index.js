import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import SecondaryButton from "../components/ButtonSecondary";
import { CircleIndicator } from "../components/CircleScroll";
import Footer from "../components/Footer";
import Header from "../components/Header";
import ImageBorder from "../components/ImageBorder";
import ImageBorderSmall from "../components/ImageBorderSmall";
import Layout from "../components/Layout";
import styles from "../styles/Home.module.css";

export const images = ["Houston-1_12.jpeg"];

export default function Home() {
  return (
    <Layout>
      <Header />
      <div className="md:visible invisible">
        <CircleIndicator />
      </div>
      <div className="relative h-screen">
        <img
          className="brightness-75 h-screen w-full object-cover"
          src="Davis.jpeg"
        />
        <ImageBorder />
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ ease: "easeIn", duration: "1" }}
          >
            <div className="absolute flex top-0 left-0 w-full h-full flex-col justify-center text-center">
              <div className="tertiaryColor font-bold md:text-base text-sm uppercase tracking-widest">
                Est 1990
              </div>
              <div className="title primaryTitle">Ellis Custom Homes</div>
              <div className="preTitle !text-white">
                Quality construction | Exceptional service
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ ease: "easeIn", duration: "1" }}
        >
          <div className={styles.pBackground}>
            <div className="md:px-36 md:py-48 px-8 py-16">
              <div className="preTitle">Premium Custom</div>
              <div className="title paragraphTitle sm:!text-7xl">
                Homebuilding
              </div>
              <div className="paragraph">
                Ellis Custom Homes is a highly skilled team of individuals with
                almost 30 years of excellence in our field. Each of our custom
                homes is constructed with spectacular attention to detail and
                one-of-a-kind workmanship.
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
      <div className="relative h-[100vh]">
        <img
          className="brightness-75 h-[100vh] w-full object-cover"
          src="Houston-1_12.jpeg"
        />
        {/* <div
          className="bg-[#544953] z-10 text-white absolute right-0 top-[50%] h-[70px] w-[50px] mt-[-35px] flex items-center justify-center text-2xl opacity-90"
          onClick={() => paginate(1)}
        >
          <div>{"???"}</div>
        </div>
        <div
          className="bg-[#544953] z-10 text-white absolute top-[50%] h-[70px] w-[50px] mt-[-35px] flex items-center justify-center text-2xl opacity-90"
          onClick={() => paginate(1)}
        >
          <div>{"???"}</div>
        </div> */}
        <ImageBorder />
        <div className="absolute h-full w-full top-0 flex flex-col justify-center items-center">
          <SecondaryButton>
            <Link href="/gallery">Featured Projects</Link>
          </SecondaryButton>
        </div>
      </div>
      <Footer />
    </Layout>
  );
}
