import React, { useContext, useState } from 'react';
import { WeatherContext } from '../services/WeatherContext';
import DisplayWeather from '../components/DisplayWeather';
import SearchBar from '../components/SearchBar';
import StyledWeatherApp from '../styles/styledComponents/StyledWeatherApp';
import defaultbg from '../assets/weatherapp-background/defaultbg.jpg';
import clear from '../assets/weatherapp-background/clear.jpg';
import cloudy from '../assets/weatherapp-background/cloudy.jpg';
import rain from '../assets/weatherapp-background/rain.jpg';
import storm from '../assets/weatherapp-background/storm.jpg';
import snow from '../assets/weatherapp-background/snow.jpg';
import fog from '../assets/weatherapp-background/fog.jpg';
import mist from '../assets/weatherapp-background/mist.jpg';
import haze from '../assets/weatherapp-background/haze.jpg';
import dust from '../assets/weatherapp-background/dust.jpg';
import drizzle from '../assets/weatherapp-background/drizzle.jpg';


// const Weatherapp = styled.section`
// width: 100%;
// height: 100vh;
//     background-image: url(${props => props.background});
// `

function WeatherApp() {
    const { weatherState } = useContext(WeatherContext);
    const [background, setBackground] = useState(defaultbg);

    // Todo refacto en switch/case wrap dans un useEffect cf. Footer.jsx 
    if (weatherState.isData) {
        const weather = weatherState.data.weather[0];
        if (weather.main === 'Clear' && background !== clear) {
            setBackground(clear);
        } else if (weather.main === 'Clouds' && background !== cloudy) {
            setBackground(cloudy);
        } else if (weather.main === 'Rain' && background !== rain) {
            setBackground(rain);
        } else if (weather.main === 'Thunderstorm' && background !== storm) {
            setBackground(storm);
        } else if (weather.main === 'Snow' && background !== snow) {
            setBackground(snow);
        } else if (weather.main === 'Haze' && background !== haze) {
            setBackground(haze);
        } else if (weather.main === 'Dust' && background !== dust) {
            setBackground(dust);
        } else if (weather.main === 'Mist' && background !== mist) {
            setBackground(mist);
        } else if (weather.main === 'Drizzle' && background !== drizzle) {
            setBackground(drizzle);
        } else if (weather.main === 'Fog' && background !== fog) {
            setBackground(fog);
        }
    }
    return (
        <StyledWeatherApp background={background}>
            <h2>Weather App</h2>
            <SearchBar />
            {weatherState.isData ? <DisplayWeather /> : null}
        </StyledWeatherApp>
    )
}
export default WeatherApp