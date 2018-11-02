import React from 'react';

function Answer({answer, id, selectAnswer}){

    return (
    <div>
        <input 
            onChange={(event) => selectAnswer(id, event.target.value)} 
            type="radio" 
            name={id} 
            id={answer.text}
            value={answer.type} />
        <label htmlFor={answer.text}>{answer.text}</label>
    </div>
    )
}

export default Answer;
