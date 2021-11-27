import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer} from 'recharts';


import {
  Card,
  CardContent,
  CardHeader,
  Divider,
} from '@mui/material';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { green} from '@mui/material/colors';

const data = [
  {
    name: '1',
    visualizaciones: 230,
  },
  {
    name: '2',
    visualizaciones: 170,
  },
  {
    name: '3',
    visualizaciones: 200,
  },
  {
    name: '4',
    visualizaciones: 278,

  },
  {
    name: '5',
    visualizaciones: 189,

  },
  {
    name: '6',
    visualizaciones: 239,

  },
  {
    name: '7',
    visualizaciones: 349,
  },
];

export const LatestProducts = (props) => (
  <Card {...props}>
    <div style={{
    display: 'flex',
    alignItems: 'center',
    flexWrap: 'wrap',
  }}>
      <CardHeader
      title="Visualizaciones totales por semana"
      
    />
    <KeyboardArrowUpIcon sx={{color:green[500]}}></KeyboardArrowUpIcon>
    </div>
    
    <Divider />
    
    <CardContent>
        <AreaChart
        width={400}
        height={400}
        data={data}
        margin={{
          top: 20,
          right: 10,
          bottom: 20,
        }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Area type="monotone" dataKey="visualizaciones" stroke="#8884d8" fill="#8884d8" />
    </AreaChart>

    </CardContent>
  </Card>
);
