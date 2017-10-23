import React, { Component } from 'react';
import * as d3 from "d3";
import {Radar, RadarChart, PolarGrid, Legend, PolarAngleAxis, PolarRadiusAxis} from 'recharts';

class RadarChartPressure extends Component {
  constructor(props) {
    super(props);
    this.state = {
        chartData : [{"temp":304.34,"temp_min":304.337,"temp_max":304.34,"pressure":945.63,"sea_level":1019.31,"grnd_level":945.63,"humidity":50,"temp_kf":0,"dt":1508403600000},{"temp":301.24,"temp_min":301.24,"temp_max":301.243,"pressure":945.49,"sea_level":1019.34,"grnd_level":945.49,"humidity":54,"temp_kf":0,"dt":1508414400000},{"temp":293.61,"temp_min":293.61,"temp_max":293.613,"pressure":947.25,"sea_level":1021.54,"grnd_level":947.25,"humidity":68,"temp_kf":0,"dt":1508425200000},{"temp":291.14,"temp_min":291.14,"temp_max":291.143,"pressure":947.73,"sea_level":1022.29,"grnd_level":947.73,"humidity":91,"temp_kf":0,"dt":1508436000000},{"temp":289.072,"temp_min":289.072,"temp_max":289.072,"pressure":946.47,"sea_level":1021.1,"grnd_level":946.47,"humidity":91,"temp_kf":0,"dt":1508446800000},{"temp":287.474,"temp_min":287.474,"temp_max":287.474,"pressure":946.55,"sea_level":1021.25,"grnd_level":946.55,"humidity":88,"temp_kf":0,"dt":1508457600000},{"temp":294.227,"temp_min":294.227,"temp_max":294.227,"pressure":948.33,"sea_level":1022.9,"grnd_level":948.33,"humidity":95,"temp_kf":0,"dt":1508468400000},{"temp":303.051,"temp_min":303.051,"temp_max":303.051,"pressure":948.19,"sea_level":1022.2,"grnd_level":948.19,"humidity":62,"temp_kf":0,"dt":1508479200000},{"temp":303.847,"temp_min":303.847,"temp_max":303.847,"pressure":946.04,"sea_level":1019.8,"grnd_level":946.04,"humidity":51,"temp_kf":0,"dt":1508490000000},{"temp":300.636,"temp_min":300.636,"temp_max":300.636,"pressure":946.05,"sea_level":1019.99,"grnd_level":946.05,"humidity":56,"temp_kf":0,"dt":1508500800000},{"temp":294.974,"temp_min":294.974,"temp_max":294.974,"pressure":948.21,"sea_level":1022.49,"grnd_level":948.21,"humidity":72,"temp_kf":0,"dt":1508511600000},{"temp":292.049,"temp_min":292.049,"temp_max":292.049,"pressure":948.55,"sea_level":1023.16,"grnd_level":948.55,"humidity":89,"temp_kf":0,"dt":1508522400000},{"temp":290.453,"temp_min":290.453,"temp_max":290.453,"pressure":947.16,"sea_level":1021.9,"grnd_level":947.16,"humidity":89,"temp_kf":0,"dt":1508533200000},{"temp":288.611,"temp_min":288.611,"temp_max":288.611,"pressure":947.25,"sea_level":1022.07,"grnd_level":947.25,"humidity":88,"temp_kf":0,"dt":1508544000000},{"temp":295.172,"temp_min":295.172,"temp_max":295.172,"pressure":949.09,"sea_level":1023.81,"grnd_level":949.09,"humidity":87,"temp_kf":0,"dt":1508554800000},{"temp":302.399,"temp_min":302.399,"temp_max":302.399,"pressure":948.88,"sea_level":1022.97,"grnd_level":948.88,"humidity":63,"temp_kf":0,"dt":1508565600000},{"temp":303.485,"temp_min":303.485,"temp_max":303.485,"pressure":946.57,"sea_level":1020.35,"grnd_level":946.57,"humidity":57,"temp_kf":0,"dt":1508576400000},{"temp":300.829,"temp_min":300.829,"temp_max":300.829,"pressure":946.56,"sea_level":1020.55,"grnd_level":946.56,"humidity":57,"temp_kf":0,"dt":1508587200000},{"temp":296.415,"temp_min":296.415,"temp_max":296.415,"pressure":948.64,"sea_level":1023.03,"grnd_level":948.64,"humidity":67,"temp_kf":0,"dt":1508598000000},{"temp":293.205,"temp_min":293.205,"temp_max":293.205,"pressure":949,"sea_level":1023.62,"grnd_level":949,"humidity":83,"temp_kf":0,"dt":1508608800000},{"temp":291.071,"temp_min":291.071,"temp_max":291.071,"pressure":947.57,"sea_level":1022.33,"grnd_level":947.57,"humidity":89,"temp_kf":0,"dt":1508619600000},{"temp":289.715,"temp_min":289.715,"temp_max":289.715,"pressure":947.69,"sea_level":1022.53,"grnd_level":947.69,"humidity":88,"temp_kf":0,"dt":1508630400000},{"temp":296.314,"temp_min":296.314,"temp_max":296.314,"pressure":949.8,"sea_level":1024.47,"grnd_level":949.8,"humidity":79,"temp_kf":0,"dt":1508641200000},{"temp":302.174,"temp_min":302.174,"temp_max":302.174,"pressure":949.89,"sea_level":1024.08,"grnd_level":949.89,"humidity":60,"temp_kf":0,"dt":1508652000000},{"temp":302.993,"temp_min":302.993,"temp_max":302.993,"pressure":947.87,"sea_level":1021.8,"grnd_level":947.87,"humidity":56,"temp_kf":0,"dt":1508662800000},{"temp":300.434,"temp_min":300.434,"temp_max":300.434,"pressure":947.76,"sea_level":1021.95,"grnd_level":947.76,"humidity":58,"temp_kf":0,"dt":1508673600000},{"temp":295.449,"temp_min":295.449,"temp_max":295.449,"pressure":950,"sea_level":1024.51,"grnd_level":950,"humidity":68,"temp_kf":0,"dt":1508684400000},{"temp":292.391,"temp_min":292.391,"temp_max":292.391,"pressure":950.54,"sea_level":1025.32,"grnd_level":950.54,"humidity":81,"temp_kf":0,"dt":1508695200000},{"temp":290.817,"temp_min":290.817,"temp_max":290.817,"pressure":949.4,"sea_level":1024.22,"grnd_level":949.4,"humidity":89,"temp_kf":0,"dt":1508706000000},{"temp":289.375,"temp_min":289.375,"temp_max":289.375,"pressure":949.43,"sea_level":1024.3,"grnd_level":949.43,"humidity":87,"temp_kf":0,"dt":1508716800000},{"temp":296.355,"temp_min":296.355,"temp_max":296.355,"pressure":951.33,"sea_level":1026.21,"grnd_level":951.33,"humidity":79,"temp_kf":0,"dt":1508727600000},{"temp":301.667,"temp_min":301.667,"temp_max":301.667,"pressure":951.56,"sea_level":1025.84,"grnd_level":951.56,"humidity":63,"temp_kf":0,"dt":1508738400000},{"temp":302.898,"temp_min":302.898,"temp_max":302.898,"pressure":949.33,"sea_level":1023.39,"grnd_level":949.33,"humidity":58,"temp_kf":0,"dt":1508749200000},{"temp":300.625,"temp_min":300.625,"temp_max":300.625,"pressure":949.14,"sea_level":1023.42,"grnd_level":949.14,"humidity":58,"temp_kf":0,"dt":1508760000000},{"temp":295.838,"temp_min":295.838,"temp_max":295.838,"pressure":951.05,"sea_level":1025.77,"grnd_level":951.05,"humidity":66,"temp_kf":0,"dt":1508770800000},{"temp":292.191,"temp_min":292.191,"temp_max":292.191,"pressure":951.67,"sea_level":1026.66,"grnd_level":951.67,"humidity":83,"temp_kf":0,"dt":1508781600000},{"temp":289.955,"temp_min":289.955,"temp_max":289.955,"pressure":950.79,"sea_level":1025.86,"grnd_level":950.79,"humidity":90,"temp_kf":0,"dt":1508792400000},{"temp":288.783,"temp_min":288.783,"temp_max":288.783,"pressure":950.89,"sea_level":1025.97,"grnd_level":950.89,"humidity":89,"temp_kf":0,"dt":1508803200000},{"temp":295.729,"temp_min":295.729,"temp_max":295.729,"pressure":952.61,"sea_level":1027.46,"grnd_level":952.61,"humidity":73,"temp_kf":0,"dt":1508814000000},{"temp":302.306,"temp_min":302.306,"temp_max":302.306,"pressure":952.18,"sea_level":1026.51,"grnd_level":952.18,"humidity":58,"temp_kf":0,"dt":1508824800000}]
    }
  }

  
  render() {
    
    const data = [
    { subject: 'Math', A: 120, B: 110, fullMark: 150 },
    { subject: 'Chinese', A: 98, B: 130, fullMark: 150 },
    { subject: 'English', A: 86, B: 130, fullMark: 150 },
    { subject: 'Geography', A: 99, B: 100, fullMark: 150 },
    { subject: 'Physics', A: 85, B: 90, fullMark: 150 },
    { subject: 'History', A: 65, B: 85, fullMark: 150 },
];

    return (
      <RadarChart cx={200} cy={200} outerRadius={120} width={400} height={400} data={data}>
          <Radar name="Mike" dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6}/>
          <Radar name="Lily" dataKey="B" stroke="#82ca9d" fill="#82ca9d" fillOpacity={0.6}/>
          <PolarGrid />
          <Legend />
          <PolarAngleAxis dataKey="subject" />
          <PolarRadiusAxis angle={30} domain={[0, 150]}/>
        </RadarChart>
      
    );
  }
}

export default RadarChartPressure;