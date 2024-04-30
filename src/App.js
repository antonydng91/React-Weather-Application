import React from "react";
import './App.css';
import WeatherMainContainer from "./views/components/WeatherMainContainer";

export default function App() {
  return (
        <div className="App">
            <div className="weather_widget_main">
              <div className="app-intro">Responsive weather application.Resize the browser window to see how the application behaves</div>
               <WeatherMainContainer />
             </div> 
       </div>
      );
    
}

