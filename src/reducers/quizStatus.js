function setQuizStatus(state = {
    completed: false
}, action){
  switch (action.type) {
    case 'SET_QUIZ_STATUS':
    const newState = Object.assign({}, state, {completed: true});    
    return newState;

    case 'RESET_QUIZ_STATUS':
    const resetState = Object.assign({}, state, {completed: false});    
    return resetState;

    default:
      return state
  } 
}
export default setQuizStatus;