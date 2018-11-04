
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

export function receiveQuestions(body){
  return {
      type: 'RECEIVE_QUESTIONS',
      questions: createQuestionsObject(body.results)
  }
}

export function fetchQuestionsFromAPI(){
  return function(dispatch, getState){
    
      const difficulty = getState().difficultyLevel.difficulty;

      fetch(`https://opentdb.com/api.php?amount=3&category=11&type=multiple&difficulty=${difficulty}`)
      .then(response => response.json())
      .then(body => {
          dispatch(receiveQuestions(body))
      })
      .catch(function(error){

      })
  }
}

export function addCorrectAnswers(id, isCorrect){
  return {
      type: 'ADD_CORRECT_ANSWERS',
      id,
      isCorrect
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

// not currently used
export function disableRadio(id){
  return {
      type: 'CHANGE_RADIO_SETTING',
      id
  }
}