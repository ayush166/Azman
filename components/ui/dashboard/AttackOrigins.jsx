import { geoJson } from '@/lib/features';
import React from 'react';
import { ComposableMap, Geographies, Geography, ZoomableGroup,Marker, } from "react-simple-maps"

const geoUrl =
  "https://raw.githubusercontent.com/deldersveld/topojson/master/world-countries.json"



export const AttackOrigins = () => {
    // Placeholder data for the origins of attacks
    const attackData = [
        { coordinates: [-74, 40], name: "New York", value: 25 },
    { coordinates: [12.48, 41.89], name: "Rome", value: 90 },
    { coordinates: [151.21, -33.86], name: "Sydney", value: 300 },
    { coordinates: [-0.1276, 51.5072], name: "London", value: 75 },
    { coordinates: [2.3522, 48.8566], name: "Paris", value: 50 },
    { coordinates: [139.6917, 35.6895], name: "Tokyo", value: 200 },
    { coordinates: [37.6173, 55.7558], name: "Moscow", value: 80 },
    { coordinates: [-3.7038, 40.4168], name: "Madrid", value: 40 },
    { coordinates: [28.9784, 41.0082], name: "Istanbul", value: 60 },
    { coordinates: [-43.1729, -22.9068], name: "Rio de Janeiro", value: 30 },
    { coordinates: [144.9631, -37.8136], name: "Melbourne", value: 20 },
        // ... other locations
    ];

    return (
        <div className="  h-[22.625rem] bg-custom-white rounded border-2 border-[#CCCCCC] m-[1rem]">
            
         
        <div>
            <p className="text-md  bg-primary-blue text-custom-white font-bold pl-2 h-[1.9375rem] align-middle">Attack Origins</p>
        <ComposableMap>
      <ZoomableGroup center={[13,-10]}>
      <Geographies geography={geoJson}>
        {({ geographies }) =>
          geographies.map((geo) => (
            <Geography key={geo.rsmKey} 
            geography={geo} 
            fill='#DDDDDD'
            stroke='#FFFFFF'
            
            />
          ))
        }
      </Geographies>
      {attackData.map((attack, index) => (
                    <Marker key={index} coordinates={attack.coordinates}>
                        <circle
                            cx="0"
                            cy="0"
                            r={Math.sqrt(attack.value)} // Adjust the radius by the square root of the value to get a relative size
                            fill="#95B6D5"
                            stroke="#4D8FCD"
                            strokeWidth="2"
                        />
                        <text>
                            {attack.name}
                        </text>
                    </Marker>
                ))}
      </ZoomableGroup>
    </ComposableMap>
        </div>
        </div>
    );
};
