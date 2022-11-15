import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';

const CompoundGraph = ({ data }) => {

  const fillColors = {
    principal: "#3CB9C3",
    interest: "#FFDE00",
    amount: "#53C43B",
    cursor: "#FAFAFA",
  }

  return (
    <BarChart width={500} height={500} data={data}>
      <CartesianGrid strokeDasharray="9"/>
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip 
        cursor={{ fill: fillColors.cursor }} 
        wrapperStyle={{ fill: fillColors.cursor }}
        // itemStyle={{color: "#333333"}}
        />
      <Bar dataKey="principal" stackId="a" fill={fillColors.principal} />
      <Bar dataKey="interest" stackId="a" fill={fillColors.interest} />
      <Bar dataKey="amount"  fill={fillColors.amount} />
    </BarChart>
  )
}

export default CompoundGraph;
