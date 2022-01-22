import Head from "next/head";

export default function Layout({ children }) {
  return (
    <div style={{ width: "100%", height: "100%" }}>
      <Head>
        <title>Ellis Custom Homes</title>
        <meta name="description" content="Ellis Custom Homes" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      {children}
    </div>
  );
}
