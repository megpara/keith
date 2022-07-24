import Head from "next/head";
import "@splidejs/react-splide/css";

export default function Layout({ children }) {
  return (
    <div style={{ width: "100%", height: "100%" }}>
      <Head>
        <title>Ellis Custom Homes</title>
        <meta name="description" content="Ellis Custom Homes" />
        <link rel="icon" href="/favicon.png" />
        <link rel="stylesheet" href="https://use.typekit.net/vns6pru.css" />
      </Head>
      {children}
    </div>
  );
}
