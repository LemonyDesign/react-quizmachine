import { connect } from 'react-redux';
import Answer from '../components/Answer';
import { scoreCorrectAnswers } from '../actions';
import { disableRadio } from '../actions';


const mapStateToProps = state => {
    // console.log("Step 6 - calling mapStateToProps in QuestionContainer")
    return {
        scoreTally: state.answersScore,
        radioSetting: state.radioSetting
    }
}

const mapDispatchToProps = dispatch => {
    return {
        selectAnswer: (id, isCorrect) => dispatch(scoreCorrectAnswers(id, isCorrect)),
        changeRadio: (id) => dispatch(disableRadio(id))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Answer);