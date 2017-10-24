import React, { Component } from 'react';
import * as d3 from "d3";
import {AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip} from 'recharts';

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
    let minValue = 99999;
    let maxValue = 0;

    this.state.data.forEach((el)=>{
      data_chart.push({
        dt : d3.timeFormat("%d %b")(el.dt * 1000),
        pressure : el.pressure
      });
      minValue = (el.pressure < minValue) ? el.pressure : minValue;
      maxValue = (el.pressure > maxValue) ? el.pressure : maxValue;  
    });

    return (
      <div ref={input => {this.myInput = input}}>
      <AreaChart width={this.state.width} height={this.state.height} data={data_chart}
            margin={{top: 10, right: 30, left: 0, bottom: 0}}>
        <XAxis dataKey="dt"/>
        <YAxis domain={[Math.floor(minValue), Math.ceil(maxValue)]}/>
        <CartesianGrid strokeDasharray="3 3"/>
        <Tooltip/>
        <Area type='monotone' dataKey='pressure' stroke='#8884d8' fill='#8884d8' />
      </AreaChart>
      </div>
    );
  }
}

export default AreaChartHumidity;