import { Component, useState, useEffect } from 'react';
import './App.css';

const CounterButton=({ handleClick, buttonName })=>{
  return(
    <button onClick={ handleClick}>{ buttonName}</button>
  )
}

const App=()=>{
  let [ count, setCount ] = useState(0);
  let [ countInput, setCountInput ] = useState(0);

  const handleInput=(event)=>{
    setCountInput(Number(event.target.value));
  }

  const handleCountChange=(num)=>{
    setCount(count + num)
    setCountInput(0);
  }

  const handleReset=()=>{
    setCount(0);
  }

  return(
    <div className="container">
        <div>Count: { count }</div>
        <CounterButton buttonName="Increment" handleClick={()=>handleCountChange(1)} />
        <CounterButton buttonName="Decrement" handleClick={()=>handleCountChange(-1)} />
        <br />
        <CounterButton buttonName="Increment by ten" handleClick={()=>handleCountChange(10)} />
        <CounterButton buttonName="Decrement by ten" handleClick={()=>handleCountChange(-10)} />
        <br />
        <input
          type="number" 
          value={countInput} 
          onInput={handleInput} 
        />
        <CounterButton buttonName="Increment by custom" handleClick={()=>handleCountChange(countInput)} />
        <CounterButton buttonName="Decrement by custom" handleClick={()=>handleCountChange(-countInput)} />
        <br />
        <CounterButton buttonName="Reset" handleClick={handleReset}/>
      </div>
  )
}

export default App;
