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
          <section className={styles["page__footer-top"]}>
            <div className={styles.centered}><a href="https://github.com/mr9d/code-trainer-next" rel="noreferrer" target="_blank">Исходный код (GitHub)</a></div>
          </section>
          <section className={styles["page__footer-bottom"]}>
            <div className={`${styles.centered} ${styles.columns}`}>
              <div>&copy;2021,</div>
              <div>
                <p>Разработка &mdash; <a href="https://github.com/mr9d" rel="noreferrer" target="_blank">Александр Козлов</a></p>
                <p>Идея &mdash; <a href="https://github.com/kiberlain" rel="noreferrer" target="_blank">Андрей Курницкий</a></p>
              </div>
            </div>
          </section>
        </footer>
      </div>
    );
  };
}
