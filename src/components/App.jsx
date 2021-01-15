import React from 'react';
import reactDOM from 'react-dom';
import '../App.css';
import Grid from './Grid';
import Cell from './Cell';

class App extends React.Component {
  //Create values that we need to keep track of
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
    //Store these values
    let changeType = event.target.value;
    let prevRow = this.state.rows;
    let prevCol = this.state.cols;
    //Depending on the button's value we know what we have to edit
    switch(changeType){
      case "1": //Increment Rows
        console.log("Previous rows: " + prevRow);
        this.setState({rows: prevRow + 1}, () =>{
          console.log("Updated rows: " + this.state.rows);
          this.updateRows();
          this.updateCells(this.state.cols,"A");
        });
        break;
      case "2": //Increment Cols
        console.log("Previous cols: " + prevCol);
        this.setState({cols: prevCol + 1}, () =>{
          console.log("Updated cols: " + this.state.cols);
          this.updateCols();
          this.updateCells(this.state.rows,"A");
        });
        break;
      case "3": //Decrement Rows
        if(prevRow){
        console.log("Previous rows: " + prevRow);
        this.setState({rows: prevRow - 1}, () =>{
          console.log("Updated rows: " + this.state.rows);
          this.updateRows();
          this.updateCells(this.state.cols,"R");
        });}
        break;
      case "4": //Decrement Cols
        if(prevCol){
        console.log("Previous cols: " + prevCol);
        this.setState({cols: prevCol - 1}, () =>{
          console.log("Updated cols: " + this.state.cols);
          this.updateCols();
          this.updateCells(this.state.rows,"R");
        });}
        break;
      case "5": //Set the background color of each cell to the selectedColor
        console.log("Set all colors clicked");
        break;
      case "6": //Change background color of clicked node to selectedColor
        break;
      default: //Something broke
        console.log("Something went wrong");
        break;
    }
  }
  //handleChange handles the changing of the selected element in the dropdown menu
  handleChange = (event) =>{
    //console log previous color
    console.log("Previous color: " + this.state.selectedColor);
    //Update current color
    this.setState({selectedColor: event.target.value }, () =>{
      //console log current color
      console.log("Updated cols: " + this.state.selectedColor);
    });
  }

  updateCols = () =>{
    let columns = [];
    for(let i = 0; i < this.state.cols; i++){
      columns.push("auto");
    }
    document.querySelector("#grid").style.gridTemplateColumns = columns.join(" ");
  }

  updateRows = () =>{
    let rows = [];
    for(let i = 0; i < this.state.rows; i++){
      rows.push("auto");
    }
    document.querySelector("#grid").style.gridTemplateRows = rows.join(" ");
  }

  updateCells = (cellNum,mode) =>{
    const gridDiv = document.querySelector("#grid");
    let cells = [];
    for(let i = 0; i < cellNum; i++){
        cells.push(<Cell id={i} handlePress={this.handlePress}></Cell>);
    }
    reactDOM.render(cells,gridDiv);
  }

  handlePress = (node) =>{
    console.log(node);
  }

  render(){
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
  }
}

export default App;
