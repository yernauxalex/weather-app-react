import React, { useContext } from "react";
import { WeatherContext } from "../services/WeatherContext";
import { Container } from "react-bootstrap";
import humidity from "../assets/icons/humidity.png";
import Clear from "../assets/icons/clear.png";
import Clouds from "../assets/icons/clouds.png";
import Rain from "../assets/icons/rain.png";
import Thunderstorm from "../assets/icons/thunderstorm.png";


function DisplayWeather() {
    const { weatherState } = useContext(WeatherContext);
    console.log("DisplayWeather: ", weatherState);
    const weatherData = weatherState.data;
    const tempWeather = weatherData.weather[0].main;
    const icon = tempWeather === "Clear" ? Clear : tempWeather === "Clouds" ? Clouds : tempWeather === "Rain" ? Rain : tempWeather === "Thunderstorm" ? Thunderstorm : null;
    const city = weatherState.city.charAt(0).toUpperCase() + weatherState.city.slice(1);
    return (
        <Container className="d-flex flex-row align-items-center justify-content-start display-weather">
            <ul>
                <li><h3>{city}, {weatherState.country}</h3></li>
                <li id="temp" style={{ fontSize: "2rem" }}>{weatherData.main.temp}°C</li>
                <li>{weatherData.weather[0].description}</li>
                <li><img src={humidity} alt="humidity" className="humidity-icon" />{weatherData.main.humidity}%</li>
                <li>{weatherData.wind.speed}km/h</li>
            </ul>
            {icon ? <div className="weather-icon"><img src={icon} alt="weather icon" /></div> : null}

        </Container>

    )
}

export default DisplayWeather