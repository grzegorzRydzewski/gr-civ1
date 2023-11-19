import React from "react";
import screenfull from 'screenfull';

class UIbutton {

}

class UIpanel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fullscreen: "off",
    };


  }

  toggleFullscreen() {
    if (screenfull.isEnabled) {
      if (this.state.fullscreen === "off") {
        this.setState({fullscreen: 'on'});
        screenfull.request();

      }
      else {
        this.setState({fullscreen: 'off'});
        screenfull.exit();
      }
    }

  }

  render() {
    return (<div className='ui-panel'>
      <button
        className="ui-button"
        onClick={() => this.toggleFullscreen()}
      >Fullscreen: {this.state.fullscreen}</button>
      <button className="ui-button">Click me</button>
      <button className="ui-button">Click me</button>
    </div>

  );
  }
}
export default UIpanel;
