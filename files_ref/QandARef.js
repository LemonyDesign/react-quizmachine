import React from 'react';

function QandA({content}) {
 const idKeys = Object.keys(content);
    return (
      <div>
          <h2>Questions</h2>
          {idKeys.map(id => {
              const itemKeys = Object.keys(content[id]);
              return itemKeys.map(key =>{
                  if (key === "question") {
                    // console.log(id, "question: ", content[id]["question"]);
                    return <p>{content[id]["question"]}</p>
                  } else if (key === "all_answers") {
                      
                    // console.log(id, "all_answers: ", content[id]["all_answers"]);
                    return <p>{id}</p>
                  }
              })
          })}
      </div>
    )
  
}

export default QandA;

// disabled function
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
