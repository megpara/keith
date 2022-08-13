import Head from "next/head";

export default function Layout({ children }) {
  return (
    <div style={{ width: "100%", height: "100%" }}>
      <Head>
        <title>Ellis Custom Homes</title>
        <meta name="description" content="Ellis Custom Homes" />
        <meta
          property="og:title"
          content="Ellis Custom Homes | Premium Custom Homebuilding | TX"
          key="ogtitle"
        />
        <meta property="og:image" content="/Davis.jpeg" />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon.ico.png"
        />
        <link rel="stylesheet" href="https://use.typekit.net/vns6pru.css" />
      </Head>
      {children}
    </div>
  );
}
