const mapper={ //the key represents the code for choosing each icon.Icons are chosen from https://openweathermap.org/
'01d':'sunnyDay',
'02d':'fewClouds',
'03d':'scatterdClouds',
'04d':'brokenClouds',
'09d':'showerRain',
'10d':'rainyDay',
'11d':'thunderStorm',
'13d':'snow',
'50d':'mist',
'01n':'clearNight',
'02n':'fewCloudsNight',
'03n':'scatterdClouds',
'04n':'brokenClouds',
'09n':'showerRain',
'10n':'rainyNight',
'11n':'thunderStorm',
'13n':'snow',
'50n':'mist',
}
const getWeatherIconClass = (iconClass) =>{
  return mapper[iconClass];
}
  
export const IconMapper = {
    getWeatherIconClass
};
