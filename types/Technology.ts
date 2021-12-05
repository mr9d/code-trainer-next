import { Question } from "./Question";

export type Technology = {
  code: string;
  name: string;
  questions: Question[];
};
