import React, { useState,useEffect } from "react";
import { Constants } from "../../assets/js/Utills";
import "../css/WeatherView.scss";

export default function WeatherCityBreadCrumb(props) {

  const [highligtedCityTab,setHighligtedCityTab]= useState(Constants.cities[0]);


  const getTheWeatherData = (location) => {
    props.callWeatherServices(location);
    setHighligtedCityTab(location);
  }


  useEffect(()=>{
     getTheWeatherData(highligtedCityTab);
    const intervalId=setInterval(()=>{
      getTheWeatherData(highligtedCityTab);
     },Constants.weatherDataInterval*60000)

    return ()=>{
      clearInterval(intervalId)
    }
  },[])

     return (
        <> 
         <section className="weather_widget_tab_container">
             {Constants.cities && Constants.cities.map(function (city,index) {
                  return (<button key={index}  className={`weather_widget_tab ${highligtedCityTab===city ? "highlighted_city_tab":""}`}  onClick={(e)=>{getTheWeatherData(e.target.textContent)}}>{city}</button>)
              })}
          </section>
      </>
    )
  
}

