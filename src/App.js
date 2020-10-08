import React, {useState} from 'react';
import './App.css';

function App() {
   
  let [count, setCount]=useState(0);
  return(
      <div className="box">
       <h2>The value is Updating,But There is no end: {count}</h2>                

       <button onClick={
        ()=>setCount(++count) 
       }>
       Update value
       </button>
    </div>
  );
}

export default App;
