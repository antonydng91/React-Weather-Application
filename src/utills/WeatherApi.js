import Axios from "./Axios";
const KEY = "91a080ccc7b845d4736e184bca2c7cd9"; //https://openweathermap.org/
const getCurrentWeather = (location,callBackFunc) =>{
  Axios.get(`https://api.openweathermap.org/data/2.5/forecast`, {
    params: {
      q:location,
      units:'Metric',
      appid: KEY
    }
  }).then((res) => 
    callBackFunc(res.data)
 );
}
export const WeatherApi = {
  getCurrentWeather
};

