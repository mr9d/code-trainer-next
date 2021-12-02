import type { NextPage } from 'next';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { Challenge } from '../components/Challenge';

const Home: NextPage = () => {

  return (
    <div className={styles.container}>
      <Head>
        <title>Code trainer</title>
        <meta name="description" content="Code trainer application" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Code trainer
        </h1>
        <Challenge />
      </main>

      <footer className={styles.footer}>
        WIP
      </footer>
    </div>
  );
};

export default Home;
