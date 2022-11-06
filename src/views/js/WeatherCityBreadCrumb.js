import React, { Component } from "react";
import "../css/WeatherView.scss";
import { Constants } from "../../assets/js/WeatherConstants";

class WeatherCityBreadCrumb extends Component {
  constructor(props) {
  super(props);
   this.state = {
     highligtedCityBredCrumb:Constants.cities[0],
     intervalId:null
   };
  }

  getTheWeatherData = (location) => {
    this.props.callWeatherServices(location);
    this.setState({highligtedCityBredCrumb:location})
  }

  setWeatherDataCall=()=>{
    const intervalId=setInterval(()=>{
     this.getTheWeatherData(this.state.highligtedCityBredCrumb);
    },Constants.weatherDataInterval*60000)
    this.setState({ intervalId:intervalId })
  }

  componentWillUnmount(){
    clearInterval(this.state.intervalId)
  }
  
  componentDidMount(){
    this.setWeatherDataCall();
  }

  render() {
    let highlightedCity=this.state.highligtedCityBredCrumb;
    let self=this;
     return (
        <React.Fragment> 
         <div className="weatherCityWidgetCont">
             {Constants.cities && Constants.cities.map(function (city,index) {
                  return (<div key={index}> <div className={`weatherCityWidget ${highlightedCity==city? "highligtedCityBredCrumb":""}`}  onClick={(e)=>{self.getTheWeatherData(e.target.textContent)}}>{city}</div></div>)
              })}
       
        </div>
      </React.Fragment>
    )
  }
}
export default WeatherCityBreadCrumb;
