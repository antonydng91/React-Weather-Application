import React, { useState} from "react";
import { WeatherApi } from "../../apis/js/WeatherApi";
import { Utilities } from "../../assets/js/Utills";
import WeatherWidget from "./WeatherWidget";
import WeatherCityBreadCrumb from "./WeatherCityBreadCrumb";
import "../css/WeatherView.scss";

export default function WeatherMainContainer() {

  const [weatherData,setWeatherData]=useState({})


  const afterGettingWeatherData=(data)=>{
    setWeatherData(Utilities.deepCopy(data));
  }

 const getWeatherServiceData = (location) => {
    WeatherApi.getCurrentWeather(location,afterGettingWeatherData);
 }

   return (
        <> 
          <div className="weather_widget_main">
             <WeatherCityBreadCrumb callWeatherServices={getWeatherServiceData}></WeatherCityBreadCrumb>
             {(Object.keys(weatherData).length>0) && <WeatherWidget weatherDatas={weatherData}></WeatherWidget>} 
           </div>
      </>
    )
  
}

