import React, { useState} from "react";
import { WeatherApi } from "../../apis/js/WeatherApi";
import { Utilities } from "../../assets/js/Utills";
import WeatherWidget from "./WeatherWidget";
import WeatherGallery from './WeatherGallery'
import WeatherCityBreadCrumb from "./WeatherCityBreadCrumb";
import "../css/WeatherView.scss";

export default function WeatherMainContainer() {

  const [weatherData,setWeatherData]=useState({})
  const [showGallery,setGalleryShow]=useState(false);

  const afterGettingWeatherData=(data)=>{
    setGalleryShow(false);
    setWeatherData(Utilities.deepCopy(data));
  }

 const getWeatherServiceData = (location) => {
    WeatherApi.getCurrentWeather(location,afterGettingWeatherData);
 }

 const imageGallery=(flag)=>{
  setGalleryShow(flag);
 }

   return (
        <> 
          <div className="weather_widget_main">
             <WeatherCityBreadCrumb showImageGallery={imageGallery} callWeatherServices={getWeatherServiceData}></WeatherCityBreadCrumb>
             {showGallery && <WeatherGallery></WeatherGallery>} {!showGallery && (Object.keys(weatherData).length>0) && <WeatherWidget weatherDatas={weatherData}></WeatherWidget>} 
           </div>
      </>
    )
  
}

