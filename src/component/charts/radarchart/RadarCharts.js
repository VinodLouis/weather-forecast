import React, { Component } from 'react';
import * as d3 from "d3";
import {Radar, RadarChart, PolarGrid, Legend, PolarAngleAxis, PolarRadiusAxis, Tooltip} from 'recharts';

class RadarChartPressure extends Component {
  constructor(props) {
    super(props);
    this.state = {
        data : [],
        width:400,
        heigth:400,
        cx: 200,
        cy:200,
        or:120
    }
  }

  componentDidMount(){
    this.setState({
                      width:this.myInput.offsetWidth * 0.90,
                      height:this.myInput.offsetWidth * 0.40,
                      cx:this.myInput.offsetWidth/2,
                      cy:(this.myInput.offsetWidth * 0.40)/2,
                      or:(this.myInput.offsetWidth * 0.40) * 0.35  
                  });
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      data : nextProps.radar
    });
  }

  
  render() {
    let data_chart = [];


    this.state.data.forEach((el)=>{
      data_chart.push({
        dt : d3.timeFormat("%d %b")(el.dt * 1000),
        humidity : el.humidity,
        cloud : el.clouds
      });  
    });

    return (
      <div ref={input => {this.myInput = input}}>
      <RadarChart cx={this.state.cx} cy={this.state.cy} outerRadius={this.state.or} width={this.state.width} height={this.state.height} data={data_chart}>
          <Radar name="Humidity" dataKey="humidity" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6}/>
          <Radar name="Cloudy" dataKey="cloud" stroke="#82ca9d" fill="#82ca9d" fillOpacity={0.6}/>
          <PolarGrid />
          <Tooltip/>
          <Legend />
          <PolarAngleAxis dataKey="dt" />
          <PolarRadiusAxis angle={40} domain={[0, 100]}/>
        </RadarChart>
      </div>
    );
  }
}

export default RadarChartPressure;