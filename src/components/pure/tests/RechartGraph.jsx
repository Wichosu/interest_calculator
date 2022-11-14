import React from 'react';
import { LineChart, Line } from 'recharts';

const data = [{name: 'Page A', uv: 400, pv: 2400, amt: 2400},
              {name: 'Page B', uv: 200 , pv:100, amt: 200},
              {name: 'Page C', uv: 100},
              {name: 'Page D', uv: 400},
              {name: 'Page E', uv: 300},
              {name: 'Page F', uv: 600}];

const RechartGraph = () => {
  return (
    <LineChart width={600} height={400} data={data}>
      <Line type='monotone' dataKey='uv' stroke='#8884d8' />
    </LineChart>
  );
}

export default RechartGraph;
