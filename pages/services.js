import { AnimatePresence, motion } from "framer-motion";
import Footer from "../components/Footer";
import Header from "../components/Header";
import ImageBorderSmall from "../components/ImageBorderSmall";
import Layout from "../components/Layout";
import Title from "../components/Title";

export default function Services() {
  return (
    <Layout>
      <Header />
      <div className="relative h-[75vh]">
        <img
          className="brightness-75 h-[75vh] w-full object-cover"
          src="Houston-1_25.jpeg"
        />
        <ImageBorderSmall />
      </div>
      <Title>Services</Title>
      <div className="grid grid-cols-2 gap-48 mx-4 mt-28 h-[100vh]">
        <div className="flex flex-col justify-center">
          <img
            className="w-3/4 object-cover object-right brightness-75"
            src="36442FSalzer.jpg"
          />
        </div>
        <div className="flex flex-col justify-center">
          <div className="flex">
            <div className="text-[9px] uppercase tracking-[0.4em] w-fit text-right">
              01
            </div>
            <div className="w-full">
              <div className="title paragraphTitle">Design</div>
              <div className="paragraph">Stuff about design</div>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-48 mx-4 h-[100vh]">
        <div className="flex flex-col justify-center">
          <div className="flex ml-36">
            <div className="text-[9px] uppercase tracking-[0.4em] w-fit">
              02
            </div>
            <div className="w-full">
              <div className="title paragraphTitle">Construction</div>
              <div className="paragraph">Stuff about construction</div>
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
      <div className="grid grid-cols-2 gap-4 mx-36 h-[100vh]">
        <div className="flex flex-col justify-center">
          <img
            className="object-contain brightness-75"
            src="ECH2015TR_004.jpg"
          />
        </div>
        <div className="flex flex-col justify-center">
          <div className="flex">
            <div className="text-[9px] uppercase tracking-[0.4em] w-full text-right">
              03
            </div>
            <div className="w-full">
              <div className="title paragraphTitle">Remodeling</div>
              <div className="paragraph">Stuff about remodeling</div>
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
          <Title>
            <div className="!text-5xl group-hover:!text-[#8a8181]">Design</div>
          </Title>
        </div>
        <div className="grid grid-rows-2 gap-4">
          <div className="relative group">
            <img
              className="h-full object-cover brightness-75 group-hover:invisible"
              src="Rural-8_Gallery-035.jpeg"
            />
            <Title>
              <div className="!text-5xl group-hover:!text-[#8a8181]">
                Construction
              </div>
            </Title>
            <div className="absolute bottom-[25%] paragraph invisible group-hover:visible">
              Hello I'm a paragraph
            </div>
          </div>
          <div className="relative group">
            <img
              className="h-full object-cover brightness-75 group-hover:invisible"
              src="ECH2015TR_004.jpg"
            />
            <Title>
              <div className="!text-5xl group-hover:!text-[#8a8181]">
                Remodeling
              </div>
            </Title>
          </div>
        </div>
      </div> */}
      <Footer />
    </Layout>
  );
}
