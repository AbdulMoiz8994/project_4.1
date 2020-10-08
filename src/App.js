import React, {useState} from 'react';
import './App.css';
import {Message} from './chnage.js';
function App() {
   
  let [count, setCount]=useState(0);
  let[isRaining, isMorning]=useState();
  return(
      <div className={`box ${isRaining? "box":"dayLight"}`}>

  <h1>Day Time={isRaining? 'Rainny Weather': 'Sunny Weather'}</h1>   
     <Message counter={count}/>             
         
       <button onClick={
        ()=>setCount(++count) 
       }>
       Update value
       </button>
       <button onClick={
         ()=>isMorning(!isRaining)
       }>
       Changes the weather on one click!
       </button>
  
    </div>
  );
}

export default App;
