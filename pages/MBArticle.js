import Image from "next/image";
import { CircleIndicator } from "../components/CircleScroll";
import Footer from "../components/Footer";
import Header from "../components/Header";
import ImageBorderSmall from "../components/ImageBorderSmall";
import Layout from "../components/Layout";
import Paragraph from "../components/Paragraph";
import Title from "../components/Title";

const images = [
  "MBPage1.png",
  "MBPage2.png",
  "MBPage3.png",
  "MBPage4.png",
  "MBPage5.png",
];

export default function MBArticle() {
  return (
    <Layout>
      <Header />
      <div className="md:visible invisible">
        <CircleIndicator />
      </div>
      <div className="relative h-[75vh] w-full">
        <Image
          className="brightness-75"
          src="/Indian-Lakes-1_backyard-1.jpeg"
          layout="fill"
          objectFit="cover"
          objectPosition="top"
          priority
        />
        <ImageBorderSmall />
      </div>
      <Title>Accolades</Title>
      <div className="p-8">
        <div className="grid md:grid-cols-2 grid-cols-1 gap-4 mr-4 ml-4">
          {images.map((image) => (
            <img src={image} />
          ))}
        </div>
      </div>
      <Footer />
    </Layout>
  );
}
