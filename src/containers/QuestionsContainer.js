import { connect } from 'react-redux';
import Question from '../components/Question';
import { fetchQuestionsFromAPI, scoreCorrectAnswers, setQuizStatus, setDifficultyLevel, resetScore, resetQuizStatus } from '../actions';


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
        fetchQuestionsFromAPI: () => dispatch(fetchQuestionsFromAPI()),
        selectAnswer: (id, isCorrect) => dispatch(scoreCorrectAnswers(id, isCorrect)),
        endQuizSession: () => dispatch(setQuizStatus()),

        // startQuizSession: (difficulty) => dispatch(setDifficultyLevel(difficulty))
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