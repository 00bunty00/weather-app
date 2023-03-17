import { FC } from 'react'
import { SmContainer, Location, PresentTime, TempDiv, Temperature, Weather, Image, InfoDiv, InfoLeft, InfoRight } from './Components.styles';

interface Props {
    info: any;
}

const WeatherInfo: FC<Props> = ({ info }) => {

    const { temp, high, low, weather, description, icon, wind, windDirection, humidity, pressure, visibility, sunrise, sunset, time, city, country } = info;

    const imgLink = `https://openweathermap.org/img/wn/${icon}@2x.png`

    return (
        <>
            <SmContainer>
                <Location>{city}, {country}</Location>
                <PresentTime>As of {time}</PresentTime>
                <TempDiv><Temperature>{temp}°</Temperature> <Weather><Image backgroundImage={imgLink}/>{weather}</Weather></TempDiv>
                <div>{description}</div>
            </SmContainer>
            <InfoDiv><InfoLeft>High/Low</InfoLeft><InfoRight>{high}/{low}</InfoRight></InfoDiv>
            <InfoDiv><InfoLeft>Wind</InfoLeft><InfoRight>{wind} km/hr</InfoRight></InfoDiv>
            <InfoDiv><InfoLeft>Humidity</InfoLeft><InfoRight>{humidity}%</InfoRight></InfoDiv>
            <InfoDiv><InfoLeft>Wind Direction</InfoLeft><InfoRight>{windDirection}° deg</InfoRight></InfoDiv>
            <InfoDiv><InfoLeft>Pressure</InfoLeft><InfoRight>{pressure} hPa</InfoRight></InfoDiv>
            <InfoDiv><InfoLeft>Sunrise</InfoLeft><InfoRight>{sunrise}</InfoRight></InfoDiv>
            <InfoDiv><InfoLeft>Visibility</InfoLeft><InfoRight>{visibility} km</InfoRight></InfoDiv>
            <InfoDiv><InfoLeft>Sunset</InfoLeft><InfoRight>{sunset}</InfoRight></InfoDiv>
        </>
    )
}

export default WeatherInfo