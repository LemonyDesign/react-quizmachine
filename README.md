# I'm Smarticus

### A movies quiz serving rounds of 3 multiple-choice questions.

- The app loads 3 multiple choice questions for the initial round
- Each question gives 4 answers, only one of which is the correct one
- Each round returns a score and visually indicates which answers are correct and which incorrect
- After each round a user can select the difficulty level to answer tougher questions
- Each round increments the overall score and outputs a tally

---

### Front end technologies

The I'm Smarticus quiz machine is an exercise in developing an app using React-Redux.

- React
- Redux
- SCSS
- API: Open Trivia Database. Queried for category ("movies", quiz type ("multiple choice") and "difficulty".

  _See [https://opentdb.com/api_config.php](https://opentdb.com/api_config.php) for more info on the API._

### Installation & setup

- Clone this repo and run `npm install` to download the dependencies.
- Run `npm run dev` to launch the app
