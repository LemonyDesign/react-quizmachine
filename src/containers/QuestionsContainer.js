import { connect } from 'react-redux';
import Question from '../components/Question';
import { fetchQuestionsFromAPI, scoreCorrectAnswers, setQuizStatus, setDifficultyLevel, resetScore, resetQuizStatus } from '../actions';


const mapStateToProps = state => {
    return {
        questions: state.questionsOutput,
        scoreTally: state.answersScore,
        status: state.quizStatus,
        difficulty: state.difficultyLevel,
        checkedTally: state.answersChecked,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchQuestionsFromAPI: () => dispatch(fetchQuestionsFromAPI()),
        selectAnswer: (id, isCorrect) => dispatch(scoreCorrectAnswers(id, isCorrect)),
        endQuizSession: (sessionScore) => dispatch(setQuizStatus(sessionScore)),

        startQuizSession: (difficulty) =>  {
            dispatch(setDifficultyLevel(difficulty));
            dispatch(fetchQuestionsFromAPI());
            dispatch(resetScore());
            dispatch(resetQuizStatus());
          }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Question);