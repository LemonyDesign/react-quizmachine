import React from 'react';
import '../styles/components/Answer.scss';
import { decode } from 'he';

    function Answer({answer, id, selectAnswer, checkRadio}){
    const theAnswer = answer.text;
    
    return (
    <div className="quizunit__controls">
        <input 
            className={answer.type}
            onChange={(event) => selectAnswer(id, event.target.value)} 
            type = "radio" 
            name = {id} 
            id = {answer.text}
            value = {answer.type}
            onClick={() => checkRadio()} 
             />
        <label className={answer.type} htmlFor={theAnswer}>{decode(theAnswer)}</label>
    </div>
    )
}

export default Answer;
