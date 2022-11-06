import React, { Component } from "react";
import './App.css';
import WeatherMainContainer from "./views/js/WeatherMainContainer";

class App extends Component  {

  constructor(props) {
    super(props);
   }

   render() {
      return (
        <div className="App">
        <WeatherMainContainer></WeatherMainContainer>
        </div>
      );
    }
}

export default App;
