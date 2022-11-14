import { LineChart, Line, Tooltip, CartesianGrid, XAxis, YAxis, BarChart, Bar } from 'recharts';
const data = [{name: 'Page A', uv: 400, pv: 400, amt: 2400}, 
              {name: 'Page B', uv: 500, pv: 600, amt: 2500}];

const RechartGraph = () => {

  return (
  <BarChart width={600} height={300} data={data}>
    <Tooltip cursor={false}/>
    <Bar dataKey="uv" stackId="a" fill="#8884d8" />
    <Bar dataKey="pv" stackId="a" fill="#faf" />
    <CartesianGrid stroke="#ccc" />
    <XAxis dataKey="name" />
    <YAxis />
  </BarChart>
  )
}

export default RechartGraph;
