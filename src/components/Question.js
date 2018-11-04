import React from 'react';
import AnswersContainer from '../containers/AnswersContainer';
import '../styles/components/Question.scss';
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

      const completedClasses = cx('quiz__session', {
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

            return  <article className="quizunit" key={questionID}>
                      
                      <strong className="quizunit__question">{decode(theQuestion)}</strong>

                        {Object.values(answersArr).map(answer => {
                          return <AnswersContainer key={answer.text} answer={answer} id={id} />
                        })}
                      
                    </article>
            })}
        

          <button type="text" className="btn" onClick={() => this.props.endQuizSession()} >How did you do?</button>

          <section className="quiz__outcome">
              <h2 className="score">You scored {scoreTally.score} out of 10</h2>
              <nav>
                <button type="text" className="btn">Another go, please</button>
                <button type="text" className="btn">Make me sweat a bit</button>
              </nav>
          </section>
        
      </section>
      )
    }
}

export default Question;
