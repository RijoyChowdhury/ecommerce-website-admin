import React from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';

const data = [
    {
        subject: 'Electronics',
        A: 120,
        B: 110,
        fullMark: 150,
    },
    {
        subject: 'Apparels',
        A: 98,
        B: 130,
        fullMark: 150,
    },
    {
        subject: 'Furnitures',
        A: 86,
        B: 130,
        fullMark: 150,
    },
    {
        subject: 'Kids',
        A: 99,
        B: 100,
        fullMark: 150,
    },
    {
        subject: 'Home',
        A: 85,
        B: 90,
        fullMark: 150,
    },
    {
        subject: 'Fashion',
        A: 65,
        B: 85,
        fullMark: 150,
    },
];

const CustomRadarChart = () => {
    const demoUrl = 'https://codesandbox.io/p/sandbox/simple-radar-chart-2p5sxm';

    return (
        <ResponsiveContainer width="95%" height="95%" className=''>
            <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
                <PolarGrid />
                <PolarAngleAxis dataKey="subject" />
                <PolarRadiusAxis />
                <Radar name="Mike" dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
            </RadarChart>
        </ResponsiveContainer>
    );
}

export default CustomRadarChart