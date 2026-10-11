import WeatherApp from './WeatherApp'
import BoxInfo from './BoxInfo';
import { useState } from 'react';


export default function RealApp(){
    let [weatherinfo,setweatherinfo]=useState({
        city:"Jalabad",
    feels_like
: 
301.88,
humidity
: 
29,
temp
: 
303.2,
temp_max: 
303.2,
temp_min: 
303.2,

description
: 
"clear sky"
    })

    let update=(newupdate)=>{
      setweatherinfo(newupdate)
    }
    return(
        <div>
        <h2 style={{textAlign:"center" ,marginTop:"0px", paddingTop:"20px"}}>Weather App </h2>
      <WeatherApp UpdateInfo={update}/>
      <BoxInfo info={weatherinfo}/>
        </div>
    )
}