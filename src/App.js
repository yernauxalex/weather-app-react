import React, { useState } from 'react';
import WeatherApp from './pages/WeatherApp';
import { WeatherContext } from './services/WeatherContext';

function App() {
    const [weatherState, setWeatherState] = useState({
        data: {},
        isData: false
    });
    return (
        <WeatherContext.Provider value={{ weatherState, setWeatherState }}>
            <WeatherApp />
        </WeatherContext.Provider>
    );
}

export default App;
