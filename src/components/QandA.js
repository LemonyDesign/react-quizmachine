import React from 'react';

function QandA({content}) {
 const idKeys = Object.keys(content);
    return (
      <div>
          {idKeys.map(id => {
              const itemKeys = Object.keys(content[id]);
              itemKeys.map(key =>{
                  if (key === "question") {
                    console.log(id, "question: ", content[id]["question"]);
                  } else if (key === "all_answers") {
                    console.log(id, "all_answers: ", content[id]["all_answers"]);
                  }
              })
          })}
      </div>
    )
  
}

export default QandA;
