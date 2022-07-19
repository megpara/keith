import SecondaryButton from "../components/ButtonSecondary";
import { CircleIndicator } from "../components/CircleScroll";
import Footer from "../components/Footer";
import Header from "../components/Header";
import ImageBorderSmall from "../components/ImageBorderSmall";
import Layout from "../components/Layout";
import Paragraph from "../components/Paragraph";
import Title from "../components/Title";
import Contentful from "../libs/contentful";

export default function Gallery({ images }) {
  return (
    <Layout>
      <Header />
      <div className="md:visible invisible">
        <CircleIndicator />
      </div>
      <div className="relative h-[75vh]">
        <img
          className="brightness-75 h-[75vh] w-full object-cover object-bottom"
          src="FrontElevationPhoto.jpeg"
        />
        <ImageBorderSmall />
      </div>
      <Title>Gallery</Title>
      <Paragraph>
        <div className="title paragraphTitle">
          Explore some of our favorite projects
        </div>
        <div className="paragraph">
          Our company specializes in quality custom home building and
          craftsmanship. Each project is completed with first-class materials,
          proven methods of construction, and attention to detail.
        </div>
      </Paragraph>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 mr-4 ml-4">
        {images.map((image) => (
          <div key={image.url} className="relative">
            {/* <div>{image.room}</div> */}
            <img src={image.url} className="brightness-75" />
            <div className="absolute h-full w-full top-0 flex flex-col justify-center items-center">
              <SecondaryButton>
                <div>{image.project}</div>
              </SecondaryButton>
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </Layout>
  );
}

export async function getStaticProps(context) {
  const contentful = new Contentful();
  const images = await contentful.getAllImages();
  return { props: { images } };
}
