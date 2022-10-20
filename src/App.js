import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import WeatherApp from './pages/WeatherApp';
import { WeatherContext } from './services/WeatherContext';
import './App.css';

function App() {
    const [weatherState, setWeatherState] = useState({
        data: {},
        isData: false
    });
    return (
        <div className="App">
            <WeatherContext.Provider value={{ weatherState, setWeatherState }}>
                <Header />
                <WeatherApp />
                <Footer />
            </WeatherContext.Provider>
        </div>
    );
}

export default App;
