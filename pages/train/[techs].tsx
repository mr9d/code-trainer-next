import { ChangeEvent, Component, FormEvent } from "react";
import { NextRouter, withRouter } from "next/router";
import { technologiesMap } from "../../data";
import { Technology } from "../../types/Technology";
import { Question } from "../../types/Question";
import { Timer } from "../../components/Timer";

interface TrainPageProps {
  router: NextRouter;
}

interface TrainPageState {
  technologies: Technology[];
  questionsLimit: number;
  questionsCount: number;
  questions: Question[];
  questionCurrent: number;
  started: boolean;
  finished: boolean;
  answer: string;
}

class TrainPage extends Component<TrainPageProps, TrainPageState> {
  constructor(props: TrainPageProps) {
    super(props);
    let technologies: Technology[] = [];
    if (this.props.router.query.techs !== undefined) {
      technologies = (this.props.router.query.techs as string)
        .split(",")
        .filter((tech: string) => technologiesMap[tech] !== undefined)
        .map((tech: string) => technologiesMap[tech]);
    }
    const questionsLimit: number = technologies
      .map((technology: Technology) => technologiesMap[technology.code].questions.length)
      .reduce((a: number, b: number) => a + b, 0);
    const questionsCount: number = Math.floor(questionsLimit / 2);
    this.state = {
      technologies,
      questionsLimit,
      questionsCount,
      questions: [],
      questionCurrent: 0,
      started: false,
      finished: false,
      answer: "",
    };
  }

  public static getInitialProps = async () => {
    return {};
  };

  private questionsCountChange = (evt: ChangeEvent<HTMLInputElement>) => {
    const questionsCount: number = +evt.target.value;
    this.setState({ questionsCount });
  };

  private shuffle(array: unknown[]) {
    let currentIndex = array.length,
      randomIndex;
    while (currentIndex != 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
    }

    return array;
  }

  private startButtonClick = () => {
    const questions: Question[] = this.state.technologies.reduce((agg: Question[], technology: Technology) => {
      return agg.concat(technologiesMap[technology.code].questions);
    }, []);
    this.shuffle(questions);
    this.setState({
      started: true,
      finished: false,
      questions: questions.slice(0, this.state.questionsCount),
      questionCurrent: 0,
    });
  };

  private finishButtonClick = () => {
    this.setState({ started: true, finished: true });
  };

  private answerInputChange = (evt: ChangeEvent<HTMLInputElement>) => {
    const answer: string = evt.target.value;
    this.setState({ answer });
  };

  private nextQuestionOrFinish = () => {
    if (this.state.questionCurrent === this.state.questionsCount - 1) {
      this.setState({
        started: true,
        finished: true,
        answer: "",
      });
    } else {
      this.setState({
        questionCurrent: this.state.questionCurrent + 1,
        answer: "",
      });
    }
  }

  private answerFormSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    if (this.state.answer !== this.state.questions[this.state.questionCurrent].answer) {
      alert("Ответ неверный");
    } else {
      this.nextQuestionOrFinish();
    }
  };

  private restartButtonClick = () => {
    this.setState({
      started: false,
      finished: false,
      answer: "",
    });
  };

  private homeButtonClick = () => {
    this.props.router.push("/");
  };

  private timerFinished = () => {
    alert("Время вышло");
    this.nextQuestionOrFinish();
  };

  public render = () => {
    if (this.state.technologies.length === 0) {
      return <>Технологии не выбраны</>;
    }
    if (this.state.started === false && this.state.finished === false) {
      return (
        <>
          <p>Тренировка</p>
          <p>
            Выбранные технологии: {this.state.technologies.map((technology: Technology) => technology.name).join(", ")}
          </p>
          <p>Всего вопросов: {this.state.questionsLimit}</p>
          <p>
            Количество для тренировки:{" "}
            <input
              type="number"
              max={this.state.questionsLimit}
              value={this.state.questionsCount}
              min={1}
              onChange={this.questionsCountChange}
            />
          </p>
          <button onClick={this.startButtonClick}>Начать</button>
          <button onClick={this.homeButtonClick}>К выбору технологий</button>
        </>
      );
    }
    if (this.state.started === true && this.state.finished === false) {
      const question: Question = this.state.questions[this.state.questionCurrent];
      return (
        <>
          <p>
            Вопрос {this.state.questionCurrent + 1}/{this.state.questionsCount}
          </p>
          <p>Секунд осталось: <Timer key={this.state.questionCurrent} initialValue={20} started onFinish={this.timerFinished} /></p>
          <p>{question.text}</p>
          <p>Ответ: {question.answer}</p>
          <form onSubmit={this.answerFormSubmit}>
            <input type="text" value={this.state.answer} onChange={this.answerInputChange} />
            <p>Введите ответ и нажмите Enter</p>
          </form>
          <button onClick={this.finishButtonClick}>Завершить</button>
        </>
      );
    }
    if (this.state.finished === true) {
      return (
        <>
          <p>Тренировка окончена</p>
          <button onClick={this.restartButtonClick}>Начать заново</button>
          <button onClick={this.homeButtonClick}>К выбору технологий</button>
        </>
      );
    }
  };
}

export default withRouter(TrainPage);
