import { Component, useState, useEffect } from 'react';
import './App.css';


class CounterButton extends Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
      <button onClick={this.props.handleClick}>{this.props.buttonName}</button>
    )
  }
}

class App extends Component{
  constructor(){
     super();
     this.state = {
       count: 0,
       countInput: 0
     }
  }

  handleInput=(event)=>{
    this.setState({
      countInput: Number(event.target.value)
    })
  }

  handleCountChange=(num)=>{
    this.setState({
      count: this.state.count + num,
      countInput: 0
    });
  }

  handleReset=()=>{
    this.setState({
      count: 0
    });
  }

  render(){
    return (
      <div className="container">

        <div>Count: { this.state.count }</div>
        <CounterButton buttonName="Increment" handleClick={()=>this.handleCountChange(1)} />
        <CounterButton buttonName="Decrement" handleClick={()=>this.handleCountChange(-1)} />
        <br />
        <CounterButton buttonName="Increment by ten" handleClick={()=>this.handleCountChange(10)} />
        <CounterButton buttonName="Decrement by ten" handleClick={()=>this.handleCountChange(-10)} />
        <br />
        <input
          type="number" 
          value={this.state.countInput} 
          onInput={this.handleInput} 
        />
        <CounterButton buttonName="Increment by custom" handleClick={()=>this.handleCountChange(this.state.countInput)} />
        <CounterButton buttonName="Decrement by custom" handleClick={()=>this.handleCountChange(-this.state.countInput)} />
        <br />
        <CounterButton buttonName="Reset" handleClick={this.handleReset}/>
      </div>
    )
  }
}

export default App;
