import React, { Component } from 'react';
import * as d3 from "d3";

class CarouselDay extends Component {
  constructor(props){
    super(props);
    this.days = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
  }
  

  render() {
    return (
      <div className="weather-day-wrapper">
        <div className="dt">{d3.timeFormat("%d %b")(this.props.day.dt * 1000)}, {this.days[d3.timeFormat("%w")(this.props.day.dt * 1000)]}</div>
        <div className="img-ds"><img src={"http://openweathermap.org/img/w/" + this.props.day.icon + ".png"}/></div>
        <div className="dt">{d3.timeFormat("%I %p")(this.props.day.dt * 1000)}</div>
        <div className="dt">{(this.props.day.temp - 273.15).toFixed(2)} &#x2103;</div>
        <div className="main-w">{this.props.day.main}</div>
        <div className="desc-w">{this.props.day.description}</div>
        <div className="oth-w">Wind Speed : {this.props.day.speed} m/sec</div>
        <div className="oth-w">Direction : {this.props.day.deg} &#x3d5;<small>MET</small></div>
      </div>
    );
  }
}

export default CarouselDay;

