
function randomizeAnswers(answers) {
  const shuffled = answers.map(a => ({key: Math.random(), value: a}))
  .sort((a, b) => a.key - b.key)
  .map(a => a.value); 
  return shuffled;
}

function createQuestionsObject(resultsArray) {
  let obj = {};
  resultsArray.map((quizObject, index) => {
    obj[index+1] = {
      id: index+1
    }
    Object.keys(quizObject).forEach(key => {
      obj[index+1][key] = quizObject[key];
    })
    obj[index+1]["all_answers"] = [
      {text: obj[index+1].correct_answer, type: "correct"}
    ]
    obj[index+1].incorrect_answers.forEach(item => {
      obj[index+1]["all_answers"].push(
        {text: item, type: "incorrect"}
      )
    })
    obj[index+1]["all_answers"] = randomizeAnswers((obj[index+1]["all_answers"]));
  })
  return obj;
}

export function loadQuestions(body){
  return {
      type: 'RECEIVE_QUESTIONS',
      questions: createQuestionsObject(body.results)
  }
}

export function scoreCorrectAnswers(id, isCorrect){
  return {
      type: 'INCREMENT_CORRECT_ANSWERS',
      id,
      isCorrect
  }
}
export function resetScore(){
  return {
      type: 'RESET_SCORE'
  }
}

export function setDifficultyLevel(difficulty){
  return {
      type: 'SET_DIFFICULTY_LEVEL',
      difficulty
  }
}
export function setQuizStatus(){
  return {
      type: 'SET_QUIZ_STATUS'
  }
}

export function resetQuizStatus(){
  return {
      type: 'RESET_QUIZ_STATUS'
  }
}

export function setRadioChecked(){
  return {
      type: 'INCREMENT_CHECKED_ANSWERS'
  }
}

// THUNK REQUIREMENTS
export function fetchQuestionsFromAPI(){
  return function(dispatch, getState){
    
      const difficulty = getState().difficultyLevel;

      fetch(`https://opentdb.com/api.php?amount=3&category=11&type=multiple&difficulty=${difficulty}`)
      .then(response => response.json())
      .then(body => {
          dispatch(loadQuestions(body))
      })
      .catch(function(error){

      })
  }
}