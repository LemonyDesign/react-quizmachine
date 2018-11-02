import React from 'react';
import AnswersContainer from '../containers/AnswersContainer'

class Question extends React.Component {

    componentDidMount() {
        // console.log("Step 1: calling fetchQuestions");
        this.props.fetchQuestionsFromAPI();
      }

    render(){
      const questions = this.props.questions
      const idKeys = Object.keys(questions);

      return (
        <div>
            <h2>Questions * 10</h2>

            {idKeys.map(id => {
            
            // wrap in decode
            console.log(questions[id].question);
            console.log(id, "question: ", questions[id]["question"]);

            return <article>
                      <strong>{questions[id].question}</strong>
                    <form>
                      {Object.values(questions[id].all_answers).map(answer => {
                        return <AnswersContainer key={answer.text} answer={answer} id={id} />
                      })}
                      </form>
                  </article>
                    
            })}


        <p><strong>fetchNextQuestions function to be built - which will be used to trigger the fetching of a new set of questions using mapDispatchToProps</strong></p>
      </div>
      )
    }
}

export default Question;
