import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

// data
const initialData = [
  { time: '01:01', other: 4000, session: 2400, injection: 2400, xss: 1500, file: 1200, outbound: 600, auth: 300 },
  { time: '05:01', other: 3000, session: 1398, injection: 2210, xss: 1000, file: 900, outbound: 400, auth: 200 },
  { time: '09:01', other: 1000, session: 1298, injection: 2260, xss: 9000, file: 1800, outbound: 4000, auth: 2000 },
  { time: '13:01', other: 100, session: 298, injection: 260, xss: 900, file: 180, outbound: 700, auth: 900 },
  { time: '17:01', other: 1000, session: 298, injection: 260, xss: 900, file: 180, outbound: 700, auth: 900 },
  { time: '19:01', other: 2000, session: 700, injection: 2600, xss: 900, file: 1800, outbound: 1000, auth: 300 },
  { time: '23:01', other: 2000, session: 700, injection: 2600, xss: 900, file: 1800, outbound: 1000, auth: 300 },
  { time: '27:01', other: 200, session: 1300, injection: 600, xss: 400, file: 3800, outbound: 100, auth: 3000 },
  { time: '31:01', other: 200, session: 230, injection: 600, xss: 400, file: 380, outbound: 1000, auth: 1000 },
  { time: '34:01', other: 200, session: 230, injection: 600, xss: 400, file: 380, outbound: 1000, auth: 1000 },
  { time: '37:01', other: 200, session: 230, injection: 600, xss: 400, file: 380, outbound: 1000, auth: 1000 },
  { time: '40:01', other: 200, session: 230, injection: 600, xss: 400, file: 380, outbound: 1000, auth: 1000 },
  { time: '43:01', other: 200, session: 230, injection: 600, xss: 400, file: 380, outbound: 1000, auth: 1000 },
  { time: '46:01', other: 2000, session: 2300, injection: 1000, xss: 4000, file: 3800, outbound: 1000, auth: 1000 },
  { time: '49:01', other: 4000, session: 3300, injection: 3000, xss: 2000, file: 3200, outbound: 1900, auth: 1000 },
  { time: '53:01', other: 2000, session: 2300, injection: 1000, xss: 4000, file: 3800, outbound: 1000, auth: 1000 },
  { time: '57:01', other: 2000, session: 2300, injection: 1000, xss: 4000, file: 3800, outbound: 1000, auth: 1000 },
  { time: '61:01', other: 2000, session: 2300, injection: 1000, xss: 4000, file: 3800, outbound: 1000, auth: 1000 },
  { time: '61:01', other: 100, session: 1300, injection: 100, xss: 400, file: 380, outbound: 100, auth: 4000 },
  { time: '61:01', other: 100, session: 1900, injection: 100, xss: 400, file: 380, outbound: 100, auth: 4000 },
  { time: '61:01', other: 100, session: 1600, injection: 100, xss: 400, file: 380, outbound: 100, auth: 4000 },
  { time: '61:01', other: 100, session: 1600, injection: 100, xss: 400, file: 380, outbound: 100, auth: 4000 },
  { time: '61:01', other: 100, session: 1500, injection: 100, xss: 400, file: 380, outbound: 100, auth: 4000 },
  { time: '61:01', other: 100, session: 300, injection: 100, xss: 400, file: 380, outbound: 100, auth: 4000 },
  { time: '61:01', other: 100, session: 2300, injection: 100, xss: 400, file: 380, outbound: 100, auth: 4000 },
];
const initialVisibility = {
  other: true,
  session: true,
  injection: true,
  xss: true,
  file: true,
  outbound: true,
  auth: true,
};
// Define the colors for each data key
const barColors = {
  other: '#8884d8',
  session: '#82ca9d',
  injection: '#ffc658',
  xss: '#ff8042',
  file: '#413ea0',
  outbound: '#4b0082',
  auth: '#ff6666',
};

// CustomLegend.js
const CustomLegend = ({ activeKeys, toggleActiveKey }) => {
  const payload = Object.keys(initialVisibility).map(key => ({
    dataKey: key,
    value: key.charAt(0).toUpperCase() + key.slice(1),
    color: barColors[key],
    // Ensure that 'flag' property is not required anymore and remove it if it was not intended
  }));
  return (
    <ul className="flex flex-wrap gap-2 justify-center">
      {payload.map((entry, index) => (
        <li key={`item-${index}`} className="cursor-pointer" onClick={() => toggleActiveKey(entry.dataKey)}>
        <span style={{
          textDecoration: activeKeys[entry.dataKey] ? 'none' : 'line-through',
          color: entry.color
        }}>
          {entry.value}
        </span>
      </li>
      ))}
    </ul>
  );
};

export const Attacks = () => {
  const [activeKeys, setActiveKeys] = useState(initialVisibility);

  const toggleActiveKey = (key) => {
    setActiveKeys(prevKeys => ({
      ...prevKeys,
      [key]: !prevKeys[key]
    }));
  };
    
    console.log(activeKeys);
    const bars = Object.keys(activeKeys).map(key => (
      activeKeys[key] ? <Bar key={key} dataKey={key} stackId="a" fill={barColors[key]} /> : null
    )).filter(Boolean);



    // console.log("Legend Payload attack:", legendPayload);
    return (
      <div className="rounded border-2 border-[#CCCCCC] mx-4 ">
        <div className="bg-primary-blue text-white font-bold p-2">
          <p className="text-md">Attacks</p>
        </div>
        <div className="flex justify-center items-center bg-white p-4">
          <ResponsiveContainer width="100%" height={400}>
            <BarChart data={initialData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="time" />
              <YAxis />
              <Tooltip />
              <Legend content={
                <CustomLegend
                  activeKeys={activeKeys}
                  toggleActiveKey={toggleActiveKey}
                />
              } />
              {bars}
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    );
  };

