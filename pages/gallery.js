import Footer from "../components/Footer";
import Header from "../components/Header";
import ImageBorderSmall from "../components/ImageBorderSmall";
import Layout from "../components/Layout";
import Title from "../components/Title";

export default function Gallery() {
  return (
    <Layout>
      <Header />
      <div className="relative h-[75vh]">
        <img
          className="brightness-75 h-[75vh] w-full object-cover object-bottom"
          src="FrontElevationPhoto.jpeg"
        />
        <ImageBorderSmall />
      </div>
      <Title>Gallery</Title>
      <Footer />
    </Layout>
  );
}
