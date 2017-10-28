import React, { Component } from 'react';
import Location from './component/Location/Location.js'
import Weather from './component/Weather/Weather.js'
import OpenMap from './component/OpenMap/OpenMap.js'
import './assets/react-toolbox/theme.css';
import theme from './assets/react-toolbox/theme.js';
import ThemeProvider from 'react-toolbox/lib/ThemeProvider';
import Drawer from 'react-toolbox/lib/drawer/Drawer';
import world from './world.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      activeRight: false,
      loc:[],
      forecastData:{}
    };
    this.locationChanged = this.locationChanged.bind(this);
    this.closeDrawerRight = this.closeDrawerRight.bind(this);
  }

  componentDidMount(){
    Location.getLocation(this.locationChanged);
  }

  locationChanged(data){
    if(data.status == "success")  
      this.setState({loc:[data.data.coords.latitude,data.data.coords.longitude]});
    else
      this.setState({loc:[18.5204,73.8567]});
  }

  handleToggleRight = () => {
    this.setState({activeRight: !this.state.activeRight});
  };

  closeDrawerRight(){
    this.setState({activeRight: false});
  }

  render() {
    return (
      <ThemeProvider theme={theme}>
        <div>
          <img className="dr-lf" src={world} onClick={this.handleToggleRight}/>  
          <Drawer type="right" className="full-width" active={this.state.activeRight} onOverlayClick={this.handleToggleRight}>
            <OpenMap cordchange={this.locationChanged} cord={this.state.loc} drawerclose={this.closeDrawerRight}></OpenMap>
          </Drawer>
          <Weather cordchange={this.locationChanged} cord={this.state.loc}></Weather>
          <br/><br/>
          <div id="textbox">
            <p className="alignleft">&nbsp;&nbsp;Source code available at <a href="https://github.com/VinodLouis/weather-forecast" target="blank">Github</a></p>
            <p className="alignright">Created with <span style={{color:'red'}}>&#9829;</span> by <a href="http://www.vinodlouis.com" target="blank">Vinod Louis.</a>&nbsp;&nbsp;</p>
          </div>
          <div style={{clear: 'both'}}></div>
          <div className="alignleft">&nbsp;&nbsp;<small> Data Source : <a href="http://openweathermap.org/"> openweathermap.org </a></small></div>
          <div style={{clear: 'both'}}></div>
        </div>
      </ThemeProvider>
    );
  }
}

export default App;
