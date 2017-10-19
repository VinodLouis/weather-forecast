import React, { Component } from 'react';
import * as d3 from "d3";
import './BaseChart.css';

class BaseChart extends Component {
  constructor(props) {
    super(props);
    this.dimensionsCharts = {
        margin:{
            left:40,
            bottom:30,
            top:20,
            right:20
        },
        width:0,
        height:0
    }
    this.state = {
        chartData : [
                        {"year" : "2005", "value": 771900},
                        {"year" : "2006", "value": 771500},
                        {"year" : "2007", "value": 770500},
                        {"year" : "2008", "value": 770400},
                        {"year" : "2009", "value": 771000},
                        {"year" : "2010", "value": 772400},
                        {"year" : "2011", "value": 774100},
                        {"year" : "2012", "value": 776700},
                        {"year" : "2013", "value": 777100},
                        {"year" : "2014", "value": 779200},
                        {"year" : "2015", "value": 782300}
                    ]
    }
  }

  componentDidMount() {
    //https://bl.ocks.org/alandunning/cfb7dcd7951826b9eacd54f0647f48d3
    this.dimensionsCharts.width = d3.select("#chartGround").node().getBoundingClientRect().width - this.dimensionsCharts.margin.left - this.dimensionsCharts.margin.right;
    this.dimensionsCharts.height = this.dimensionsCharts.width * 0.80 - this.dimensionsCharts.margin.top - this.dimensionsCharts.margin.bottom;

   


  }


  render() {
    return (
      <div id="chartGround" className="full-chart"></div>
    );
  }
}

export default BaseChart;