import React from 'react';
import AnswersContainer from '../containers/AnswersContainer';
import '../styles/components/Question.scss';
import { decode } from 'he';
import cx from 'classnames';

class Question extends React.Component {

    componentDidMount() {
        this.props.fetchQuestionsFromAPI();
      }

    render(){
      const questions = this.props.questions;
      const scoreTally = this.props.scoreTally;
      const status = this.props.status;
      const difficulty = this.props.difficulty;
      const idKeys = Object.keys(questions);
      const totalQuestions = Object.keys(questions).length;
      
      const completedClasses = cx('quiz__session', {
        'quiz--completed': status.completed
      });

      return (

        <section className={completedClasses}>
            <h2>Test your smart</h2>
            <h3>{ ( difficulty === "easy") ? `Begin with` : `Movin on up to `}  {difficulty}</h3>

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
        
          <section className="outcome">

            <header className="outcome__feedback">
              <button type="text" className="btn btn__feedback" onClick={() => this.props.endQuizSession()} >How did you do?</button>
            </header>

              <h2 className="outcome__score">You scored {scoreTally.score} out of {totalQuestions}</h2>
              
              <ul className="outcome__menu menu--settings">
                <li>
                  <button onClick={event => this.props.startQuizSession(event.target.value)} value="easy" className="btn btn__again" type="text">Easy peasy, pleasy</button>
                </li>
                <li>
                <button onClick={event => this.props.startQuizSession(event.target.value)} value="medium" className="btn btn__medium" type="text">Make me sweat</button>
                </li>
                <li>
                <button onClick={event => this.props.startQuizSession(event.target.value)} value="hard" className="btn btn__hard" type="text">Haway, bring it on</button>
                </li>                
              </ul>

          </section>

      </section>
      )
    }
}

export default Question;
