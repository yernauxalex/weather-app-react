import React, { useContext, useState } from "react";
import { WeatherContext } from "../services/WeatherContext";
import { Form, Button } from "react-bootstrap";
import { isoCode } from '../datas/isoCode';

// API Call
// Openweathermap API
async function getCoordinates(city, country) {
    return fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${city},${country}&limit=1&appid=${process.env.REACT_APP_WEATHER_API_KEY}`)
        .then(response => response.json())
}

async function getWeather(lat, lon) {
    return fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${process.env.REACT_APP_WEATHER_API_KEY}&units=metric`)
        .then(response => response.json())
}

// Cartes.io API
// async function createMap() {
//     return fetch(`https://cartes.io/api/maps/?title=weathermap&privacy=private&users_can_create_markers=no`, {
//         method: 'POST',

//     }).then(response => response.json())
// }
// async function createMapMarker(uuid, lat, lon) {
//     return fetch(`https://cartes.io/api/maps/${uuid}/markers?category=409&lat=${lat}&lng=${lon}`, {
//         method: 'POST',
//     }).then(response => response.json())
// }
// async function getMap(uuid) {
//     return fetch(`https://cartes.io/api/maps/${uuid}`).then(response => response.json())
// }

function SearchBar() {
    const [city, setCity] = useState('');
    const [country, setCountry] = useState('');
    const { setWeatherState } = useContext(WeatherContext);


    const onSubmit = async (e) => {

        e.preventDefault();
        console.log(city);
        console.log(country)
        await getCoordinates(city, country).then(data => {
            if (data.length === 0) {
                alert('City not found');
            }
            const lat = data[0].lat;
            const lon = data[0].lon;
            console.log(data);
            console.log(lat, lon);
            getWeather(lat, lon).then(data => {
                setWeatherState({
                    data: data,
                    city: city,
                    country: country,
                    isData: true
                });
                console.log(data);
            })
        });
    };

    const handleChange = (e) => {
        console.log("selected: " + e.target.value);
        setCountry(e.target.value);
    }

    return (
        <React.Fragment>

            <Form className="d-flex flex-row align-items-center justify-content-center" style={{ color: "white" }}>
                <Form.Label>City</Form.Label>
                <Form.Control type="text" placeholder="Enter city" onChange={(e) => setCity(e.target.value)} className="custom-form" />
                <Form.Select aria-label="Default select example" onChange={handleChange} className="custom-form">
                    {isoCode.map(({ value, label }) => (
                        <option key={value} value={value}>{label}</option>
                    ))}
                </Form.Select>
                <Button variant="dark" type="submit" onClick={onSubmit} className="custom-button">Search</Button>
            </Form>
        </React.Fragment>
    )
}
export default SearchBar