import React, { useState, useEffect } from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';
import '../../dist/output.css';
/**
 * 
 * @param {*} data Receives an array of objects 
 * @returns {CompoundGraph} A graph displaying the given data 
*/
const CompoundGraph = ({ data }) => {

  const [matches, setMatches] = useState(window.matchMedia("(max-width: 768px)").matches);

  useEffect(() => {
    window
      .matchMedia("(max-width: 768px)")
      .addEventListener('change', e => setMatches(e.matches));
  }, []);

  const colors = {
    principal: "#60a5fa", //blue-400
    interest: "#facc15", //yellow-400
    amount: "#34d399", //emerald-400
    background: "#f8fafc", //slate-50
    label: "#0f172a"
  }

  const chartSize = matches ? 
    {
    width: 300,
    height: 250,
    }
  :
    {
      width: 800,
      height: 500,
    };

  return (
    <BarChart 
      className={matches ? 'mt-6' : 'mt-0'} 
      width={chartSize.width} height={chartSize.height} 
      data={data}
    >
      <CartesianGrid />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip 
        cursor={{ fill: colors.background }} 
        contentStyle={{ backgroundColor: colors.background }}
        labelStyle={{ color: colors.label }}
        // itemStyle={{color: "#333333"}}
        />
      <Bar dataKey="principal" stackId="a" fill={colors.principal} />
      <Bar dataKey="interest" stackId="a" fill={colors.interest} />
      <Bar dataKey="amount"  fill={colors.amount} />
    </BarChart>
  )
}

export default CompoundGraph;
