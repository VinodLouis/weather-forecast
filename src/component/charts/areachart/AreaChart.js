import React, { Component } from 'react';
import * as d3 from "d3";
import {AreaChart, Legend,  Area, XAxis, YAxis, CartesianGrid, Tooltip} from 'recharts';

class AreaChartHumidity extends Component {
  constructor(props) {
    super(props);
    this.state = {
        data : [],
        width:300,
        heigth:150
    }
  }

  componentDidMount(){
    this.setState({width:this.myInput.offsetWidth - 30,height:this.myInput.offsetWidth * 0.40});
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      data : nextProps.area
    });

  }

  
  render() {
    let data_chart = [];

    this.state.data.forEach((el)=>{
      data_chart.push({
        dt : d3.timeFormat("%d %b")(el.dt * 1000),
        humidity : el.main.humidity,
        cloudy :  el.clouds.all 
      });  
    });

    return (
      <div ref={input => {this.myInput = input}}>
      <AreaChart width={this.state.width} height={this.state.height} data={data_chart}
            margin={{top: 5, right: 30, left: 20, bottom: 5}}>
        <XAxis dataKey="dt"/>
        <YAxis domain={[0, 100]}/>
        <CartesianGrid strokeDasharray="3 3"/>
        <Tooltip/>
        <Legend />
        <Area name="Humidity" type='monotone' dataKey='humidity' stroke='#8884d8' fill='#8884d8' />
        <Area name="Clouds" type='monotone' dataKey='cloudy' stroke='#82ca9d' fill='#82ca9d' />
      </AreaChart>
      <div className="title">Variation of humidity Vs clouds in (%)</div>
      </div>
    );
  }
}

export default AreaChartHumidity;