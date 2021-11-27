import { Box, Card, CardContent, CardHeader, Divider,} from '@mui/material';
import React from 'react';
import {
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts';

const data01 = [
  { x: 1, y: 50 },
  { x: 2, y: 40 },
  { x: 3, y: 45 },
  { x: 4, y: 38 },
  { x: 5, y: 40 },
  { x: 6, y: 48 },
  { x: 7, y: 60 },
  { x: 8, y: 60 },
  { x: 9, y: 60 },
  { x: 10, y: 55 },
  { x: 11, y: 72 },
  { x: 12, y: 86 },
];

const data02 = [
  { x: 1, y: 86 },
  { x: 2, y: 79 },
  { x: 3, y: 75 },
  { x: 4, y: 92 },
  { x: 5, y: 83 },
  { x: 6, y: 57 },
  { x: 7, y: 56 },
  { x: 8, y: 74 },
  { x: 9, y: 66 },
  { x: 10, y: 78 },
  { x: 11, y: 80 },
  { x: 12, y: 82 },
];
const data03 = [
  { x: 1, y: 60 },
  { x: 2, y: 62 },
  { x: 3, y: 90 },
  { x: 4, y: 67 },
  { x: 5, y: 44 },
  { x: 6, y: 81 },
  { x: 7, y: 72 },
  { x: 8, y: 75 },
  { x: 9, y: 36 },
  { x: 10, y: 32 },
  { x: 11, y: 60 },
  { x: 12, y: 40 },
];
const data04 = [
  { x: 1, y: 100 },
  { x: 2, y: 86 },
  { x: 3, y: 89 },
  { x: 4, y: 81 },
  { x: 5, y: 92 },
  { x: 6, y: 76 },
  { x: 7, y: 77 },
  { x: 8, y: 82 },
  { x: 9, y: 90 },
  { x: 10, y: 93 },
  { x: 11, y: 77 },
  { x: 12, y: 82 },
];

export const Sales = (props) => {


  return (
    <Card {...props}>
      <CardHeader title="Desempeño de los proyectos en los últimos 12 Meses"/>
      <Divider />
      <CardContent>
        <Box>
        <ScatterChart
          width={460}
          height={410}
          margin={{
            top: 20,
            right: 100,
            bottom: 20,
          }}
        >
          <CartesianGrid />
          <XAxis type="number" dataKey="x" name="Mes" unit="[mes]"/>
          <YAxis type="number" dataKey="y" name="Desempeño" unit="%" />
          
          <Tooltip cursor={{ strokeDasharray: '3 3' }} />
          <Legend />
            
          <Scatter name="Tuki" data={data01} fill="#E32917" line />
          <Scatter name="CHON" data={data02} fill="#1828D3 " line />
          <Scatter name="Marvel" data={data03} fill="#ED25D7" line />
          <Scatter name="Uncharted" data={data04} fill="#ED9825" line />
        </ScatterChart>
        </Box>
      </CardContent>

    </Card>
  );
};