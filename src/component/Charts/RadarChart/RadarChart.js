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
                      height:this.myInput.offsetWidth * 0.50,
                      cx:this.myInput.offsetWidth/2,
                      cy:(this.myInput.offsetWidth * 0.50)/2,
                      or:(this.myInput.offsetWidth * 0.50) * 0.35  
                  });
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      data : nextProps.radar
    });
  }

  
  render() {
    let dataDayWise = []
    this.state.data.forEach((el)=>{
      if(dataDayWise.length == 0 || dataDayWise[dataDayWise.length-1].date != el.dt_txt.split(" ")[0]){
        dataDayWise.push({
          date : el.dt_txt.split(" ")[0],
          value : [el]
        })
      }else{
        dataDayWise[dataDayWise.length-1].value.push(el);
      }
    });
  

    let data_chart = [];
    let minP = 9999999;
    let maxP = 0;  

    dataDayWise.forEach((el)=>{
      if(el.value.length > 2){
        data_chart.push({
          dt : d3.timeFormat("%d %b %I %p")(el.value[0].dt * 1000),
          sea_pressure : el.value[0].main.sea_level,
          ground_pressure : el.value[0].main.grnd_level
        });

        minP = Math.min(el.value[0].main.sea_level,el.value[0].main.grnd_level) < minP ? Math.min(el.value[0].main.sea_level,el.value[0].main.grnd_level) : minP;
        maxP = Math.max(el.value[0].main.sea_level,el.value[0].main.grnd_level) > maxP ? Math.max(el.value[0].main.sea_level,el.value[0].main.grnd_level) : maxP;   
      }
      data_chart.push({
        dt : d3.timeFormat("%d %b %I %p")(el.value[el.value.length-1].dt * 1000),
        sea_pressure : el.value[el.value.length-1].main.sea_level,
        ground_pressure : el.value[el.value.length-1].main.grnd_level
      });
      minP = Math.min(el.value[el.value.length-1].main.sea_level,el.value[el.value.length-1].main.grnd_level) < minP ? Math.min(el.value[el.value.length-1].main.sea_level,el.value[el.value.length-1].main.grnd_level) : minP;
      maxP = Math.max(el.value[el.value.length-1].main.sea_level,el.value[el.value.length-1].main.grnd_level) > maxP ? Math.max(el.value[el.value.length-1].main.sea_level,el.value[el.value.length-1].main.grnd_level) : maxP;   
        
    });
    console.log('dataForecast',dataDayWise,data_chart,minP,maxP);  
    return (
      <div ref={input => {this.myInput = input}}>
      <RadarChart cx={this.state.cx} cy={this.state.cy} outerRadius={this.state.or} width={this.state.width} height={this.state.height} data={data_chart}>
          <Radar name="Sea" dataKey="sea_pressure" stroke="#8884d8" fill="#8884d8" fillOpacity={0.5}/>
          <Radar name="Ground" dataKey="ground_pressure" stroke="#82ca9d" fill="#82ca9d" fillOpacity={0.5}/>
          <PolarGrid />
          <Tooltip/>
          <Legend />
          <PolarAngleAxis dataKey="dt" />
          <PolarRadiusAxis angle={45} domain={[minP-50, maxP+50]}/>
        </RadarChart>
        <div className="title">Variation of Pressure sea Vs ground level in (hPa)</div>
      </div>
    );
  }
}

export default RadarChartPressure;