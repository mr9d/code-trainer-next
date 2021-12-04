import { Component } from "react";
import styles from "../styles/Layout.module.css";

export class Layout extends Component {
  public render = () => {
    return (
      <div className={styles.page}>
        <header className={styles.page__header}>
          <div className={styles.centered}>
            <h1>CodeTrainer</h1>
          </div>
        </header>
        <main className={styles.page__main}>
          <div className={styles.centered}>{this.props.children}</div>
        </main>
        <footer className={styles.page__footer}>
          <section className={styles.footer__top}>
            <div className={styles.centered}>Work in progress</div>
          </section>
          <section className={styles.footer__bottom}>
            <div className={styles.centered}>&copy;2021, Alexander Kozlov</div>
          </section>
        </footer>
      </div>
    );
  };
}
