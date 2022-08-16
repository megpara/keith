import Image from "next/image";
import Link from "next/link";
import { CircleIndicator } from "../components/CircleScroll";
import Footer from "../components/Footer";
import Header from "../components/Header";
import ImageBorder from "../components/ImageBorder";
import ImageBorderSmall from "../components/ImageBorderSmall";
import Layout from "../components/Layout";
import Paragraph from "../components/Paragraph";
import Title from "../components/Title";

const quotes = [
  {
    text: "“Keith Ellis and his company ‘family’ were a pleasure to work with in every aspect of the home building process. From the relationship with our architect, to the materials selection process, to the unique creativity and attention to detail, the process was quite effortless for us and the end result is a stunning and magnificent home.”",
    name: "The Batchelders, customers",
  },
  {
    text: "“I recently worked with Project Manager, Andrew Colson, to install a custom motorized shade system for their project in Boerne, TX. Andrew was helpful in making selections and working with us and the client to select the right product to mitigate the sun/heat/glare/insects for a large sliding door system in the home. The high-quality design and craftsmanship of the custom home called for a totally custom product to provide further functionality for the focal door system.”",
    name: "Texas Sun & Shade, subcontractor",
  },
  {
    text: "“What a week we recently experienced. We were mostly without power for two days until we got our generator working again (bad battery). Yet we had no frozen pipes, no damage to our tankless water heaters, an inside temperature that did not plummet, etc. Bill and I are so grateful for the planning and construction of our home that brought last week’s results. You two and the myriad of workers around you are the greatest. Thank you.”",
    name: "Marilyn Byrne, customer",
  },
];

export default function Accolades() {
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
      <Paragraph>
        <div className="preTitle !pb-24 !text-center">
          From our valued clients
        </div>
        <div className="paragraph pb-8">
          “Everyone we worked with at Ellis Custom Homes was a delight. They
          work together as a team...more as a family. Above all, Keith Ellis, is
          a man of great integrity whom I admire and have the utmost trust in. I
          know that he will stand by whatever he says.”
        </div>
        <div className="title paragraphTitle">Susan McElroy, Customer</div>
      </Paragraph>
      <div className="relative h-[100vh] w-full">
        <Image
          className="brightness-[0.65]"
          src="/ECH2015TR_025.jpg"
          layout="fill"
          objectFit="cover"
        />
        <ImageBorder />
        <div className="absolute flex top-0 left-0 w-full h-full flex-col justify-center text-center text-white">
          <div className="p-4">
            <div className="title paragraphTitle !text-white">
              "We are beyond pleased with our new home."
            </div>
            <div className="md:text-sm text-[12px] uppercase tracking-[0.4em] text-center">
              Carrie & Sue Ellen Bass, Customers
            </div>
          </div>
        </div>
      </div>
      <Paragraph>
        {quotes.map((quote) => (
          <div className="pb-8" key={quote.name}>
            <div className="paragraph pb-8">{quote.text}</div>
            <div className="title paragraphTitle">{quote.name}</div>
          </div>
        ))}
      </Paragraph>
      <div className="relative w-full flex flex-col items-center justify-center">
        <div className="md:w-1/2 w-11/12 h-full">
          <img src="/dubose.jpg" />
          <div className="preTitle py-4">
            Ellis Custom Homes: Known for Custom Detailing
          </div>
          <div className="paragraph pb-4">The Metropolitan Builder</div>
          <Link href="MBArticle">
            <div className="text-xs underline underline-offset-4 decoration-[0.5px] cursor-pointer">
              Read the article
            </div>
          </Link>
          <img className="pt-28" src="/nahb.png" />
          <div className="paragraph pb-4">20 Clubs Member</div>
          <div className="text-xs underline underline-offset-4 decoration-[0.5px] cursor-pointer">
            <a
              href="https://nahbclassic.org/page.aspx/category/sectionID=607"
              about="_blank"
            >
              More info
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </Layout>
  );
}
