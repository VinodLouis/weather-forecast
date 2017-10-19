import React, { Component } from 'react';
import LineChart from '../charts/linechart/LineChart.js'
import './weather.css';

class Weather extends Component {
  constructor(props) {
    super(props);
    this.state = {
        location : props.cord
    }
  }
  componentDidMount() {

  }

  getWeatherInfo(){
    console.log("changed",this.state.location);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      location : nextProps.cord
    },()=>{
        this.getWeatherInfo();
    });

  }



  render() {
    return (
      <div className="header">
        <div className="item">
            <LineChart></LineChart>
        </div>
        <div className="item">
        </div>
      </div>
    );
  }
}

export default Weather;