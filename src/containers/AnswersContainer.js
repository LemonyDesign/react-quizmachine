import { connect } from 'react-redux';
import Answer from '../components/Answer';
import { scoreCorrectAnswers, setRadioChecked } from '../actions';

const mapStateToProps = state => {
    return {
        scoreTally: state.answersScore,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        selectAnswer: (id, isCorrect) => dispatch(scoreCorrectAnswers(id, isCorrect)),
        checkRadio: () => dispatch(setRadioChecked())
        }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Answer);