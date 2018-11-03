import React from 'react';
import AnswersContainer from '../containers/AnswersContainer';
import { decode } from 'he';

class Question extends React.Component {

    componentDidMount() {
        // console.log("Step 1: calling fetchQuestions");
        this.props.fetchQuestionsFromAPI();
      }

    render(){
      const questions = this.props.questions;
      const scoreTally = this.props.scoreTally;
      const idKeys = Object.keys(questions);
      console.log(scoreTally.score)

      return (
        <div>
            <h2>Know your movies?</h2>

            {idKeys.map(id => {
            
            const questionID = questions[id].id;
            const theQuestion = questions[id].question;
            const answersArr = questions[id].all_answers

            return <article key={questionID}>
                      <strong>{decode(theQuestion)}</strong>
                      <form>
                        {Object.values(answersArr).map(answer => {
                          return <AnswersContainer key={answer.text} answer={answer} id={id} />
                        })}
                      </form>
                  </article>
            })}

        <h2>Your score is {scoreTally.score} </h2>
        <p><strong>fetchNextQuestions function to be built - which will be used to trigger the fetching of a new set of questions using mapDispatchToProps</strong></p>
      </div>
      )
    }
}

export default Question;
