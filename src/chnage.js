import React from 'react';
import {Name} from './name.js';

export function Message(props){
    return(
  <div>
    <h2>This is a message of : {props.counter}</h2>
    <Name name="Abdul moiz"/>
  </div>
    );
}
