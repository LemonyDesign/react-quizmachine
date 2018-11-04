function checkedAnswersIncrement(state = {
    count: 0
}, action){
  switch (action.type) {

    case 'INCREMENT_CHECKED_ANSWERS':
    const countChecked = (action.isChecked === action.checked) ? state.count +1 : state.count;
    const newState = Object.assign({}, state, {count: countChecked });
    return newState;

    default:
      return state
  } 
}
export default checkedAnswersIncrement;