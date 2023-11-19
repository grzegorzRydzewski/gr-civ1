import React from "react"
import Board from "./Board"
import UIpanel from "./UIpanel"
//scrollIval = setInterval(console.log("dup"), 10)
//var scrollInterval;
//if (!scrollInterval) {
//  console.log("yyy");
//  scrollInterval = setInterval(console.log("xxx"),100);
//}
class Game extends React.Component {

  constructor (props) {
    super(props)

    this.scrollInterval = undefined;
    this.activeScroll = {
      x:undefined,
      y:undefined
    }
    this.ignoreScroll = {
        x:false,
        y:false
    }
    this.scrollSpeed = 10;
    this.handleMouseMove = this.handleMouseMove.bind(this);
  }
    componentDidMount() {
    //document.addEventListener("mousemove", (e) => this.handleMouseMove(e));

    //console.log(window.outerHeight -  window.innerHeight);
    //  if (!this.scrollInterval) {

    //    this.scrollInterval = setInterval(() => {console.log("xxx")},100);
    //    console.log(this.scrollInterval);
    //  }
    }

  //mouse
  //const [coords, setCoords] = React.useState({x: 0, y: 0});
  //const [intervals, setIntervals] = React.useState(scrollIval);
  handleMouseMove (event) {
    let mouse = {
      x:event.screenX,
      y:event.screenY
    }


    if ( !(mouse.x > 0 && mouse.x < window.screen.width - 1 &&
        mouse.y > 0 && mouse.y < window.screen.height - 1)
      ) {
      console.log(mouse.x + " " + mouse.y);
      console.log(this.activeScroll.x + " " + this.activeScroll.y);
      console.log(this.scrollInterval);
      if ( mouse.x === 0 )  {
        if ( mouse.y === 0 ) {
          this.activeScroll.x = - 1;
          this.activeScroll.y = - 1;

        }
        else if (this.ignoreScroll.y === false
          && (mouse.y > 0 && (mouse.y < window.screen.height - 1))  ) {
            this.activeScroll.x = - 1;
            this.activeScroll.y = 0;
            this.ignoreScroll.y = true;
        }
          //this.scrollInterval = setInterval(() => {scrollBy(-1,0)},10);
        else if ( mouse.y === window.screen.height - 1  ){
          this.activeScroll.x = - 1;
          this.activeScroll.y = 1;
        }

      } else if (this.ignoreScroll.x === false
        && (mouse.x > 0 && (mouse.x < window.screen.width - 1))  ) {
          if (mouse.y === 0) {
            this.activeScroll.x = 0;
            this.activeScroll.y = -1;
            this.ignoreScroll.x = true;

          } else if (mouse.y === window.screen.height - 1 ) {
            this.activeScroll.x = 0;
            this.activeScroll.y = 1;
          }
      } else if (mouse.x === window.screen.width - 1) {
          if (mouse.y === 0) {
            this.activeScroll.x = 1;
            this.activeScroll.y = -1;
          } else if (this.ignoreScroll.y === false
            && (mouse.y > 0 && (mouse.y < window.screen.height - 1))) {
              this.activeScroll.x = 1;
              this.activeScroll.y = 0;
              this.ignoreScroll.y = true;
          } else if (mouse.y === window.screen.height - 1 ) {
              this.activeScroll.x = 1;
              this.activeScroll.y = 1;
        }
      }
      if (!this.scrollInterval ) {
      this.scrollInterval = setInterval(() => {
        scrollBy(this.activeScroll.x,this.activeScroll.y);
      },this.scrollSpeed);
    }

    }
    else if (this.scrollInterval) {

        clearInterval(this.scrollInterval);
        this.scrollInterval = undefined;
        this.activeScroll.x = undefined;
        this.activeScroll.y = undefined;
        this.ignoreScroll.x = false;
        this.ignoreScroll.y = false;
      }


      //else clearInterval(this.scrollInterval);
    }






//    }


//  };     //onMouseMove={}

  //onMouseLeave={(e) => this.handleMouseMove(e)}
  render () {
    return (<div className='game' onMouseMove={(e) => this.handleMouseMove(e)} >
      <Board />
      <UIpanel />
    </div> );
  }
}
export default Game;
