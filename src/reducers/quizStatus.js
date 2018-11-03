function setQuizStatus(state = {
    completed: false
}, action){
  switch (action.type) {
    case 'SET_QUIZ_STATUS':
    const newState = Object.assign({}, state, {completed: true});    
    return newState;
    default:
      return state
  } 
}
export default setQuizStatus;