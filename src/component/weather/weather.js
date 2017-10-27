import React, { Component } from 'react';
import './weather.css';
import CarouselDay from './CarouselDay.js'
import LineChartTem from '../charts/linechart/LineChart.js'
import RadarChartPressure from '../charts/radarchart/RadarCharts.js'
import AreaChartHumidity from '../charts/areachart/AreaChart.js'
import Slider from  'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import WeatherService from "../../services/WeatherService.js";

class Weather extends Component {
  constructor(props) {
    super(props);
    this.state = {
        location : props.cord,
        weatherData : {"cod":"200","message":0.0048,"cnt":40,"list":[{"dt":1509127200,"main":{"temp":292,"temp_min":292,"temp_max":294.624,"pressure":951.83,"sea_level":1026.76,"grnd_level":951.83,"humidity":74,"temp_kf":-2.62},"weather":[{"id":801,"main":"Clouds","description":"few clouds","icon":"02n"}],"clouds":{"all":20},"wind":{"speed":1.12,"deg":31.0002},"sys":{"pod":"n"},"dt_txt":"2017-10-27 18:00:00"},{"dt":1509138000,"main":{"temp":289.59,"temp_min":289.59,"temp_max":291.553,"pressure":950.83,"sea_level":1025.65,"grnd_level":950.83,"humidity":82,"temp_kf":-1.97},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01n"}],"clouds":{"all":0},"wind":{"speed":1.14,"deg":300.503},"sys":{"pod":"n"},"dt_txt":"2017-10-27 21:00:00"},{"dt":1509148800,"main":{"temp":288.48,"temp_min":288.48,"temp_max":289.794,"pressure":950.98,"sea_level":1026.08,"grnd_level":950.98,"humidity":86,"temp_kf":-1.31},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01n"}],"clouds":{"all":0},"wind":{"speed":1.23,"deg":343.002},"sys":{"pod":"n"},"dt_txt":"2017-10-28 00:00:00"},{"dt":1509159600,"main":{"temp":295.48,"temp_min":295.48,"temp_max":296.139,"pressure":952.89,"sea_level":1027.89,"grnd_level":952.89,"humidity":60,"temp_kf":-0.66},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01d"}],"clouds":{"all":0},"wind":{"speed":1.91,"deg":100.501},"sys":{"pod":"d"},"dt_txt":"2017-10-28 03:00:00"},{"dt":1509170400,"main":{"temp":301.973,"temp_min":301.973,"temp_max":301.973,"pressure":952.56,"sea_level":1026.97,"grnd_level":952.56,"humidity":61,"temp_kf":0},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01d"}],"clouds":{"all":0},"wind":{"speed":2.4,"deg":128.502},"sys":{"pod":"d"},"dt_txt":"2017-10-28 06:00:00"},{"dt":1509181200,"main":{"temp":302.725,"temp_min":302.725,"temp_max":302.725,"pressure":950.36,"sea_level":1024.47,"grnd_level":950.36,"humidity":52,"temp_kf":0},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"02d"}],"clouds":{"all":8},"wind":{"speed":2.16,"deg":99.0005},"sys":{"pod":"d"},"dt_txt":"2017-10-28 09:00:00"},{"dt":1509192000,"main":{"temp":300.505,"temp_min":300.505,"temp_max":300.505,"pressure":950.79,"sea_level":1025,"grnd_level":950.79,"humidity":51,"temp_kf":0},"weather":[{"id":500,"main":"Rain","description":"light rain","icon":"10d"}],"clouds":{"all":92},"wind":{"speed":1.9,"deg":359.501},"rain":{"3h":0.045},"sys":{"pod":"d"},"dt_txt":"2017-10-28 12:00:00"},{"dt":1509202800,"main":{"temp":296.439,"temp_min":296.439,"temp_max":296.439,"pressure":952.49,"sea_level":1026.94,"grnd_level":952.49,"humidity":70,"temp_kf":0},"weather":[{"id":500,"main":"Rain","description":"light rain","icon":"10n"}],"clouds":{"all":64},"wind":{"speed":1.23,"deg":281.502},"rain":{"3h":0.165},"sys":{"pod":"n"},"dt_txt":"2017-10-28 15:00:00"},{"dt":1509213600,"main":{"temp":294.055,"temp_min":294.055,"temp_max":294.055,"pressure":951.84,"sea_level":1026.68,"grnd_level":951.84,"humidity":82,"temp_kf":0},"weather":[{"id":500,"main":"Rain","description":"light rain","icon":"10n"}],"clouds":{"all":64},"wind":{"speed":1.39,"deg":258.002},"rain":{"3h":0.005},"sys":{"pod":"n"},"dt_txt":"2017-10-28 18:00:00"},{"dt":1509224400,"main":{"temp":292.466,"temp_min":292.466,"temp_max":292.466,"pressure":950.91,"sea_level":1025.63,"grnd_level":950.91,"humidity":91,"temp_kf":0},"weather":[{"id":802,"main":"Clouds","description":"scattered clouds","icon":"03n"}],"clouds":{"all":48},"wind":{"speed":1.26,"deg":348.504},"rain":{},"sys":{"pod":"n"},"dt_txt":"2017-10-28 21:00:00"},{"dt":1509235200,"main":{"temp":291.046,"temp_min":291.046,"temp_max":291.046,"pressure":950.95,"sea_level":1025.86,"grnd_level":950.95,"humidity":86,"temp_kf":0},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01n"}],"clouds":{"all":0},"wind":{"speed":1.21,"deg":39.5003},"rain":{},"sys":{"pod":"n"},"dt_txt":"2017-10-29 00:00:00"},{"dt":1509246000,"main":{"temp":296.457,"temp_min":296.457,"temp_max":296.457,"pressure":953.09,"sea_level":1027.94,"grnd_level":953.09,"humidity":56,"temp_kf":0},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01d"}],"clouds":{"all":0},"wind":{"speed":2.22,"deg":69.0061},"rain":{},"sys":{"pod":"d"},"dt_txt":"2017-10-29 03:00:00"},{"dt":1509256800,"main":{"temp":301.94,"temp_min":301.94,"temp_max":301.94,"pressure":953.09,"sea_level":1027.42,"grnd_level":953.09,"humidity":53,"temp_kf":0},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01d"}],"clouds":{"all":0},"wind":{"speed":2.27,"deg":110.501},"rain":{},"sys":{"pod":"d"},"dt_txt":"2017-10-29 06:00:00"},{"dt":1509267600,"main":{"temp":303.12,"temp_min":303.12,"temp_max":303.12,"pressure":950.97,"sea_level":1024.98,"grnd_level":950.97,"humidity":40,"temp_kf":0},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01d"}],"clouds":{"all":0},"wind":{"speed":2.9,"deg":82.0003},"rain":{},"sys":{"pod":"d"},"dt_txt":"2017-10-29 09:00:00"},{"dt":1509278400,"main":{"temp":300.841,"temp_min":300.841,"temp_max":300.841,"pressure":950.97,"sea_level":1025.05,"grnd_level":950.97,"humidity":41,"temp_kf":0},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01d"}],"clouds":{"all":0},"wind":{"speed":1.86,"deg":75.0005},"rain":{},"sys":{"pod":"d"},"dt_txt":"2017-10-29 12:00:00"},{"dt":1509289200,"main":{"temp":294.579,"temp_min":294.579,"temp_max":294.579,"pressure":952.72,"sea_level":1027.43,"grnd_level":952.72,"humidity":50,"temp_kf":0},"weather":[{"id":802,"main":"Clouds","description":"scattered clouds","icon":"03n"}],"clouds":{"all":48},"wind":{"speed":2.43,"deg":119.002},"rain":{},"sys":{"pod":"n"},"dt_txt":"2017-10-29 15:00:00"},{"dt":1509300000,"main":{"temp":295.321,"temp_min":295.321,"temp_max":295.321,"pressure":953.41,"sea_level":1028.35,"grnd_level":953.41,"humidity":50,"temp_kf":0},"weather":[{"id":804,"main":"Clouds","description":"overcast clouds","icon":"04n"}],"clouds":{"all":100},"wind":{"speed":2.81,"deg":94.0012},"rain":{},"sys":{"pod":"n"},"dt_txt":"2017-10-29 18:00:00"},{"dt":1509310800,"main":{"temp":293.913,"temp_min":293.913,"temp_max":293.913,"pressure":952.69,"sea_level":1027.61,"grnd_level":952.69,"humidity":57,"temp_kf":0},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01n"}],"clouds":{"all":0},"wind":{"speed":2.86,"deg":86.5005},"rain":{},"sys":{"pod":"n"},"dt_txt":"2017-10-29 21:00:00"},{"dt":1509321600,"main":{"temp":291.13,"temp_min":291.13,"temp_max":291.13,"pressure":952.8,"sea_level":1027.82,"grnd_level":952.8,"humidity":65,"temp_kf":0},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01n"}],"clouds":{"all":0},"wind":{"speed":2.86,"deg":78.001},"rain":{},"sys":{"pod":"n"},"dt_txt":"2017-10-30 00:00:00"},{"dt":1509332400,"main":{"temp":296.15,"temp_min":296.15,"temp_max":296.15,"pressure":954.17,"sea_level":1029.13,"grnd_level":954.17,"humidity":53,"temp_kf":0},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01d"}],"clouds":{"all":0},"wind":{"speed":3.11,"deg":86.5012},"rain":{},"sys":{"pod":"d"},"dt_txt":"2017-10-30 03:00:00"},{"dt":1509343200,"main":{"temp":301.886,"temp_min":301.886,"temp_max":301.886,"pressure":953.56,"sea_level":1027.97,"grnd_level":953.56,"humidity":49,"temp_kf":0},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01d"}],"clouds":{"all":0},"wind":{"speed":4.57,"deg":87.0011},"rain":{},"sys":{"pod":"d"},"dt_txt":"2017-10-30 06:00:00"},{"dt":1509354000,"main":{"temp":302.78,"temp_min":302.78,"temp_max":302.78,"pressure":950.67,"sea_level":1024.75,"grnd_level":950.67,"humidity":39,"temp_kf":0},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01d"}],"clouds":{"all":0},"wind":{"speed":4.81,"deg":75.5072},"rain":{},"sys":{"pod":"d"},"dt_txt":"2017-10-30 09:00:00"},{"dt":1509364800,"main":{"temp":300.639,"temp_min":300.639,"temp_max":300.639,"pressure":949.98,"sea_level":1024.08,"grnd_level":949.98,"humidity":37,"temp_kf":0},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"02d"}],"clouds":{"all":8},"wind":{"speed":3.76,"deg":69.5011},"rain":{},"sys":{"pod":"d"},"dt_txt":"2017-10-30 12:00:00"},{"dt":1509375600,"main":{"temp":295.532,"temp_min":295.532,"temp_max":295.532,"pressure":951.78,"sea_level":1026.44,"grnd_level":951.78,"humidity":43,"temp_kf":0},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01n"}],"clouds":{"all":0},"wind":{"speed":3.57,"deg":75.0019},"rain":{},"sys":{"pod":"n"},"dt_txt":"2017-10-30 15:00:00"},{"dt":1509386400,"main":{"temp":292.265,"temp_min":292.265,"temp_max":292.265,"pressure":952.33,"sea_level":1027.22,"grnd_level":952.33,"humidity":53,"temp_kf":0},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01n"}],"clouds":{"all":0},"wind":{"speed":2.77,"deg":68.5041},"rain":{},"sys":{"pod":"n"},"dt_txt":"2017-10-30 18:00:00"},{"dt":1509397200,"main":{"temp":289.693,"temp_min":289.693,"temp_max":289.693,"pressure":951.47,"sea_level":1026.42,"grnd_level":951.47,"humidity":60,"temp_kf":0},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01n"}],"clouds":{"all":0},"wind":{"speed":2.72,"deg":68.0013},"rain":{},"sys":{"pod":"n"},"dt_txt":"2017-10-30 21:00:00"},{"dt":1509408000,"main":{"temp":287.247,"temp_min":287.247,"temp_max":287.247,"pressure":951.36,"sea_level":1026.42,"grnd_level":951.36,"humidity":73,"temp_kf":0},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01n"}],"clouds":{"all":0},"wind":{"speed":1.61,"deg":86.0036},"rain":{},"sys":{"pod":"n"},"dt_txt":"2017-10-31 00:00:00"},{"dt":1509418800,"main":{"temp":293.526,"temp_min":293.526,"temp_max":293.526,"pressure":952.78,"sea_level":1027.74,"grnd_level":952.78,"humidity":59,"temp_kf":0},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01d"}],"clouds":{"all":0},"wind":{"speed":1.87,"deg":97.0013},"rain":{},"sys":{"pod":"d"},"dt_txt":"2017-10-31 03:00:00"},{"dt":1509429600,"main":{"temp":301.314,"temp_min":301.314,"temp_max":301.314,"pressure":952.21,"sea_level":1026.52,"grnd_level":952.21,"humidity":46,"temp_kf":0},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01d"}],"clouds":{"all":0},"wind":{"speed":3.26,"deg":90.5023},"rain":{},"sys":{"pod":"d"},"dt_txt":"2017-10-31 06:00:00"},{"dt":1509440400,"main":{"temp":302.385,"temp_min":302.385,"temp_max":302.385,"pressure":949.3,"sea_level":1023.4,"grnd_level":949.3,"humidity":37,"temp_kf":0},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01d"}],"clouds":{"all":0},"wind":{"speed":4.52,"deg":80.5064},"rain":{},"sys":{"pod":"d"},"dt_txt":"2017-10-31 09:00:00"},{"dt":1509451200,"main":{"temp":300.145,"temp_min":300.145,"temp_max":300.145,"pressure":948.84,"sea_level":1022.98,"grnd_level":948.84,"humidity":34,"temp_kf":0},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01d"}],"clouds":{"all":0},"wind":{"speed":3.51,"deg":72.0009},"rain":{},"sys":{"pod":"d"},"dt_txt":"2017-10-31 12:00:00"},{"dt":1509462000,"main":{"temp":293.279,"temp_min":293.279,"temp_max":293.279,"pressure":950.76,"sea_level":1025.41,"grnd_level":950.76,"humidity":42,"temp_kf":0},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01n"}],"clouds":{"all":0},"wind":{"speed":3.24,"deg":70.504},"rain":{},"sys":{"pod":"n"},"dt_txt":"2017-10-31 15:00:00"},{"dt":1509472800,"main":{"temp":289.752,"temp_min":289.752,"temp_max":289.752,"pressure":951.56,"sea_level":1026.46,"grnd_level":951.56,"humidity":52,"temp_kf":0},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01n"}],"clouds":{"all":0},"wind":{"speed":2.81,"deg":62.5023},"rain":{},"sys":{"pod":"n"},"dt_txt":"2017-10-31 18:00:00"},{"dt":1509483600,"main":{"temp":287.875,"temp_min":287.875,"temp_max":287.875,"pressure":950.45,"sea_level":1025.45,"grnd_level":950.45,"humidity":54,"temp_kf":0},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01n"}],"clouds":{"all":0},"wind":{"speed":2.71,"deg":53.0005},"rain":{},"sys":{"pod":"n"},"dt_txt":"2017-10-31 21:00:00"},{"dt":1509494400,"main":{"temp":286.106,"temp_min":286.106,"temp_max":286.106,"pressure":950.59,"sea_level":1025.74,"grnd_level":950.59,"humidity":65,"temp_kf":0},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01n"}],"clouds":{"all":0},"wind":{"speed":2.02,"deg":76.0073},"rain":{},"sys":{"pod":"n"},"dt_txt":"2017-11-01 00:00:00"},{"dt":1509505200,"main":{"temp":293.213,"temp_min":293.213,"temp_max":293.213,"pressure":952.46,"sea_level":1027.58,"grnd_level":952.46,"humidity":50,"temp_kf":0},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01d"}],"clouds":{"all":0},"wind":{"speed":2.51,"deg":98.001},"rain":{},"sys":{"pod":"d"},"dt_txt":"2017-11-01 03:00:00"},{"dt":1509516000,"main":{"temp":300.723,"temp_min":300.723,"temp_max":300.723,"pressure":952.19,"sea_level":1026.64,"grnd_level":952.19,"humidity":43,"temp_kf":0},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01d"}],"clouds":{"all":0},"wind":{"speed":3.46,"deg":87.5072},"rain":{},"sys":{"pod":"d"},"dt_txt":"2017-11-01 06:00:00"},{"dt":1509526800,"main":{"temp":302.105,"temp_min":302.105,"temp_max":302.105,"pressure":949.51,"sea_level":1023.75,"grnd_level":949.51,"humidity":35,"temp_kf":0},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01d"}],"clouds":{"all":0},"wind":{"speed":3.97,"deg":74.0005},"rain":{},"sys":{"pod":"d"},"dt_txt":"2017-11-01 09:00:00"},{"dt":1509537600,"main":{"temp":299.724,"temp_min":299.724,"temp_max":299.724,"pressure":949.2,"sea_level":1023.35,"grnd_level":949.2,"humidity":33,"temp_kf":0},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01d"}],"clouds":{"all":0},"wind":{"speed":3.21,"deg":69.0024},"rain":{},"sys":{"pod":"d"},"dt_txt":"2017-11-01 12:00:00"},{"dt":1509548400,"main":{"temp":292.637,"temp_min":292.637,"temp_max":292.637,"pressure":951.29,"sea_level":1026.06,"grnd_level":951.29,"humidity":41,"temp_kf":0},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01n"}],"clouds":{"all":0},"wind":{"speed":3.42,"deg":77.0006},"rain":{},"sys":{"pod":"n"},"dt_txt":"2017-11-01 15:00:00"}],"city":{"id":1259652,"name":"Pimpri","coord":{"lat":18.6167,"lon":73.8},"country":"IN","population":1284606}}
        //{"city":{"id":524901,"name":"Moscow","coord":{"lon":37.6156,"lat":55.7522},"country":"RU","population":0},"cod":"200","message":0.0942944,"cnt":14,"list":[{"dt":1508835600,"temp":{"day":-1,"min":-5.91,"max":-1,"night":-5.91,"eve":-1,"morn":-1},"pressure":1026.26,"humidity":67,"weather":[{"id":800,"main":"Clear","description":"sky is clear","icon":"01d"}],"speed":1.97,"deg":339,"clouds":48,"snow":0.01},{"dt":1508922000,"temp":{"day":0.08,"min":-7.99,"max":0.28,"night":-7.53,"eve":-4.04,"morn":-7.99},"pressure":1027.35,"humidity":80,"weather":[{"id":800,"main":"Clear","description":"sky is clear","icon":"01d"}],"speed":1.76,"deg":293,"clouds":8,"snow":0.01},{"dt":1509008400,"temp":{"day":-0.7,"min":-5.82,"max":-0.65,"night":-2.99,"eve":-2.44,"morn":-5.82},"pressure":1013.5,"humidity":78,"weather":[{"id":600,"main":"Snow","description":"light snow","icon":"13d"}],"speed":3.21,"deg":149,"clouds":20,"snow":0.21},{"dt":1509094800,"temp":{"day":-0.88,"min":-4.67,"max":-0.5,"night":-4.67,"eve":-1.14,"morn":-2.85},"pressure":999.06,"humidity":78,"weather":[{"id":600,"main":"Snow","description":"light snow","icon":"13d"}],"speed":5.11,"deg":95,"clouds":88,"snow":1.18},{"dt":1509181200,"temp":{"day":-1.11,"min":-8,"max":-1.11,"night":-8,"eve":-5.75,"morn":-2.22},"pressure":998.77,"humidity":0,"weather":[{"id":600,"main":"Snow","description":"light snow","icon":"13d"}],"speed":4,"deg":276,"clouds":42,"snow":0.1},{"dt":1509267600,"temp":{"day":-2.25,"min":-8.63,"max":-2.25,"night":-8.63,"eve":-7.93,"morn":-4.97},"pressure":994.81,"humidity":0,"weather":[{"id":600,"main":"Snow","description":"light snow","icon":"13d"}],"speed":2.31,"deg":74,"clouds":67,"snow":0.06},{"dt":1509354000,"temp":{"day":-0.82,"min":-5.82,"max":4.32,"night":4.32,"eve":1.9,"morn":-5.82},"pressure":991.58,"humidity":0,"weather":[{"id":600,"main":"Snow","description":"light snow","icon":"13d"}],"speed":7.37,"deg":183,"clouds":94,"rain":0.46,"snow":1.33},{"dt":1509440400,"temp":{"day":5.75,"min":2.07,"max":5.75,"night":2.07,"eve":3.94,"morn":4.78},"pressure":991.68,"humidity":0,"weather":[{"id":500,"main":"Rain","description":"light rain","icon":"10d"}],"speed":9.05,"deg":257,"clouds":68,"rain":1.86},{"dt":1509526800,"temp":{"day":5.44,"min":1.82,"max":5.44,"night":4.51,"eve":4.43,"morn":1.82},"pressure":1005.57,"humidity":0,"weather":[{"id":500,"main":"Rain","description":"light rain","icon":"10d"}],"speed":5.58,"deg":217,"clouds":95,"rain":0.61},{"dt":1509613200,"temp":{"day":6.52,"min":3.85,"max":6.52,"night":3.85,"eve":4.85,"morn":4.13},"pressure":1011.2,"humidity":0,"weather":[{"id":500,"main":"Rain","description":"light rain","icon":"10d"}],"speed":5.88,"deg":212,"clouds":73,"rain":0.4},{"dt":1509699600,"temp":{"day":6,"min":1.02,"max":6,"night":2.09,"eve":1.95,"morn":1.02},"pressure":1017.75,"humidity":0,"weather":[{"id":500,"main":"Rain","description":"light rain","icon":"10d"}],"speed":5.79,"deg":172,"clouds":5},{"dt":1509786000,"temp":{"day":5.97,"min":3.35,"max":5.97,"night":5.33,"eve":4.7,"morn":3.35},"pressure":1020.36,"humidity":0,"weather":[{"id":500,"main":"Rain","description":"light rain","icon":"10d"}],"speed":4.91,"deg":165,"clouds":98,"rain":0.93},{"dt":1509872400,"temp":{"day":9.87,"min":7.22,"max":9.87,"night":7.5,"eve":8.56,"morn":7.22},"pressure":1017.28,"humidity":0,"weather":[{"id":500,"main":"Rain","description":"light rain","icon":"10d"}],"speed":5.06,"deg":179,"clouds":93,"rain":0.68},{"dt":1509958800,"temp":{"day":6.71,"min":4.92,"max":6.71,"night":5.46,"eve":6.23,"morn":4.92},"pressure":1018.5,"humidity":0,"weather":[{"id":500,"main":"Rain","description":"light rain","icon":"10d"}],"speed":6.72,"deg":165,"clouds":61,"rain":0.23}]}
    }
  }
  componentDidMount() {

  }

  getWeatherInfo(){
    if(this.state.location.length == 2){
      WeatherService.getWeatherData5X3(this.state.location[0],this.state.location[1]).then(data => {
            console.log("SUCCESS",data);
            //this.setState({postContent: data})
        },(err) =>{
            console.log("ERROR",err);
        });
    }
    //console.log("changed",this.state.location);
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
            <RadarChartPressure radar={this.state.weatherData.list}></RadarChartPressure>   
          </div>
            
        </div>
        <div className="item">
          <LineChartTem line={this.state.weatherData.list}></LineChartTem>
          <hr className="bisector"/>
          <AreaChartHumidity area={this.state.weatherData.list}></AreaChartHumidity>   
        </div>
      </div>
    );
  }
}

export default Weather;