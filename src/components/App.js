import React from 'react';
import QandA from './QandA';

class App extends React.Component {
constructor(){
  super();
  this.fetchQuiz = this.fetchQuiz.bind(this)
  this.displayQuestions = this.displayQuestions.bind(this)
  this.randomizeAnswers = this.randomizeAnswers.bind(this)

  this.state = {
    content: null
  }
}

  componentDidMount() {
    this.fetchQuiz();
  }

  randomizeAnswers(answers) {
    const shuffled = answers.map(a => ({key: Math.random(), value: a}))
    .sort((a, b) => a.key - b.key)
    .map(a => a.value); 
    return shuffled;
  }

  fetchQuiz() {
    const api = "https://opentdb.com/api.php?amount=10&category=11&type=multiple"
    fetch(api)
    .then(response => response.json())
    .then(body => {
      this.setState({
        content: this.displayQuestions(body.results)
      });
    });
  }

  displayQuestions(resultsArray) {
    let obj = {};
    resultsArray.map((quizObject, index) => {
      obj[index+1] = {
        id: index+1
      }
      Object.keys(quizObject).forEach(key => {
        obj[index+1][key] = quizObject[key];
      })
      obj[index+1]["all_answers"] = [
        {text: obj[index+1].correct_answer, type: "correct"}
      ]
      obj[index+1].incorrect_answers.forEach(item => {
        obj[index+1]["all_answers"].push(
          {text: item, type: "incorrect"}
        )
      })
      obj[index+1]["all_answers"] = this.randomizeAnswers((obj[index+1]["all_answers"]));
    })
    return obj;
  }

  render(){
    return (
      <div>
        { this.state.content &&
        <QandA 
          content = {this.state.content} 
        />
        }
      </div>
    )
  }
}

export default App;
