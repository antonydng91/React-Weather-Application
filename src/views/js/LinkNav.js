

import {NavLink,Outlet} from 'react-router-dom';


export default function LinkForNav(){
  return(<>  <section className="weather_widget_tab_container" style={{width:'100%'}}><NavLink to="/"  className={({isActive})=>isActive?"highlighted_city_tab weather_widget_tab":"weather_widget_tab"}>Weather Data</NavLink><NavLink className={({isActive})=>isActive?"highlighted_city_tab weather_widget_tab":"weather_widget_tab"} to="/weatherGallery">Weather Gallery</NavLink></section>
  
  <Outlet></Outlet></>)
}