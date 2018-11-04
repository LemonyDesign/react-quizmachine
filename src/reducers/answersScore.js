function scoreCorrectAnswers(state = {
    answers: {},
    score: 0
}, action){
  switch (action.type) {

    case 'SCORE_CORRECT_ANSWERS':
    const updatedAnswers = Object.assign({}, state.answers, {[action.id]: action.isCorrect});
    const newScore = (action.isCorrect === "correct") ? state.score +1 : state.score;
    const newState = Object.assign({}, state, {answers: updatedAnswers, score: newScore });
    return newState;

    case 'RESET_SCORE':
    const clearedState = Object.assign({}, state, {answers: {}, score: 0 });
    return clearedState;

    default:
      return state
  } 
}
export default scoreCorrectAnswers;