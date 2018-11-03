function disableRadio(state = {
    disabled: false
}, action){
  switch (action.type) {
    case 'CHANGE_RADIO_SETTING':
    const newState = Object.assign({}, state, {disabled: true});
    return newState;
    default:
      return state
  } 
}
export default disableRadio;