import React, { Component } from "react";
import "../css/WeatherView.scss"
import { WeatherApi } from "../../apis/js/WeatherApi";
import WeatherWidget from "./WeatherWidget";
import WeatherCityBreadCrumb from "./WeatherCityBreadCrumb";
import { Constants } from "../../assets/js/WeatherConstants";

class WeatherMainContainer extends Component {

 constructor(props) {
  super(props);
  this.state = {
     weatherData:{}
   };
  }

  afterGettingWeatherData=(data)=>{
    this.setState((prevState) => ({ 
      weatherData: {...prevState.weatherData,...data}
   }))
  }

  getWeatherServiceData = (location) => {
    WeatherApi.getCurrentWeather(location,this.afterGettingWeatherData);
 }

  componentDidMount() {
    WeatherApi.getCurrentWeather(Constants.cities[0],this.afterGettingWeatherData);
   }
 
  render() {
    return (
        <React.Fragment> 
          <div className="weatherWidgetMain">
             <WeatherCityBreadCrumb callWeatherServices={this.getWeatherServiceData}></WeatherCityBreadCrumb>
             {(Object.keys(this.state.weatherData).length>0) && <WeatherWidget weatherDatas={this.state.weatherData}></WeatherWidget>} 
           </div>
      </React.Fragment>
    )
  }
}
export default WeatherMainContainer;
