import React, { Component } from "react";
import "../css/WeatherView.scss"
import { IconMapper } from "../js/WeatherIconMapper";
import { Constants } from "../../assets/js/WeatherConstants";

class WeatherWidget extends Component {

  constructor(props) {
  super(props);
  this.state = {
    requiredWeatherData:{todaysWeather:{},forcastedWeatherCont:[]}
   };
  }

  componentDidMount() {
   this.extractRequiredWeather(this.props.weatherDatas);
  }

  componentDidUpdate() {
    if(this.state.requiredWeatherData.city && (this.props.weatherDatas.city.name !==this.state.requiredWeatherData.city)){
      this.extractRequiredWeather(this.props.weatherDatas);
    }
   }

   getTheWeatherForcast=(referncetimeUTC, weatherData) =>{
    let forcastDateTime = [];
    for (let i = 0; i < Constants.numberOfForcast; i++) {
        var currDay = new Date(referncetimeUTC);
        currDay.setDate(currDay.getDate() + (i + 1));
        forcastDateTime.push(currDay.getTime());
    }
    const result = weatherData.list.filter((currData) => {
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


  extractRequiredWeather=(weatherData)=>{
    if(Object.keys(weatherData).length>0){ // iterating the weather date to get the current and forcasted weather
        let todaysWeather={temp:weatherData.list[0].main.temp,wetherDesc:weatherData.list[0].weather[0].main,weatherIcon:weatherData.list[0].weather[0].icon},//gets the current weathefr
         referncetimeUTC=weatherData.list[0].dt_txt,
         forcastWeather=this.getTheWeatherForcast(referncetimeUTC,weatherData), //gets the forcasted weather 
         finalWeatherData={todaysWeather:todaysWeather,forcastedWeatherCont:forcastWeather};
        this.setState((prevState) => ({ 
            requiredWeatherData: {...prevState.requiredWeatherData,...finalWeatherData,city:weatherData.city.name}
         }))
    }
 }
 
  render() {
 
    let iconClasses= IconMapper.getWeatherIconClass(this.state.requiredWeatherData.todaysWeather?.weatherIcon);
    return (
        <React.Fragment> 
      <div className="weatherCard">
         <div className="currentWeatherContainer">
           <span>Today</span>
           <div className="currentWeatherDetail" >
           <div className={iconClasses}></div> 
           <div className="lsm1"><div className="fontWeight600 fontSize40">{this.state.requiredWeatherData.todaysWeather?.temp}<sup className="fontSize30">o</sup></div>
           <span>{this.state.requiredWeatherData.todaysWeather?.wetherDesc}</span></div>
            </div>
           </div>
              <div className="forcastedWeatherCont">
                {this.state.requiredWeatherData.forcastedWeatherCont.map(function (data,index) {
                  return (<div key={index} className="forcastedWeatherDash"> <span>{data.forcastDay}</span>
                  <div className="tsm1 forcastedDataSec">
               <div className={IconMapper.getWeatherIconClass(data.weatherIcon)}></div>
              <div><div className="boldText400 fontSize30">{data.temp}<sup className="">o</sup></div>
              
                </div></div></div>)
              })}
              </div>
         </div> </React.Fragment>
    )
  }
}
export default WeatherWidget;
