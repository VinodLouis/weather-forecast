import React, { Component } from 'react';
import Autocomplete from 'react-google-autocomplete';
import Dialog from 'react-toolbox/lib/dialog/Dialog';
import './weather.css';
import CarouselDay from './CarouselDay.js'
import LineChartTemp from '../Charts/linechart/LineChart.js'
import RadarChartPressure from '../Charts/RadarChart/RadarChart.js'
import AreaChartHumidity from '../Charts/areachart/AreaChart.js'
import Slider from  'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import WeatherService from "../../services/WeatherService.js";

class Weather extends Component {
  constructor(props) {
    super(props);
    this.state = {
        location : props.cord,
        weatherData :{list:[]},
        dialogOpen:false        
    };
    this.placeSelected = this.placeSelected.bind(this);
    this.toggleDialog = this.toggleDialog.bind(this);
  }

  getWeatherInfo(){
    if(this.state.location.length == 2){
      WeatherService.getWeatherData5X3(this.state.location[0],this.state.location[1]).then(data => {
            this.setState({weatherData: data.data})
        },(err) =>{
            console.log("ERROR",err);
        });
    }
  }

  toggleDialog(){
  	this.setState({dialogOpen:!this.state.dialogOpen})
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      location : nextProps.cord
    },()=>{
        this.getWeatherInfo();
    });
  }

  placeSelected(place){
       let loc = {
        status:"success",
        data:{
            coords : {
                latitude:place.geometry.location.lat(),
                longitude:place.geometry.location.lng()
            }
        }
       }
       this.props.cordchange(loc);
  };

  render() {
  	let actions = [{label: "Close", onClick: this.toggleDialog}];

    let settings = {
      arrows:true,
      dots:true,
      adaptiveHeight:true,
      autoplay:true,
      infinite: true,
      pauseOnHover:true,
      speed: 5000,
      slidesToShow: 4,
      slidesToScroll: 4
    };

    let weatherSliderData = [];
    this.state.weatherData.list.forEach((day)=>{
      let objTemp = day.weather[0];
      objTemp.dt = day.dt;
      objTemp.temp = day.main.temp;
      objTemp.speed = day.wind.speed;
      objTemp.deg = day.wind.deg;
        weatherSliderData.push(objTemp);
    });

    let cnt = <div className="load"><h1>Refreshing data</h1></div>;
    if(weatherSliderData.length > 0){
    	cnt = <Slider {...settings}>
           {
           	weatherSliderData.map((slide, index) => (
              <div className="card" data-index={index} key={index}>
                <CarouselDay day={slide}></CarouselDay>
              </div>
            ))
           }
       </Slider>
    }	


    return (
    <div>
    	<div className="load">
    		<div className="header">
    			<div className="item city">
    				Weather forecast for - {(this.state.weatherData.city) ? this.state.weatherData.city.name + ", " + this.state.weatherData.city.country : ""} &nbsp;&nbsp;<span className="bubble" onClick={this.toggleDialog}><i>i</i></span>
    			</div>
    			<div className="item">
    				<Autocomplete placeholder="Change location.." style={{width: '300px',margin:'5px 0px',border:'2px solid #6961ff'}} onPlaceSelected={this.placeSelected}/>
    			</div>
    		</div>
    	</div>				
      	<div className="header">
        	<div className="item">
          		<div className="card-wrapper">
          			{cnt}
          		</div>
          		<br/><br/>
          		<div>
            		<RadarChartPressure radar={this.state.weatherData.list}></RadarChartPressure>   
          		</div>    
        	</div>
        	<div className="item">
          		<LineChartTemp line={this.state.weatherData.list}></LineChartTemp>
          		<hr className="bisector"/>
          		<AreaChartHumidity area={this.state.weatherData.list}></AreaChartHumidity>   
        	</div>
      	</div>
		  <Dialog actions={actions} active={this.state.dialogOpen} title='Guidelines'>
      <div className="dgc">
        <ul>
          <li>This is a Demo of weather forecast for next 5 days on some time intervals for each day.</li>
          <li>Initially the navigator asks for location, if you authorize it will lad weather for your current location else by default it will load of Pune.</li>
          <li>Selected location is displayed on top. You can use the texbox to select any location of your choice later.</li>
          <li>On the top right corner is a button to render Map. It gives an weather insights on interactive map. </li>
        </ul>

        <p>Carousel Widget</p>
        <div>It displays the weather data on time intervals in an carousel basic details such as time, temperature etc are displayed.</div>
        
        <p>Line Chart</p>
        <div>It represents the Max Vs Min Temperature for different time intervals on each day, units are in Kelvin. Legends are interactive.</div>
        
        <p>Spider Chart</p>
        <div>It represents the Sea Vs Ground Pressure for different time intervals on each day, units are in hPa.</div>
        
        <p>Area Chart</p>
        <div>It represents the Humidity Vs Clouds for different time intervals on each day in Percentage(%).</div>
        
        <p>Map</p>
        <div>A high level interactive weather interactive Component.</div>
        <ul>
          <li>From the right side checkbox select the dimension you want to view</li>
          <li>Tile Layers : Data converted to Tiles on map </li>
          <li>Current Weather : shows current weather on map based on cities, it also has a smal pop up to display details.</li>
          <li>You can zoom drag map its interactive.</li>
          <li>Moreover you can search locations from textbox also.</li>
        </ul>
        </div>
      </Dialog>
    </div>
    );
  }
}

export default Weather;