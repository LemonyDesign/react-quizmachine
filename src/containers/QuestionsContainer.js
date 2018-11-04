import { connect } from 'react-redux';
import Question from '../components/Question';
import { fetchQuestionsFromAPI, addCorrectAnswers, setQuizStatus, setDifficultyLevel} from '../actions';


const mapStateToProps = state => {
    // console.log("Step 6 - calling mapStateToProps in QuestionContainer")
    return {
        questions: state.questionsOutput,
        scoreTally: state.answersScore,
        status: state.quizStatus,
        difficulty: state.difficultyLevel
    }
}

const mapDispatchToProps = dispatch => {
    // console.log("Step 2: getting action creator");
    return {
        fetchQuestionsFromAPI: () => dispatch(fetchQuestionsFromAPI(difficulty)),
        selectAnswer: (id, isCorrect) => dispatch(addCorrectAnswers(id, isCorrect)),
        endQuizSession: () => dispatch(setQuizStatus()),
        startQuizSession: (difficulty) => dispatch(setDifficultyLevel(difficulty))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Question);