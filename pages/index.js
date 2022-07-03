import SecondaryButton from "../components/ButtonSecondary";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Layout from "../components/Layout";
import Paragraph from "../components/Paragraph";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <Layout>
      <Header />
      <div className="relative">
        <img className="brightness-90" src="miramont-8_pool.jpeg" />
        <div className="absolute flex top-0 left-0 w-full h-full flex-col justify-center text-center">
          <div className="secondaryColor font-bold text-lg">Est 1990</div>
          <div className="title primaryTitle">Ellis Custom Homes</div>
          <div className="text-white text-2xl font-thin">
            Quality construction. Exceptional service.
          </div>
        </div>
      </div>
      <Paragraph>
        <div className="title secondaryColor secondaryTitle">
          Premium Custom Homebuilding
        </div>
        <div className="paragraph">
          Ellis Custom Homes is a highly skilled team of individuals with almost
          30 years of excellence in our field. Each of our custom homes is
          constructed with spectacular attention to detail and one-of-a-kind
          workmanship.
        </div>
      </Paragraph>
      <div className="relative">
        <img className="brightness-75" src="Houston-1_12.jpeg" />
        <div className="absolute h-full w-full top-0 flex flex-col justify-center items-center">
          <SecondaryButton title="Featured Projects" />
        </div>
      </div>
      <Footer />
    </Layout>
  );
}
