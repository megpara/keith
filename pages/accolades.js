import Footer from "../components/Footer";
import Header from "../components/Header";
import ImageBorder from "../components/ImageBorder";
import ImageBorderSmall from "../components/ImageBorderSmall";
import Layout from "../components/Layout";
import Paragraph from "../components/Paragraph";
import Title from "../components/Title";

const quotes = [
  { text: "hi", name: "susan" },
  { text: "hi", name: "susan" },
  { text: "hi", name: "susan" },
];

export default function Accolades() {
  return (
    <Layout>
      <Header />
      <div className="relative h-[75vh]">
        <img
          className="brightness-[0.65] h-[75vh] w-full object-cover"
          src="dining.jpeg"
        />
        <ImageBorderSmall />
      </div>
      <Title>Accolades</Title>
      <Paragraph>
        <div className="md:text-sm text-[7px] uppercase tracking-[0.4em] text-center pb-24">
          Love from our valued clients
        </div>
        <div className="paragraph pb-8">Quote</div>
        <div className="title paragraphTitle">Susan McElroy, Customer</div>
      </Paragraph>
      <div className="relative h-[100vh]">
        <img
          className="brightness-[0.65] h-[100vh] w-full object-cover"
          src="ECH2015TR_025.jpg"
        />
        <ImageBorder />
        <div className="absolute flex top-0 left-0 w-full h-full flex-col justify-center text-center text-white">
          <div className=" title primaryTitle">
            "We are beyond pleased with our new home."
          </div>
          <div className="md:text-sm text-[7px] uppercase tracking-[0.4em] text-center pb-24">
            Carrie & Sue Ellen Bass, Customers
          </div>
        </div>
      </div>
      <Paragraph>
        {quotes.map((quote) => (
          <>
            <div className="paragraph pb-8">{quote.text}</div>
            <div className="title paragraphTitle">{quote.name}</div>
          </>
        ))}
      </Paragraph>
      <Footer />
    </Layout>
  );
}
