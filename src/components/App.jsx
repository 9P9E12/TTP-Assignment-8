import React from 'react';
import '../App.css';
import Cell from './Cell';

class App extends React.Component {
  //Create values that we need to keep track of, including the 9 initial cells
  constructor(){
    super();
    this.state ={
      selectedColor: "white",
      rowCSS: "auto auto auto",
      colCSS: "auto auto auto",
      rows: 3,
      cols: 3,
      totalCells: 9,
      hold: false,
      cells: [{"id": "0"},{"id": "1"},{"id": "2"},{"id": "3"},{"id": "4"},{"id": "5"},{"id": "6"},{"id": "7"},{"id": "8"}]
    };
  }

  handleClick = (event) =>{
    //Store these values
    let changeType = event.target.value;
    let prevRow = this.state.rows;
    let prevCol = this.state.cols;
    //Depending on the button's value we know what we have to edit
    switch(changeType){
      case "1": //Increment Rows
        this.setState({rows: prevRow + 1}, () =>{
          this.updateRows();
          this.updateCells(this.state.cols,"A");
        });
        break;
      case "2": //Increment Cols
        this.setState({cols: prevCol + 1}, () =>{
          this.updateCols();
          this.updateCells(this.state.rows,"A");
        });
        break;
      case "3": //Decrement Rows
        if(prevRow){
        this.setState({rows: prevRow - 1}, () =>{
          this.updateRows();
          this.updateCells(this.state.cols,"R");
        });}
        break;
      case "4": //Decrement Cols
        if(prevCol){
        this.setState({cols: prevCol - 1}, () =>{
          this.updateCols();
          this.updateCells(this.state.rows,"R");
        });}
        break;
      case "5": //Set the background color of each uncolored cell to the selectedColor
        console.log("Set all colors clicked");
        break;
      case "6": //Set background color of each cell to the selected color
        break;
      default: //Something broke
        console.log("Something went wrong");
        break;
    }
  }
  //handleChange handles the changing of the selected element in the dropdown menu
  handleChange = (event) =>{
    //Update current color
    this.setState({selectedColor: event.target.value });
  }

  updateCols = () =>{
    let columns = [];
    for(let i = 0; i < this.state.cols; i++){
      columns.push("auto");
    }
    this.setState({colCSS: columns.join(" ")})
  }

  updateRows = () =>{
    let rows = [];
    for(let i = 0; i < this.state.rows; i++){
      rows.push("auto");
    }
    this.setState({rowCSS: rows.join(" ")})
  }

  updateCells = (cellNum,mode) =>{
    if(mode === "A"){
      let cellCount = this.state.totalCells;
      for(let i = cellCount; i < (cellNum + cellCount); i++){
        const newData = {id: i}
        this.setState(prevState =>({cells: [...prevState.cells,newData]}))
      }
      this.setState({totalCells: this.state.totalCells+cellNum})
    }
    if(mode === "R"){
      for(let i = 0; i < cellNum; i++){
        let oldCells = this.state.cells
        oldCells.pop();
        this.setState({cells: oldCells})
      }
      this.setState({totalCells: this.state.totalCells-cellNum})
    }
  }

  handlePress = (callerID) =>{
    document.getElementById(callerID.toString()).style.backgroundColor = this.state.selectedColor;
  }

  render(){
    return (
      <div className="App">
        <div 
        className="grid-container" 
        id="grid" 
        style={
          {'display': 'grid',
          'gridTemplateColumns': this.state.colCSS,
          'gridTemplateRows': this.state.rowCSS,
          'backgroundColor': '#2196F3',
          'padding': '10px'}
        }>
          {this.state.cells.map(cell => {
              return (
              <Cell id={cell.id} handlePress={this.handlePress} key={cell.id}/>
              )
            })
          }
        </div>
        <button value="1" onClick={this.handleClick}>Add a row</button>
        <button value="2" onClick={this.handleClick}>Add a col</button>
        <button value="3" onClick={this.handleClick}>Remove a row</button>
        <button value="4" onClick={this.handleClick}>Remove a col</button>
        <label htmlFor="colors">Choose a color:</label>
        <select name="colors" id="colors" onChange={this.handleChange}>
          <option value="white">Default Color</option>
          <option value="yellow">Yellow</option>
          <option value="green">Green</option>
          <option value="blue">Blue</option>
          <option value="red">Red</option>
        </select>
        <button value="5" onClick={this.handleClick}>Set all <b>uncolored</b> cells to selected color</button>
        <button value="6" onClick={this.handleClick}>Set <b><i>ALL</i></b> cells to selected color</button>
      </div>
    );
  }
  /*render(){
    return (
      <div className="App">
        <Grid
          handlePress={this.handlePress}
        ></Grid>
        <button value="1" onClick={this.handleClick}>Add a row</button>
        <button value="2" onClick={this.handleClick}>Add a col</button>
        <button value="3" onClick={this.handleClick}>Remove a row</button>
        <button value="4" onClick={this.handleClick}>Remove a col</button>
        <label htmlFor="colors">Choose a color:</label>
        <select name="colors" id="colors" onChange={this.handleChange}>
          <option value="white">Default Color</option>
          <option value="yellow">Yellow</option>
          <option value="green">Green</option>
          <option value="blue">Blue</option>
          <option value="red">Red</option>
        </select>
        <button value="5" onClick={this.handleClick}>Set all cells to selected color</button>
      </div>
    );
  }*/
}

export default App;
