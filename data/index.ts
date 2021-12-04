import { Question } from "../types/Question";
import { Technology } from "../types/Technology";

export const technologies: Technology[] = [
  {
    code: "js",
    name: "JavaScript",
  },
  {
    code: "html",
    name: "HyperText Markup Language (HTML)",
  },
  {
    code: "css",
    name: "Cascading Style Sheets (CSS)",
  },
  {
    code: "sql",
    name: "Structured Query Language (SQL)",
  },
];

export const questionsMap: Record<string, Question[]> = technologies.reduce(
  (agg: Record<string, Question[]>, current: Technology) => {
    agg[current.code] = require(`./${current.code}`);
    return agg;
  },
  {} as Record<string, Question[]>
);
