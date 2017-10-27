import React, { Component } from 'react';
import Location from './component/location/location.js'
import Weather from './component/weather/weather.js'
import OpenMap from './component/OpenMap/OpenMap.js'
import './assets/react-toolbox/theme.css';
import theme from './assets/react-toolbox/theme.js';
import ThemeProvider from 'react-toolbox/lib/ThemeProvider';
import Button from 'react-toolbox/lib/button/Button';
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
        </div>
      </ThemeProvider>

    );
  }
}

export default App;
