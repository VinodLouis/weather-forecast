import React, { Component } from 'react';
import './weather.css';
import CarouselDay from './CarouselDay.js'
import LineChartTem from '../charts/linechart/LineChart.js'
import RadarChartPressure from '../charts/radarchart/RadarCharts.js'
import AreaChartHumidity from '../charts/areachart/AreaChart.js'
import Slider from  'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

class Weather extends Component {
  constructor(props) {
    super(props);
    this.state = {
        location : props.cord,
        weatherData : {"city":{"id":524901,"name":"Moscow","coord":{"lon":37.6156,"lat":55.7522},"country":"RU","population":0},"cod":"200","message":0.0942944,"cnt":14,"list":[{"dt":1508835600,"temp":{"day":-1,"min":-5.91,"max":-1,"night":-5.91,"eve":-1,"morn":-1},"pressure":1026.26,"humidity":67,"weather":[{"id":800,"main":"Clear","description":"sky is clear","icon":"01d"}],"speed":1.97,"deg":339,"clouds":48,"snow":0.01},{"dt":1508922000,"temp":{"day":0.08,"min":-7.99,"max":0.28,"night":-7.53,"eve":-4.04,"morn":-7.99},"pressure":1027.35,"humidity":80,"weather":[{"id":800,"main":"Clear","description":"sky is clear","icon":"01d"}],"speed":1.76,"deg":293,"clouds":8,"snow":0.01},{"dt":1509008400,"temp":{"day":-0.7,"min":-5.82,"max":-0.65,"night":-2.99,"eve":-2.44,"morn":-5.82},"pressure":1013.5,"humidity":78,"weather":[{"id":600,"main":"Snow","description":"light snow","icon":"13d"}],"speed":3.21,"deg":149,"clouds":20,"snow":0.21},{"dt":1509094800,"temp":{"day":-0.88,"min":-4.67,"max":-0.5,"night":-4.67,"eve":-1.14,"morn":-2.85},"pressure":999.06,"humidity":78,"weather":[{"id":600,"main":"Snow","description":"light snow","icon":"13d"}],"speed":5.11,"deg":95,"clouds":88,"snow":1.18},{"dt":1509181200,"temp":{"day":-1.11,"min":-8,"max":-1.11,"night":-8,"eve":-5.75,"morn":-2.22},"pressure":998.77,"humidity":0,"weather":[{"id":600,"main":"Snow","description":"light snow","icon":"13d"}],"speed":4,"deg":276,"clouds":42,"snow":0.1},{"dt":1509267600,"temp":{"day":-2.25,"min":-8.63,"max":-2.25,"night":-8.63,"eve":-7.93,"morn":-4.97},"pressure":994.81,"humidity":0,"weather":[{"id":600,"main":"Snow","description":"light snow","icon":"13d"}],"speed":2.31,"deg":74,"clouds":67,"snow":0.06},{"dt":1509354000,"temp":{"day":-0.82,"min":-5.82,"max":4.32,"night":4.32,"eve":1.9,"morn":-5.82},"pressure":991.58,"humidity":0,"weather":[{"id":600,"main":"Snow","description":"light snow","icon":"13d"}],"speed":7.37,"deg":183,"clouds":94,"rain":0.46,"snow":1.33},{"dt":1509440400,"temp":{"day":5.75,"min":2.07,"max":5.75,"night":2.07,"eve":3.94,"morn":4.78},"pressure":991.68,"humidity":0,"weather":[{"id":500,"main":"Rain","description":"light rain","icon":"10d"}],"speed":9.05,"deg":257,"clouds":68,"rain":1.86},{"dt":1509526800,"temp":{"day":5.44,"min":1.82,"max":5.44,"night":4.51,"eve":4.43,"morn":1.82},"pressure":1005.57,"humidity":0,"weather":[{"id":500,"main":"Rain","description":"light rain","icon":"10d"}],"speed":5.58,"deg":217,"clouds":95,"rain":0.61},{"dt":1509613200,"temp":{"day":6.52,"min":3.85,"max":6.52,"night":3.85,"eve":4.85,"morn":4.13},"pressure":1011.2,"humidity":0,"weather":[{"id":500,"main":"Rain","description":"light rain","icon":"10d"}],"speed":5.88,"deg":212,"clouds":73,"rain":0.4},{"dt":1509699600,"temp":{"day":6,"min":1.02,"max":6,"night":2.09,"eve":1.95,"morn":1.02},"pressure":1017.75,"humidity":0,"weather":[{"id":500,"main":"Rain","description":"light rain","icon":"10d"}],"speed":5.79,"deg":172,"clouds":5},{"dt":1509786000,"temp":{"day":5.97,"min":3.35,"max":5.97,"night":5.33,"eve":4.7,"morn":3.35},"pressure":1020.36,"humidity":0,"weather":[{"id":500,"main":"Rain","description":"light rain","icon":"10d"}],"speed":4.91,"deg":165,"clouds":98,"rain":0.93},{"dt":1509872400,"temp":{"day":9.87,"min":7.22,"max":9.87,"night":7.5,"eve":8.56,"morn":7.22},"pressure":1017.28,"humidity":0,"weather":[{"id":500,"main":"Rain","description":"light rain","icon":"10d"}],"speed":5.06,"deg":179,"clouds":93,"rain":0.68},{"dt":1509958800,"temp":{"day":6.71,"min":4.92,"max":6.71,"night":5.46,"eve":6.23,"morn":4.92},"pressure":1018.5,"humidity":0,"weather":[{"id":500,"main":"Rain","description":"light rain","icon":"10d"}],"speed":6.72,"deg":165,"clouds":61,"rain":0.23}]}
    }
  }
  componentDidMount() {

  }

  getWeatherInfo(){
    console.log("changed",this.state.location);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      location : nextProps.cord
    },()=>{
        this.getWeatherInfo();
    });

  }



  render() {

     let settings = {
      arrows:true,
      dots:true,
      adaptiveHeight:true,
      autoplay:true,
      infinite: true,
      pauseOnHover:true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4
    };

    let weatherSliderData = [];
    this.state.weatherData.list.forEach((day)=>{
      let objTemp = day.weather[0];
      objTemp.dt = day.dt;
      objTemp.speed = day.speed;
      objTemp.deg = day.deg;
        weatherSliderData.push(objTemp);
    });

    console.log(weatherSliderData,this.state.weatherData);

    return (
      <div className="header">
        <div className="item">
          <div className="card-wrapper">
          <Slider {...settings}>
           {weatherSliderData.map((slide, index) => (
              <div className="card" data-index={index} key={index}>
                <CarouselDay day={slide}></CarouselDay>
              </div>
            ))
           }
        
        
      </Slider>
          </div>
          <br/><br/>
          <div>
            
            <AreaChartHumidity area={this.state.weatherData.list}></AreaChartHumidity>      
          </div>
            
        </div>
        <div className="item">
          <LineChartTem line={this.state.weatherData.list}></LineChartTem>
          <div>
            <RadarChartPressure radar={this.state.weatherData.list}></RadarChartPressure>  
          </div>
        </div>
      </div>
    );
  }
}

export default Weather;