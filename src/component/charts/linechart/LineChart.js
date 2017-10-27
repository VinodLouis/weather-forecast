import React, { Component } from 'react';
import * as d3 from "d3";
import {LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts';

class LineChartTem extends Component {
  constructor(props) {
    super(props);
    this.state = {
        width:300,
        heigth:150,
        data:[],
        opacity:{
          minimum:1,
          maximum:1
        }
    }
    this.handleMouseEnter = this.handleMouseEnter.bind(this);
    this.handleMouseLeave = this.handleMouseLeave.bind(this);
  }


  componentDidMount(){
    this.setState({width:this.myInput.offsetWidth - 50,height:this.myInput.offsetWidth * 0.40});
  }

  handleMouseEnter(o){
    let obj = {opacity:{}};  
    for(let prop in this.state.opacity){
      if(o.value.toLowerCase() !== prop){
        obj.opacity[prop] = 0;
      }
    }
    this.setState(obj);
  }

  handleMouseLeave(){
    this.setState({opacity:{
          minimum:1,
          maximum:1
        }});
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
      let obj = el.main;
      minValue = (obj.temp_min < minValue) ? obj.temp_min : minValue;
      maxValue = (obj.temp_max > maxValue) ? obj.temp_max : maxValue; 
      obj.dt = d3.timeFormat("%d %b %I %p")(el.dt * 1000);
      data_chart.push(obj);  
      
    })
    
    return (
      <div ref={input => {this.myInput = input}}>
      <div className="title"> Temperature variation day wise & time wise in (&#8490;)</div>
      <LineChart width={this.state.width} height={this.state.height} data={data_chart}
            margin={{top: 5, right: 30, left: 20, bottom: 5}}>
       <XAxis dataKey="dt"/>
       <YAxis domain={[minValue, maxValue]}/>
       <CartesianGrid strokeDasharray="3 3"/>
       <Tooltip/>
       <Legend onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave} />
       <Line name="Maximum" opacity={this.state.opacity.maximum} type="monotone" dataKey="temp_max" stroke="#8884d8" />
       <Line name="Minimum" opacity={this.state.opacity.minimum} type="monotone" dataKey="temp_min" stroke="#82ca9d"/>
      </LineChart>
        
      </div>
      
    );
  }
}

export default LineChartTem;