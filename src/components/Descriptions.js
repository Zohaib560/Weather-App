import React from 'react';
import { FaArrowUp, FaArrowDown, FaWind } from "react-icons/fa";
import { BiHappy } from "react-icons/bi";
import { MdCompress, MdOutlineWaterDrop } from "react-icons/md";

const Descriptions = ({ weather, unitsMetric }) => {

    const tempUnit = unitsMetric ? "°C" : "°F";
    const windUnit = unitsMetric ? "m/s" : "m/h";
    
    const cards = [
        {
          id: 1,
          icon: <FaArrowDown />,
          title: "min",
          data: Math.round(weather.temp_min),
          unit: tempUnit,
        },
        {
          id: 2,
          icon: <FaArrowUp />,
          title: "max",
          data: Math.round(weather.temp_max),
          unit: tempUnit,
        },
        {
          id: 3,
          icon: <BiHappy />,
          title: "feels like",
          data: Math.round(weather.feels_like),
          unit: tempUnit,
        },
        {
          id: 4,
          icon: <MdCompress />,
          title: "pressure",
          data: weather.pressure,
          unit: "hPa",
        },
        {
          id: 5,
          icon: <MdOutlineWaterDrop />,
          title: "humidity",
          data: weather.humidity,
          unit: "%",
        },
        {
          id: 6,
          icon: <FaWind />,
          title: "wind speed",
          data: Math.round(weather.speed),
          unit: windUnit,
        },
      ];

  return (
    <div className="section section__descriptions">
        {cards.map(card => (
            <div key={card.id} className="card">
                <div className="description__card-icon">
                    {card.icon}
                    <small>{card.title}</small>
                </div>
                <h2>{`${card.data} ${card.unit}`}</h2>
            </div>
        ))}
    </div>
  )
}

export default Descriptions