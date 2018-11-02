function addCorrectAnswers(state = {
    answers: {},
    score: 0
}, action){
  switch (action.type) {
    case 'ADD_CORRECT_ANSWERS':
    const updatedAnswers = Object.assign({}, state.answers, {[action.id]: action.isCorrect});
    const newScore = (action.isCorrect === "correct") ? state.score +1 : state.score;
    const newState = Object.assign({}, state, {answers: updatedAnswers, score: newScore });
    console.log(newState);
    return newState;
    default:
      return state
  } 
}
export default addCorrectAnswers;
