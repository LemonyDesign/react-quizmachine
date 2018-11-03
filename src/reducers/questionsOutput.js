function questionSet(state = {}, action){
  switch (action.type) {
    case 'RECEIVE_QUESTIONS':
    // console.log("Step 5 - setting questions in state", action);
    return action.questions
    default:
      return state
  } 
}
export default questionSet;