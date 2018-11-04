import React from 'react';
import { decode } from 'he';

    function Answer({answer, id, selectAnswer, changeRadio, radioSetting}){
    
    const theAnswer = answer.text;
    // console.log(radioSetting.disabled)
    
    return (
    <div className="quizunit__controls">
        <input 
            className={answer.type}
            onChange={(event) => selectAnswer(id, event.target.value)} 
            onClick={(id) => changeRadio(id)} 
            type = "radio" 
            name = {id} 
            id = {answer.text}
            value = {answer.type}
            // disabled = {radioSetting.disabled}
             />
        <label className={answer.type} htmlFor={theAnswer}>{decode(theAnswer)}</label>
    </div>
    )
}

export default Answer;
