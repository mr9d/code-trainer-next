import "../styles/normalize.css";
import type { AppProps } from "next/app";
import { Layout } from "../components/Layout";
import Head from 'next/head';

function CodeTrainerApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Head>
        <title>CodeTrainer</title>
        <meta name="description" content="Тренажер для изучения программирования" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
}

export default CodeTrainerApp;
