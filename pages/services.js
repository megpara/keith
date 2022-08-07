import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
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
      <div className="relative h-[75vh] w-full">
        <Image
          className="brightness-75"
          src="/Houston-1_25.jpeg"
          layout="fill"
          objectFit="cover"
          priority
        />
        <ImageBorderSmall />
      </div>
      <Title>Services</Title>
      <div className="grid lg:grid-cols-2 lg:gap-48 gap-24 px-4 py-28">
        <div className="flex flex-col justify-center lg:items-end items-center">
          <img
            className="brightness-95 w-3/4 object-cover object-right"
            src="36442FSalzer.jpg"
          />
        </div>
        <div className="flex flex-col justify-center">
          <div className="flex lg:mr-36 lg:ml-0 mx-4">
            <div className="text-xs uppercase tracking-[0.4em] w-fit text-right text-[#8a8181]">
              01
            </div>
            <div className="w-full">
              <div className="title paragraphTitle">Design</div>
              <div className="paragraph pb-4">
                Ellis Custom Homes handles design with artistry and care,
                anticipating the unique needs of each client. All projects
                include in-depth client communication as well as high quality
                documentation.
              </div>
              <Link href="/gallery">
                <div className="text-xs underline underline-offset-4 decoration-[0.5px]">
                  View projects
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:border-none border-t-[0.1px] mx-12" />
      <div className="grid lg:grid-cols-2 lg:gap-48 gap-24 px-4 py-28">
        <div className="flex flex-col justify-center">
          <div className="flex lg:ml-36 lg:mr-0 mx-4">
            <div className="text-xs uppercase tracking-[0.4em] w-fit text-[#8a8181]">
              02
            </div>
            <div className="w-full">
              <div className="title paragraphTitle">Construction</div>
              <div className="paragraph pb-4">
                Building a home is no small feat. Ellis Custom Homes ensures
                that each project is completed with the finest materials and
                acute attention to the principles of architecture and design.
              </div>
              <Link href="/gallery">
                <div className="text-xs underline underline-offset-4 decoration-[0.5px]">
                  View projects
                </div>
              </Link>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center">
          <img
            className="brightness-95 w-full object-contain"
            src="Rural-8_Gallery-035.jpeg"
          />
        </div>
      </div>
      <div className="lg:border-none border-t-[0.1px] mx-12" />
      <div className="grid lg:grid-cols-2 lg:gap-48 gap-24 px-4 py-28">
        <div className="flex flex-col justify-center lg:items-end items-center">
          <img
            className="brightness-95 w-5/6 object-cover"
            src="ECH2015TR_004.jpg"
          />
        </div>
        <div className="flex flex-col justify-center">
          <div className="flex lg:mr-36 lg:ml-0 mx-4">
            <div className="text-xs uppercase tracking-[0.4em] w-fit text-right text-[#8a8181]">
              03
            </div>
            <div className="w-full">
              <div className="title paragraphTitle">Remodeling</div>
              <div className="paragraph pb-4">
                Ellis Custom Homes has elevated existing homes for a multitude
                of clients with the utmost respect for budget and timeline.
              </div>
              <Link href="/gallery">
                <div className="text-xs underline underline-offset-4 decoration-[0.5px]">
                  View projects
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </Layout>
  );
}
