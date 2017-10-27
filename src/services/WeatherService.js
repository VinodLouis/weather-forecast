import axios from "axios";

export default{
    getWeatherData5X3:function(lat,lon){
        return axios.get("http://api.openweathermap.org/data/2.5/forecast?lat="+lat+"&lon="+lon+"&appid=f5ba047355d7218604663c0d1a430082");
    }
}