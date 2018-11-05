function setQuizStatus(state = {
    completed: false,
    totalscore: 0
}, action){
  switch (action.type) {
    case 'SET_QUIZ_STATUS':
    const newSessionTotal = action.sessionScore;
    const newState = Object.assign({}, state, {completed: true, totalscore: newSessionTotal + state.totalscore});

    // const newState = Object.assign({}, state, {completed: true});    
    return newState;

    case 'RESET_QUIZ_STATUS':
    const resetState = Object.assign({}, state, {completed: false});    
    return resetState;

    default:
      return state
  } 
}
export default setQuizStatus;