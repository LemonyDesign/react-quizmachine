import React from 'react';
import { decode } from 'he';

    function Answer({answer, id, selectAnswer, changeRadio, radioSetting}){
    
    const theAnswer = answer.text;
    console.log(radioSetting.disabled)

    return (
    <div>
        <input 
            onChange={(event) => selectAnswer(id, event.target.value)} 
            onClick={() => changeRadio()} 
            type = "radio" 
            name = {id} 
            id = {answer.text}
            value = {answer.type}
             />
        <label htmlFor={theAnswer}>{decode(theAnswer)}<span>{answer.type}</span></label>
    </div>
    )
}

export default Answer;
