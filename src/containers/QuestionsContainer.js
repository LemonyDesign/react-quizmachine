import { connect } from 'react-redux';
import Question from '../components/Question';
import { fetchQuestionsFromAPI, addCorrectAnswers, setQuizStatus } from '../actions';


const mapStateToProps = state => {
    // console.log("Step 6 - calling mapStateToProps in QuestionContainer")
    return {
        questions: state.questionsOutput,
        scoreTally: state.answersScore,
        status: state.quizStatus
    }
}

const mapDispatchToProps = dispatch => {
    // console.log("Step 2: getting action creator");
    return {
        fetchQuestionsFromAPI: () => dispatch(fetchQuestionsFromAPI()),
        selectAnswer: (id, isCorrect) => dispatch(addCorrectAnswers(id, isCorrect)),
        endQuizSession: () => dispatch(setQuizStatus())
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Question);