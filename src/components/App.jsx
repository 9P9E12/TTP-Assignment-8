import React from 'react';
import '../App.css';
import Table from './Table';

class App extends React.Component {
  constructor(){
    super();
    this.state ={
      selectedColor: "white",
      rows: 3,
      cols: 3,
      hold: false
    };
  }

  handleClick = (event) =>{
    let changeType = event.target.className;
    switch(changeType){
      case "1":
        console.log("increment row");
        break;
      case "2":
        console.log("increment col");
        break;
      case "3":
        console.log("decrement row");
        break;
      case "4":
        console.log("decrement col");
        break;
      default:
        console.log("Something went wrong");
        break;
    }
  }

  incrementRow = (event) =>{
    this.setState(state =>{
      return {rows: state.rows+1}
    });
  }

  incrementCol(){
    this.setState(state =>({
      cols: state.cols+1
    }));
  }

  decrementRow(){
    this.setState(state =>({
      rows: state.rows-1
    }));
  }

  decrementCol(){
    this.setState(state =>({
      col: state.cols-1
    }));
  }

  render(){
    return (
      <div className="App">
        <Table/>
        <button className ="1" onClick={this.handleClick}>Add a row</button>
        <button className ="2" onClick={this.handleClick}>Add a col</button>
        <button className ="3" onClick={this.handleClick}>Remove a row</button>
        <button className ="4" onClick={this.handleClick}>Remove a col</button>
      </div>
    );
  }
}

export default App;
