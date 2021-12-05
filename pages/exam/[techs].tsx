// import type { NextPage } from "next";
import { Component } from "react";
import { NextRouter, withRouter } from "next/router";

// import styles from "../styles/Home.module.css";

interface ExamPageProps {
  router: NextRouter,
}

class ExamPage extends Component<ExamPageProps> {
  public static getInitialProps = async () => {
    return {};
  };

  public render = () => {
    return (
      <>
        <p>Проверка</p>
        {this.props.router.query.techs}
      </>
    );
  };
}

export default withRouter(ExamPage);
