
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import "./Weather.css"
import { useState } from 'react';

export default function WeatherApp({UpdateInfo}) {
    let [weather, setweather] = useState("");
    let [error,seterror]=useState(false);

    let api_url = "https://api.openweathermap.org/data/2.5/weather";
    let api_key = "1f26cea3eb87f3c035007a689eaba3b0";

    let weatherinfo = async () => {
    try{
        let response = await fetch(`${api_url}?q=${weather}&appid=${api_key}`);
        let data =await response.json();
        console.log(data);
        let resutl = {
            city:weather,
            temp: data.main.temp,
            temp_max: data.main.temp_max,
            temp_min: data.main.temp_min,
            humidity: data.main.humidity,
            feels_like: data.main.feels_like,
            weather:data.weather[0].description,
        }
        console.log(resutl)
        return resutl;
    }catch(err){
        throw err
        }
    }

    let handle = (evt) => {
        setweather(evt.target.value);
    }

    let handlesub = async (evt) => {
        try{
         evt.preventDefault();
         console.log(weather);
         setweather("");
       let newInfo= await weatherinfo();
       UpdateInfo(newInfo);}
       catch(err){
        seterror(true)
       }
        
      
    }
    return (
        <div className="Div">
            <form action="" onSubmit={handlesub}>
                <TextField id="filled-basic" label="Weather Name" variant="outlined" value={weather} onChange={handle} style={{backgroundColor:"rgba(193, 224, 224, 0.5)"}} />
                <br /><br /> <br />
                <Button variant="contained" type='submit' endIcon={<SendIcon />}>
                    Send
                </Button>
                {error ? <Alert severity="error">This is an error Alert.</Alert>:""}
            </form>
            

        </div>
    );
}