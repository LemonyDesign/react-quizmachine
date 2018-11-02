import { connect } from 'react-redux';
import Answer from '../components/Answer';
import { addCorrectAnswers } from '../actions';


const mapStateToProps = state => {
    console.log("Step 6 - calling mapStateToProps in QuestionContainer")
    return {
        score: state.answersScore
    }
}

const mapDispatchToProps = dispatch => {
    return {
        selectAnswer: (id, isCorrect) => dispatch(addCorrectAnswers(id, isCorrect)),
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Answer);