function handleDifficultyLevel(state = 'easy', action){

    switch (action.type) {
      case 'SET_DIFFICULTY_LEVEL':
      return action.difficulty
      default:
        return state
    }
  }
  
  export default handleDifficultyLevel;