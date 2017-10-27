import React, { Component } from 'react';
import * as d3 from "d3";

class CarouselDay extends Component {
  constructor(props){
    super(props);
    this.days = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
  }
  

  render() {
    return (
      <div>
        
        <div>{d3.timeFormat("%d %b")(this.props.day.dt * 1000)}, {this.days[d3.timeFormat("%w")(this.props.day.dt * 1000)]}</div>
        <div><img src={"http://openweathermap.org/img/w/" + this.props.day.icon + ".png"}/></div>

        <div>{this.props.day.main} </div><div>{this.props.day.description}</div>
        <div>Wind Speed : {this.props.day.speed}</div>
        <div>Direction : {this.props.day.deg}</div>
      </div>
    );
  }
}

export default CarouselDay;

