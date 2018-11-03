import React from 'react';
import AnswersContainer from '../containers/AnswersContainer';
import { decode } from 'he';
import cx from 'classnames';

class Question extends React.Component {

    componentDidMount() {
        // console.log("Step 1: calling fetchQuestions");
        this.props.fetchQuestionsFromAPI();
      }

    render(){
      const questions = this.props.questions;
      const scoreTally = this.props.scoreTally;
      const status = this.props.status;
      const idKeys = Object.keys(questions);
      console.log("status", status.completed)

      const completedClasses = cx('quiz', {
        'quiz--completed': status.completed,
        '': !status.completed
      });

      return (
        <section className={completedClasses}>
            <h2>Know your movies?</h2>

            {idKeys.map(id => {
            
            const questionID = questions[id].id;
            const theQuestion = questions[id].question;
            const answersArr = questions[id].all_answers

            return <article className="quizunit" key={questionID}>
                      
                      <strong className="quizunit__question">{decode(theQuestion)}</strong>

                        {Object.values(answersArr).map(answer => {
                          return <AnswersContainer key={answer.text} answer={answer} id={id} />
                        })}
                      
                  </article>
            })}
        
          <nav>
            <button type="text" onClick={() => this.props.endQuizSession()} >How did you do?</button>
          </nav>
          <section className="score">
            <h2 className="score">Your score is {scoreTally.score} </h2>
          </section>
        
        <p><strong>fetchNextQuestions function to be built - which will be used to trigger the fetching of a new set of questions using mapDispatchToProps</strong></p>
      </section>
      )
    }
}

export default Question;
