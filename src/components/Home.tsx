import { FC, useState, FormEvent} from 'react';
import WeatherInfo from './WeatherInfo';
import axios from 'axios';
import { Heading, Button, Container, Input } from './Components.styles';

interface Location {
    city: string;
    country: string
}

const Home: FC = () => {

    const apiKey = process.env.REACT_APP_NEWS_API

    const [location, setLocation] = useState<Location>({
        city: "",
        country: ""
    })

    const [info, setInfo] = useState({})

    const tellTime = (unix:number) => {
        const date = new Date(unix * 1000);
        return formatTime(date);
    }

    const formatTime = (date:Date) => {
        const hours = date.getHours();
        const minutes = "0" + date.getMinutes();
        const seconds = "0" + date.getSeconds();
        if(hours>12){
            let formattedTime = "" + (hours-12) + ':' + minutes.slice(-2) + ':' + seconds.slice(-2) + " PM";
            return formattedTime;
        } else {
            let formattedTime = "" + hours + ':' + minutes.slice(-2) + ':' + seconds.slice(-2) + " AM";
            return formattedTime;
        }
        
    }
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        axios.get('https://api.openweathermap.org/data/2.5/weather', {
            params: {
                q: `${location.city},${location.country}`,
                appid: apiKey
            }
        })
        .then((response) => {
            const date = new Date();
            const time = formatTime(date);
            setInfo({
                temp: Math.floor(response.data.main.temp)-273,
                high: Math.floor(response.data.main.temp_max)-273,
                low: Math.floor(response.data.main.temp_min)-273,
                weather: response.data.weather[0].main,
                description: response.data.weather[0].description,
                icon: response.data.weather[0].icon,
                wind:Math.floor(response.data.wind.speed),
                windDirection: response.data.wind.deg,
                humidity: response.data.main.humidity,
                pressure: response.data.main.pressure,
                visibility: response.data.visibility/1000,
                sunrise: tellTime(response.data.sys.sunrise),
                sunset: tellTime(response.data.sys.sunset),
                time: time,
                city: response.data.name,
                country: response.data.sys.country.toUpperCase()
            })
            console.log(response.data)
        }).catch((err)=> {
            alert(err.response.data.message + ". Recheck your location")
        })
    }

  return (
    <>
        <Container>
            <Heading>Weather App</Heading>
            <form onSubmit={(e) => handleSubmit(e)}>
                <Input type="text" id="city" name= "city" placeholder='City' onChange={(e)=> setLocation({...location, city:e.target.value})}/>
                <Input type="text" id="country" name= "country" placeholder='Country' onChange={(e)=> setLocation({...location, country:e.target.value.slice(0, 2).toLowerCase()})}/>
                <Button type='submit'>Submit</Button>
            </form>
            <WeatherInfo info={info}/>
        </Container>
    </>
  )
}

export default Home
