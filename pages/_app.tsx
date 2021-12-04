import "../styles/normalize.css";
import type { AppProps } from "next/app";
import { Layout } from "../components/Layout";
import Head from 'next/head';

function CodeTrainerApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Head>
        <title>Code trainer</title>
        <meta name="description" content="Code trainer application" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
}

export default CodeTrainerApp;
