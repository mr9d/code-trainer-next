import { Technology } from "../types/Technology";
import { cssQuestions } from "./css";
import { htmlQuestions } from "./html";
import { jsQuestions } from "./js";
import { sqlQuestions } from "./sql";

export const technologies: Technology[] = [
  {
    code: "js",
    name: "JavaScript",
    questions: jsQuestions,
  },
  {
    code: "html",
    name: "HyperText Markup Language (HTML)",
    questions: htmlQuestions,
  },
  {
    code: "css",
    name: "Cascading Style Sheets (CSS)",
    questions: cssQuestions,
  },
  {
    code: "sql",
    name: "Structured Query Language (SQL)",
    questions: sqlQuestions,
  },
];

export const technologiesMap: Record<string, Technology> = technologies.reduce(
  (agg: Record<string, Technology>, current: Technology) => {
    agg[current.code] = current;
    return agg;
  },
  {} as Record<string, Technology>
);
