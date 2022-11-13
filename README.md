# Funny coding training application

## About

Improve your muscle memory by typing programming terms. It will help you to become better at coding, won’t it? This application was inspired by my mentee with an IT infrastructure background who wanted to learn to code but was blocked by a lack of a training application. This application was built based on his description.

## Current status

The application is working as a Proof-of-concept. I have no plans to develop it further.

If you like the idea, feel free to improve it via the Pull Requests procedure. Read more [about Contributing to a Project](https://git-scm.com/book/en/v2/GitHub-Contributing-to-a-Project).

## Live version

Available at Heroku: <https://codetrainer.herokuapp.com/> (deployed from the `main` branch)

## Running locally

If you want to run the application locally, you can do the following:

1. `git clone` the repository
2. Run `npm install`
3. Build project by running `npm run build`
4. Start project with `npm run start`

After the successful execution the local instance should be available at <http://localhost:3000>

## How to use

At first, you must to select technologies you want to train.

There are two modes: training (the application shows you the correct answer) and exam (you don’t see the correct answer). The exam mode is not implemented yet, training - is the only option for now.

Next, you’ll see a number of questions in the database based on the technologies you selected. You can input a number of questions for one session of training. And then click “Start”.

For each question, you will see the question and correct answer. You have 20 seconds to input this answer in the field.

After the last question, you are supposed to see the statistics of your session. But this is not implemented as well.

## Adding topics and questions

New topics (technologies) and questions can be easily added with Pull Requests.

The list of all topics (technologies) is available in the [data/index.ts](/data/index.ts) file. A list of questions for each technology could be found in the [data/](/data/) subdirectory.

## Used technologies

- TypeScript 4.5 ([documentation](https://www.typescriptlang.org/docs/))
- React 17 ([documentation](https://reactjs.org/docs/getting-started.html))
- Next.js 12.0 ([documentation](https://nextjs.org/docs), [learn](https://nextjs.org/learn))
- GitHub Actions ([documentation](https://docs.github.com/en/actions))
- [Heroku](https://heroku.com/)
