import React, { useState,useEffect } from "react";

import { IconMapper } from "../../utills/WeatherIconMapper";
import { Constants } from "../../assets/js/WeatherConstants";
import { Utilities } from "../../assets/js/Utills";
import "../css/WeatherView.scss";


export default function WeatherWidget(props)  {

  const [requiredWeatherData,setrequiredWeatherData]=useState({todaysWeather:{},forcastedWeatherCont:[],city:""})


  useEffect(()=>{
    if((props.weatherDatas.city.name !==requiredWeatherData.city)){
      extractRequiredWeather(props.weatherDatas);
    }
  },[props.weatherDatas.city.name]) 


   const getTheWeatherForcast=(referncetimeUTC, weatherData) =>{
    const weather=Utilities.deepCopy(weatherData);
    let forcastDateTime = [];
    for (let i = 0; i < Constants.numberOfForcast; i++) {
        var currDay = new Date(referncetimeUTC);
        currDay.setDate(currDay.getDate() + (i + 1));
        forcastDateTime.push(currDay.getTime());
    }
    const result = weather.list.filter((currData) => {
        return forcastDateTime.indexOf(new Date(currData.dt_txt).getTime()) > -1
    });
    let forcastWeather = [];
    for (let obj of result) {
        forcastWeather.push({
            temp: obj.main.temp,
            wetherDesc: obj.weather[0].main,
            weatherIcon: obj.weather[0].icon,
            forcastDay: Constants.weekday[new Date(obj.dt_txt).getDay()]
        })
    }
    return forcastWeather;
  }


  function extractRequiredWeather(weatherData){
    if(Object.keys(weatherData).length>0){ // iterating the weather date to get the current and forcasted weather
        let todaysWeather={temp:weatherData.list[0].main.temp,wetherDesc:weatherData.list[0].weather[0].main,weatherIcon:weatherData.list[0].weather[0].icon},//gets the current weathefr
         referncetimeUTC=weatherData.list[0].dt_txt,
         forcastWeather=getTheWeatherForcast(referncetimeUTC,weatherData), //gets the forcasted weather 
         finalWeatherData={todaysWeather:todaysWeather,forcastedWeatherCont:forcastWeather,city:weatherData.city.name};
         setrequiredWeatherData( {...Utilities.deepCopy(finalWeatherData)} ) 
    }
 }
 
 
    return (
     
      <section className="weather_card">
         <section className="current_weather_container col-12">
           <span>Today</span>
           <div className="current_weather_details" >
           <div className={IconMapper.getWeatherIconClass(requiredWeatherData.todaysWeather?.weatherIcon)}></div> 
           <div className="lsm1"><div className="fontWeight600 fontSize40">{requiredWeatherData.todaysWeather?.temp}<sup className="fontSize30">o</sup></div>
           <span>{requiredWeatherData.todaysWeather?.wetherDesc}</span></div>
            </div>
           </section>
              <section className="forcasted_weather_cont row">
                {requiredWeatherData.forcastedWeatherCont.map(function (data,index) {
                  return (<section key={index} className="forcasted_weather_dash  col-s-6  col-xl-3"> <span>{data.forcastDay}</span>
                  <div className="tsm1 forcasted_data_sect">
               <div className={IconMapper.getWeatherIconClass(data.weatherIcon)}></div>
              <div><div className="boldText400 fontSize30">{data.temp}<sup className="">o</sup></div>
              
                </div></div></section>)
              })}
              </section>
         </section>
    )
  
}

