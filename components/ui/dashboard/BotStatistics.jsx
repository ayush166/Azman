import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Label
} from 'recharts';


const data = [
    { name: '12:22', BadBot: 20, GoodBot: 40, Human: 60, Uncategorised: 10 },
    { name: '12:27', BadBot: 28, GoodBot: 48, Human: 72, Uncategorised: 20 },
    { name: '12:32', BadBot: 25, GoodBot: 46, Human: 68, Uncategorised: 15 },
    { name: '12:37', BadBot: 18, GoodBot: 38, Human: 58, Uncategorised: 12 },
    { name: '12:42', BadBot: 30, GoodBot: 43, Human: 64, Uncategorised: 17 },
    { name: '12:47', BadBot: 22, GoodBot: 39, Human: 62, Uncategorised: 18 },
];
const CustomTooltip = ({ active, payload, label }) => {
    if (active) {
      return (
        <div className="custom-tooltip bg-white p-2 border border-gray-300 rounded">
          <p className="label">{`${label}`}</p>
          {payload.map((entry, index) => (
            <p key={`item-${index}`} style={{ color: entry.color }}>
              {`${entry.name}: ${entry.value}`}
            </p>
          ))}
        </div>
      );
    }
  
    return null;
  };
  
  
  export const BotStatistics = () => {
    return (
      <div className="bg-white shadow mx-4 rounded border-2 border-[#CCCCCC]">
   <div className='bg-primary-blue text-white font-bold p-2'>
    <p className='text-md'>Bot Statistics</p>
   </div>
   <div className=' '>
   <button className="text-button-gray mx-auto align-middle border-2 block w-[388px] h-[26px] border-secondary-gray bg-button-white  my-7 cursor-pointer text-center  focus:outline-none focus:ring-2">
  Open Barracuda Active Threat Intelligence
</button>
   </div>

        <div  className='p-4'>
        <ResponsiveContainer width="100%" height={300}>
      <LineChart
        data={data}
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip content={<CustomTooltip />} />
        <Legend />
        <Line type="monotone" dataKey="BadBot" stroke="#FF8042" />
        <Line type="monotone" dataKey="GoodBot" stroke="#82ca9d" />
        <Line type="monotone" dataKey="Human" stroke="#8884d8" />
        <Line type="monotone" dataKey="Uncategorised" stroke="#bbb" />
      </LineChart>
    </ResponsiveContainer>
    </div>
      </div>
      );
};