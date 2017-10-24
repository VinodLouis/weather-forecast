import React, { Component } from 'react';
import * as d3 from "d3";
import {LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts';

class LineChartTem extends Component {
  constructor(props) {
    super(props);
    this.state = {
        width:300,
        heigth:150,
        data:[]
    }
  }

  componentDidMount(){
    this.setState({width:this.myInput.offsetWidth - 50,height:this.myInput.offsetWidth * 0.40});
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      data : nextProps.line
    });

  }

  
  render() {
    let data_chart = [];
    let minValue = 999;
    let maxValue = 0;

    this.state.data.forEach((el)=>{
      let obj = el.temp;
      minValue = (obj.min < minValue) ? obj.min : minValue;
      maxValue = (obj.max > maxValue) ? obj.max : maxValue; 
      obj.dt = d3.timeFormat("%d %b")(el.dt * 1000);
      data_chart.push(obj);  
      
    })
    
    return (
      <div ref={input => {this.myInput = input}}>
      <LineChart width={this.state.width} height={this.state.height} data={data_chart}
            margin={{top: 5, right: 30, left: 20, bottom: 5}}>
       <XAxis dataKey="dt"/>
       <YAxis domain={[minValue, maxValue]}/>
       <CartesianGrid strokeDasharray="3 3"/>
       <Tooltip/>
       <Legend />
       <Line type="monotone" dataKey="morn" stroke="#8884d8" />
       <Line type="monotone" dataKey="day" stroke="#82ca9d"/>
       <Line type="monotone" dataKey="eve" stroke="#ff0000" />
       <Line type="monotone" dataKey="night" stroke="#00ff00" />
      </LineChart>
        
      </div>
      
    );
  }
}

export default LineChartTem;