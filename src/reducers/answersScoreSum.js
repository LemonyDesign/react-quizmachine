function scoresSummed(state = {
    totalscore: 0
}, action){
  switch (action.type) {

    case 'SUM_SCORE':
    const newScore = state.score
    const newState = Object.assign({}, state, {totalscore: newScore});    
    return newState;

    default:
      return state
  } 
}
export default scoresSummed;