import Head from "next/head";

export default function Layout(props) {
  return (
    <div className="bintang-samudro">
      <Head>
        <title>Bintang Samudro | Portofolio</title>
        <link rel="icon" href="/images/bintang-small-light.svg" />
      </Head>
      {props.children}
    </div>
  );
}