import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';

const CompoundGraph = ({ data }) => {
  return (
    <BarChart width={500} height={500} data={data}>
      <CartesianGrid strokeDasharray="9"/>
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip cursor={{ fill: 'blue' }}/>
      <Bar dataKey="principal" stackId="a" fill="#ccc" />
      <Bar dataKey="interest" stackId="a" fill="#000" />
      <Bar dataKey="amount"  fill="#555" />
    </BarChart>
  )
}

export default CompoundGraph;
