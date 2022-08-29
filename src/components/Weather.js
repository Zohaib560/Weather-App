import React from 'react'

const Weather = ({ weather, unitsMetric }) => {
  return (
    <div className="section section__temperature">
        <div className="icon">
            <h3>{`${weather.name}, ${weather.country}`}</h3>
            <img src={weather.iconURL} alt="Weather Icon" />
            <h3>{weather.description}</h3>
        </div>
        <div className="temperature">
            <h1>{`${Math.round(weather.temp)} ${unitsMetric ? "°C" : "°F"}`}</h1>
        </div>
    </div>
  )
}

export default Weather