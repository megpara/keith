import Footer from "../components/Footer";
import Header from "../components/Header";
import ImageBorderSmall from "../components/ImageBorderSmall";
import Layout from "../components/Layout";
import Paragraph from "../components/Paragraph";
import Title from "../components/Title";

export default function Company() {
  return (
    <Layout>
      <Header />
      <div className="relative h-[75vh]">
        <img
          className="brightness-75 h-[75vh] w-full object-cover"
          src="WhistlingStraitsliving1.jpg"
        />
        <ImageBorderSmall />
      </div>
      <Title>Company</Title>
      <Paragraph>
        <div className="title paragraphTitle">
          Building exquisite custom homes for almost 30 years
        </div>
        <div className="paragraph pb-8">
          Some of the finest homes in the Brazos Valley exist because of the
          vision of Ellis Custom Homes founder and College Station native, Keith
          Ellis. In 1990, Keith started the company now known for its quality
          construction and exceptional service. After five years serving in
          Houston, Keith brought the company back to his hometown, where he has
          quickly gained a reputation for quality custom construction. With over
          30 years of experience, Keith Ellis provides in-depth knowledge and
          expertise to each custom home he crafts.
        </div>
        <div className="paragraph">
          Over the years, Keith has attracted a team of exceptionally talented
          individuals that share his dedication to quality and excellence. The
          company has constructed an impressive range of homes throughout Bryan
          College Station and Houston.
        </div>
      </Paragraph>
      <div className="relative h-[75vh]">
        <img
          className="brightness-95 h-[75vh] w-full object-cover object-bottom"
          src="VonieffEveningExterior.jpg"
        />
        <ImageBorderSmall />
      </div>
      <Footer />
    </Layout>
  );
}
