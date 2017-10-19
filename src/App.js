import React, { Component } from 'react';
import IndiaMap from './component/map/IndiaMap.js'
import Location from './component/location/location.js'
import Weather from './component/weather/weather.js'
import './assets/react-toolbox/theme.css';
import theme from './assets/react-toolbox/theme.js';
import ThemeProvider from 'react-toolbox/lib/ThemeProvider';
import Button from 'react-toolbox/lib/button/Button';
import Drawer from 'react-toolbox/lib/drawer/Drawer';
import logo from './logo.svg';
import './App.css';

class App extends Component {
    constructor() {
        super();
        this.state = {
            active: false,
            loc:[],
            forecastData:{}
        };
        this.locationChanged = this.locationChanged.bind(this);
    }

     componentDidMount(){
        Location.getLocation(this.locationChanged);
     }

     locationChanged(data){
        console.log(data,this.state.active);
        this.setState({loc:[data.data.coords.latitude,data.data.coords.longitude]})
     }



   handleToggle = () => {
       this.setState({active: !this.state.active});

     };


  render() {
    return (
      <ThemeProvider theme={theme}>
        <div>

            <Button label='Show Drawer' raised accent onClick={this.handleToggle} />
                <Drawer className="full-width" active={this.state.active} onOverlayClick={this.handleToggle}>
                  <IndiaMap></IndiaMap>
                </Drawer>

                <Weather cord={this.state.loc}></Weather>



              <div className="App">
                <p className="App-intro">
                  To get started, edit <code>src/App.js</code> and save to reload.
                </p>
              </div>

        </div>
      </ThemeProvider>

    );
  }
}

export default App;
