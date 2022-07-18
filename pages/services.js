import { AnimatePresence, motion } from "framer-motion";
import { CircleIndicator } from "../components/CircleScroll";
import Footer from "../components/Footer";
import Header from "../components/Header";
import ImageBorderSmall from "../components/ImageBorderSmall";
import Layout from "../components/Layout";
import Title from "../components/Title";

export default function Services() {
  return (
    <Layout>
      <Header />
      <div className="md:visible invisible">
        <CircleIndicator />
      </div>
      <div className="relative h-[75vh]">
        <img
          className="brightness-75 h-[75vh] w-full object-cover"
          src="Houston-1_25.jpeg"
        />
        <ImageBorderSmall />
      </div>
      <Title>Services</Title>
      <div className="grid md:grid-cols-2 md:gap-48 gap-24 px-4 py-28">
        <div className="flex flex-col justify-center md:items-end items-center">
          <img
            className="w-3/4 object-cover object-right brightness-75"
            src="36442FSalzer.jpg"
          />
        </div>
        <div className="flex flex-col justify-center">
          <div className="flex md:mr-36 md:ml-0 mx-4">
            <div className="text-[9px] uppercase tracking-[0.4em] w-fit text-right text-[#8a8181]">
              01
            </div>
            <div className="w-full">
              <div className="title paragraphTitle">Design</div>
              <div className="paragraph paragraphSmall">
                Residential projects are where our business began 12 years ago.
                Since then, we’ve delivered to exacting requirements at some of
                the most prestigious addresses in London and the southern
                counties. We understand that when you deal with a person’s home,
                it’s different. Owners are invested in their dream both
                financially and emotionally. This journey matters. By constantly
                improving it, we’re able to minimise stress, allowing you to
                enjoy what should be one of the most exciting times in your
                life.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="md:border-none border-t-[0.1px] mx-12" />
      <div className="grid md:grid-cols-2 md:gap-48 gap-24 px-4 py-28">
        <div className="flex flex-col justify-center">
          <div className="flex md:ml-36 md:mr-0 mx-4">
            <div className="text-[9px] uppercase tracking-[0.4em] w-fit text-[#8a8181]">
              02
            </div>
            <div className="w-full">
              <div className="title paragraphTitle">Construction</div>
              <div className="paragraph paragraphSmall">
                Residential projects are where our business began 12 years ago.
                Since then, we’ve delivered to exacting requirements at some of
                the most prestigious addresses in London and the southern
                counties. We understand that when you deal with a person’s home,
                it’s different. Owners are invested in their dream both
                financially and emotionally. This journey matters. By constantly
                improving it, we’re able to minimise stress, allowing you to
                enjoy what should be one of the most exciting times in your
                life.
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center">
          <img
            className="w-full object-contain brightness-75"
            src="Rural-8_Gallery-035.jpeg"
          />
        </div>
      </div>
      <div className="md:border-none border-t-[0.1px] mx-12" />
      <div className="grid md:grid-cols-2 md:gap-48 gap-24 px-4 py-28">
        <div className="flex flex-col justify-center md:items-end items-center">
          <img
            className="w-5/6 object-cover brightness-75"
            src="ECH2015TR_004.jpg"
          />
        </div>
        <div className="flex flex-col justify-center">
          <div className="flex md:mr-36 md:ml-0 mx-4">
            <div className="text-[9px] uppercase tracking-[0.4em] w-fit text-right text-[#8a8181]">
              03
            </div>
            <div className="w-full">
              <div className="title paragraphTitle">Remodeling</div>
              <div className="paragraph paragraphSmall">
                Residential projects are where our business began 12 years ago.
                Since then, we’ve delivered to exacting requirements at some of
                the most prestigious addresses in London and the southern
                counties. We understand that when you deal with a person’s home,
                it’s different. Owners are invested in their dream both
                financially and emotionally. This journey matters. By constantly
                improving it, we’re able to minimise stress, allowing you to
                enjoy what should be one of the most exciting times in your
                life.
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="grid grid-cols-2 gap-4 p-4">
        <div className="relative group">
          <img
            className="h-full object-cover object-right brightness-75 group-hover:invisible"
            src="36442FSalzer.jpg"
          />
          <div className="absolute flex flex-col w-full h-full justify-center top-0">
            <div className="flex">
              <div className="text-[9px] uppercase tracking-[0.4em] w-fit text-[#8a8181] invisible group-hover:visible">
                01
              </div>
              <div className="w-full">
                <div className="title paragraphTitle !text-white group-hover:!text-[#8a8181]">
                  Design
                </div>
                <div className="paragraph invisible group-hover:visible">
                  Residential projects are where our business began 12 years
                  ago. Since then, we’ve delivered to exacting requirements at
                  some of the most prestigious addresses in London and the
                  southern counties. We understand that when you deal with a
                  person’s home, it’s different. Owners are invested in their
                  dream both financially and emotionally. This journey matters.
                  By constantly improving it, we’re able to minimise stress,
                  allowing you to enjoy what should be one of the most exciting
                  times in your life.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-rows-2 gap-4">
          <div className="relative group">
            <img
              className="h-full object-cover brightness-75 group-hover:invisible"
              src="Rural-8_Gallery-035.jpeg"
            />
            <div className="absolute flex flex-col w-full h-full justify-center top-0">
              <div className="flex">
                <div className="text-[9px] uppercase tracking-[0.4em] w-fit text-[#8a8181] invisible group-hover:visible">
                  02
                </div>
                <div className="w-full">
                  <div className="title paragraphTitle !text-white group-hover:!text-[#8a8181]">
                    Construction
                  </div>
                  <div className="paragraph invisible group-hover:visible">
                    Residential projects are where our business began 12 years
                    ago. Since then, we’ve delivered to exacting requirements at
                    some of the most prestigious addresses in London and the
                    southern counties. We understand that when you deal with a
                    person’s home, it’s different. Owners are invested in their
                    dream both financially and emotionally. This journey
                    matters. By constantly improving it, we’re able to minimise
                    stress, allowing you to enjoy what should be one of the most
                    exciting times in your life.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="relative group">
            <img
              className="h-full object-cover brightness-75 group-hover:invisible"
              src="ECH2015TR_004.jpg"
            />
            <div className="absolute flex flex-col w-full h-full justify-center top-0">
              <div className="flex">
                <div className="text-[9px] uppercase tracking-[0.4em] w-fit text-[#8a8181] invisible group-hover:visible">
                  03
                </div>
                <div className="w-full">
                  <div className="title paragraphTitle !text-white group-hover:!text-[#8a8181]">
                    Remodeling
                  </div>
                  <div className="paragraph invisible group-hover:visible">
                    Residential projects are where our business began 12 years
                    ago. Since then, we’ve delivered to exacting requirements at
                    some of the most prestigious addresses in London and the
                    southern counties. We understand that when you deal with a
                    person’s home, it’s different. Owners are invested in their
                    dream both financially and emotionally. This journey
                    matters. By constantly improving it, we’re able to minimise
                    stress, allowing you to enjoy what should be one of the most
                    exciting times in your life.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      <Footer />
    </Layout>
  );
}
