import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import "./Box.css";
import Typography from '@mui/material/Typography';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';

export default function BoxInfo({info}){
       let Rainy_URL="https://images.unsplash.com/photo-1620385019253-b051a26048ce?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D"
       let Hot_URL="https://plus.unsplash.com/premium_photo-1733342564921-f1444441e694?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D"
       let Cold_URL="https://plus.unsplash.com/premium_photo-1671127303910-754ac2224c7a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D"
    return(<div className='Center'>
        <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={
           info.humidity>80 ? Rainy_URL :info.temp>15 ? Hot_URL:Cold_URL
        }
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city}
          {
          info.humidity>80 ? <ThunderstormIcon/> :info.temp>15 ? <WbSunnyIcon/>:<AcUnitIcon/>
          }
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
        <p>city: {info.city}</p>
        <p>feels_like:  {info.feels_like}&deg;C</p>
         <p>humidity:  {info.humidity}</p>
         <p>temp:  {info.temp}&deg;C</p>
         <p>temp_max:  {info.temp_max}&deg;C</p>
            <p>temp_min: {info.temp_min}&deg;C</p>
            <p>The Weather can be describe as a <strong>{info.description}</strong> and feel like {info.feels_like}&deg;C</p>

        </Typography>
      </CardContent>
    </Card>
        
        </div>
        
    )
}