import React from "react";
import './App.css';
import WeatherGallery from './views/js/WeatherGallery';
import ImageAddRequest from './views/js/ImageAddRequest';
import WeatherMainContainer from "./views/js/WeatherMainContainer";

import {Provider} from 'react-redux';
import store from './store/store';
import {
  BrowserRouter,
  Switch,
  Route,
  NavLink
} from "react-router-dom";

export default function App() {
  return (
        <div className="App">
            <div className="weather_widget_main">
            <Provider store={store}>  
               <BrowserRouter >
             <section className="weather_widget_tab_container" style={{width:'100%'}}>
                  <NavLink to="/" exact className="weather_widget_tab"  activeClassName="highlighted_city_tab">Weather Data</NavLink>
                  <NavLink to="/weatherGallery" className="weather_widget_tab" activeClassName="highlighted_city_tab">Weather Gallery</NavLink>
                  <NavLink to="/addToList" className="weather_widget_tab" activeClassName="highlighted_city_tab">Add Image</NavLink>
              </section>
                <Switch>
                <Route path="/WeatherGallery">
                  <WeatherGallery />
                </Route>
                <Route path="/addToList">
                  <ImageAddRequest />
                </Route>
                <Route path="/" >
                  <WeatherMainContainer />
                </Route>
              </Switch>
        </BrowserRouter>
        </Provider>       
       </div> </div>
      );
    
}

