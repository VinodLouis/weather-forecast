import React, { Component } from 'react';
import Autocomplete from 'react-google-autocomplete';
import * as d3 from "d3";
import './WorldMap.css';
import loc from './loc.svg';
class WorldMap extends Component {
  constructor(){
    super();
    this.svg = null;
    this.projection = null;
  }
  componentDidMount() {
      //console.log(d3);
      this.drawMap();
  }

  drawMap(){
    //Width and height
    let w = 700;
    let h = 450;
    let jsonData = require('./world_countries.json');

    this.projection = d3.geoMercator()
                      .scale(100)
                      .translate( [w / 2, h / 1.5]);

    //Define default path generator
    let path = d3.geoPath()
    .projection(this.projection);


    //Create SVG element
    this.svg = d3.select("#map")
    .append("svg")
    .attr("width", w)
    .attr("height", h);

   

     //Bind data and create one path per GeoJSON feature
    this.svg.selectAll("path")
       .data(jsonData.features)
       .enter()
       .append("path")
       .attr("d", path)
       .attr("class","map-fill")

  }

  locatePos(position){
    //let that = this;
    this.svg.append("circle")
      .attr("cx", position[0])
      .attr("cy", position[1])
      .attr("r", 0)
      .style("stroke", "#ff0000")
      .style("fill", "none")
      .transition()
          .delay(500)
          .duration(5000)
      .attr("r", 25)
      .style("stroke-opacity", 0)
      .on("end",function(){
          d3.select(this).remove();
      });
      //this.locatePos(position);
  }



   placeSelected = (place) => {
       let loc = [place.geometry.location.lng(),place.geometry.location.lat()];
       let cntProjection = this.projection(loc);
       d3.selectAll(".selected-city").remove();
       let tm = setInterval(()=>{
        this.locatePos(cntProjection); 
        },500); 
       
       //let circle = this.svg.append("circle").attr("class","selected-city").attr("cx",cntProjection[0]).attr("cy",cntProjection[1]).attr("r",2);
   };

  render() {
    return (
        <div>
        <div><Autocomplete
                 style={{width: '90%'}}
                 onPlaceSelected={this.placeSelected}

             />
             </div>
      <div id="map"></div>
      </div>
    );
  }
}

export default WorldMap;

