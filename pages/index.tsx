// import type { NextPage } from "next";
import { technologies } from "../data";
import { Technology } from "../types/Technology";
import { Component } from "react";
import { NextRouter, withRouter } from "next/router";

import styles from "../styles/HomePage.module.css";

type HomePageProps = {
  router: NextRouter;
};

type HomePageState = {
  techs: string[];
};

class HomePage extends Component<HomePageProps, HomePageState> {
  constructor(props: HomePageProps) {
    super(props);
    this.state = {
      techs: [],
    };
  }

  public static getInitialProps = async () => {
    return {};
  };

  private techCheckboxClick = (tech: string) => {
    const checked: boolean = this.state.techs.includes(tech);
    if (checked) {
      this.setState({ techs: this.state.techs.filter((existed: string) => existed !== tech) });
    } else {
      this.setState({ techs: [...this.state.techs, tech] });
    }
  };

  private trainButtonClick = () => {
    const url = `/train/${this.state.techs.join(",")}`;
    this.props.router.push(url);
  };

  private examButtonClick = () => {
    const url = `/exam/${this.state.techs.join(",")}`;
    this.props.router.push(url);
  };

  public render = () => {
    return (
      <>
        <p>Выберите технологию:</p>
        {technologies.map((technology: Technology) => (
          <label key={technology.code} className={styles.technology}>
            <input
              type="checkbox"
              value={technology.code}
              checked={this.state.techs.includes(technology.code)}
              onClick={this.techCheckboxClick.bind(this, technology.code)}
            />{" "}
            <span>{technology.name}</span>
          </label>
        ))}
        <button onClick={this.trainButtonClick} disabled={this.state.techs.length === 0}>
          Тренировка
        </button>
        <button onClick={this.examButtonClick} disabled={this.state.techs.length === 0}>
          Проверка
        </button>
      </>
    );
  };
}

export default withRouter(HomePage);
