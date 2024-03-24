import React from "react";
import './App.css';
import WeatherGallery from './views/js/WeatherGallery';
import WeatherMainContainer from "./views/js/WeatherMainContainer";
import LinkForNav from './views/js/LinkNav';

import {Provider} from 'react-redux';
import store from './store/store';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


export default function App() {


   const router = createBrowserRouter([
    {
      path: "/",
      element: <LinkForNav />,
   
      children: [
        {
          path: "/",
          element: <WeatherMainContainer />,
  
        },
        {
          path: "weatherGallery",
          element: <WeatherGallery />,
  
        },
      ],
    },
  ]);


      return (
        <div className="App">
            <div className="weather_widget_main">
              <Provider store={store}>   <RouterProvider router={router} /></Provider></div>
           
       </div>
      );
    
}

