import React from 'react';

function QandA({content}) {
    console.log(content)
 const idKeys = Object.keys(content);
    return (
      <div>
          {idKeys.map(id => {
              const itemKeys = Object.keys(content[id]);
              console.log(itemKeys)
              

          })}
        <p>Hello</p>
      </div>
    )
  
}

export default QandA;
