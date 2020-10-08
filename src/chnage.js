import React from 'react';

export function Message(props){
    return(
  <div>
    <h2>This is a message of : {props.counter}</h2>
  </div>
    );
}