import React from "react"
import Hex from './hex.svg'

const mapSizeX = 16;
const mapSizeY = 9;

const hexWidth = 104;
const hexHeight = 120;
class Board extends React.Component {
  mouseCoords;
  constructor(props) {
    super(props);

    // y - rzad, x - kolumna
    this.globalMap = new Array(mapSizeY);
    this.globalMap.fill(new Array(mapSizeX));

    this.renderRow = this.renderRow.bind(this);
    for (let i = 0; i < this.globalMap.length; i++) {
       this.globalMap[i] = this.renderRow(i);
     }
    this.random_unit_vector = this.random_unit_vector.bind(this);
    this.perlin_get = this.perlin_get.bind(this);
    }
    random_unit_vector(){
      let theta = Math.random() * 2 * Math.PI;
      return {x: Math.cos(theta), y: Math.sin(theta)};
    }
    perlin_get(x, y) {
      let x0 = Math.floor(x);
      let x1 = x0 + 1;
      let y0 = Math.floor(y);
      let y1 = y0 + 1;
      
      return intensity;
    }

  renderRow(rowNo) {
    let row = [];
    var dy=-1/4 * hexHeight;
    let el;
    let elCss;
    for (let i = 0; i < this.globalMap[rowNo].length; i++) {
      row.push(<Hex width={hexWidth} height={hexHeight}
         style={ {display: "inline-block"} } key={rowNo+ " " + i}
         vector={this.random_unit_vector()}
         />);
    }
    for (let i = 0; i <= rowNo; i++) dy+=(1/4 * hexHeight);

      if (rowNo%2==0) {

        elCss = {
            position: "relative",
            top: -dy +  "px",
          }
        }
        else if (rowNo != 0) {
          elCss = {
            position: "relative",
            left: "52px",
            top: -dy + "px",

            backgroundColor: "blue",
              }

          }


        el=<div className="row" style={elCss} key={rowNo}>{row} </div>
        return (el);
    }
/*  handleMouseMove(e) {
    let x = e.clientX;
    let y = e.clientY;
  console.log("d");
    if (x == 0 && y==0 ) {

      scroll(20, 20);
    }
  }
  */
 // (3/4*this.globalMap.length )
  render() {
    const boardSize = ((3/4)*hexHeight)*(mapSizeY + 1);
    const boardStyle = {height: boardSize +"px"};
    return (<div className='board' style={boardStyle}>
      {this.globalMap}
      </div>
  )};
//  globalMap.forEach((globalMapX,i) =>
    //globalMap[i].forEach((item,j) => {
    //  globalMap[i][j];
  //  <h1>Welcome to React App</h1>
  //  <h3>Date : {new Date().toDateString()}</h3>
//viewBox="0 0 105 121.24"
  //  })
//  )


/*
.rowParity{
  position: relative;
  left: 54px;
  bottom: 35px;

}
.rowImparity{
  position: relative;
  bottom: 60px;
}*/

}
export default Board
