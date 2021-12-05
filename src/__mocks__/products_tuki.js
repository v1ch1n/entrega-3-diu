import { v4 as uuid } from 'uuid';
import { PieChart, Pie, Sector, Cell, AreaChart, Area, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,BarChart, Bar} from 'recharts';
import * as React from 'react';

const COLORS = ['#0088FE', '#FFD950', '#FFBB28', '#FF8042'];
const COLORS2 = ['#EA2B18', '#5035BD', '#FFBB28', '#FF8042'];

  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
      const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
      const x = cx + radius * Math.cos(-midAngle * RADIAN);
      const y = cy + radius * Math.sin(-midAngle * RADIAN);
    
      return (
        <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
          {`${(percent * 100).toFixed(0)}%`}
        </text>
      );
    };

const data = [
    {
      name: 'Page A',
      uv: 3500,
      pv: 5000,
      amt: 2400,
    },
    {
      name: 'Page B',
      uv: 4000,
      pv: 4000,
      amt: 2210,
    },
    {
      name: 'Page C',
      uv: 2500,
      pv: 4500,
      amt: 2290,
    },
    {
      name: 'Page D',
      uv: 1800,
      pv: 3500,
      amt: 2000,
    },
    {
      name: 'Page E',
      uv: 500,
      pv: 4000,
      amt: 2181,
    },
    {
      name: 'Page F',
      uv: 2390,
      pv: 5000,
      amt: 2500,
    },
    {
      name: 'Page G',
      uv: 3490,
      pv: 4500,
      amt: 2100,
    },
  ];

  const data2 = [
    { name: 'Conforme', value: 70 },
    { name: 'No conforme', value: 30 },
  ];


  const data3 = [
    {
      name: 'Alex',
      Satisfacción: 3500,
      amt: 2400,
    },
    {
      name: 'Tom',
      Satisfacción: 1800,
      amt: 2290,
    },
    {
      name: 'Zirek',
      Satisfacción: 1500,
      amt: 2000,
    },
    {
      name: 'Osvaldo',
      Satisfacción: 500,
      amt: 2181,
    },
  ];

  const data4 = [
    { name: 'Buena comunicación', value: 75 },
    { name: 'Mala comunicación', value: 25 },
  ];
export const products = [
  
  {
    
    id: uuid(),
    createdAt: '27/03/2019',
    description: 'El entusiasmo es un indicador que ayuda a medir el grado de satisfacción, compromiso y dedicación que tienen los trabajadores con la empresa.',
    media: '/static/images/products/product_1.png',
    title: 'Entusiasmo del equipo',
    totalDownloads: <AreaChart width={400} height={300} data={data} margin={{
      top: 5,
      right: 24,
      left: 0,
      bottom: 5,
  }}>
      <Area type="monotone" dataKey="pv" name="Entusiasmo en relación con el tiempo" stroke="#e91e63" strokeWidth={2} fill ="#f48bae"/>
      <Legend verticalAlign="top" height={36} iconType="circle"/>
  </AreaChart>
  },
  {
    id: uuid(),
    createdAt: '31/03/2019',
    description: 'La conformidad del equipo se refiere a la tendencia de seguir las reglas o conductas implícitas del grupo. De este modo el conjunto altera su opinión para adaptarse a las normas',
    media: '/static/images/products/product_2.png',
    title: 'Conformidad del equipo',
    totalDownloads: <PieChart width={390} height={300}>
    <Pie
        data={data2}
        cx="50%"
        cy="50%"
        labelLine={false}
        label={renderCustomizedLabel}
        outerRadius={80}
        fill="#8884d8"
        dataKey="value"
    >
        {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]}/>
        ))}
    </Pie>
    <Legend verticalAlign="bottom" height={36} iconType="circle"/>
    <Line />
</PieChart>
  },
  {
    id: uuid(),
    createdAt: '03/04/2019',
    description: ' La satisfacción laboral es una experiencia subjetiva y sirve para saber el grado de conformidad de un empleado respecto a sus condiciones de trabajo y los valores que comparte con la empresa',
    media: '/static/images/products/product_3.png',
    title: 'Satisfacción del equipo',
    totalDownloads: <BarChart
    width={400}
    height={300}
    data={data3}
    margin={{
      top: 20,
      right: 40,
      bottom: 5,
    }}
  >
    <CartesianGrid strokeDasharray="3 3" />
    <XAxis dataKey="name" />
    <YAxis />
    <Tooltip />
    <Legend />
    <Bar dataKey="Satisfacción" stackId="a" fill="#82ca9d" />
  </BarChart>
  },
  {
    id: uuid(),
    createdAt: '04/04/2019',
    description: 'Con una comunicación efectiva, se sentirán más comprometidos con los objetivos, los compañeros y el líder que les coordina.',
    media: '/static/images/products/product_4.png',
    title: 'Comunicación efectiva',
    totalDownloads: <PieChart width={390} height={300}>
    <Pie
        data={data4}
        cx="50%"
        cy="50%"
        labelLine={false}
        label={renderCustomizedLabel}
        outerRadius={80}
        fill="#8884d8"
        dataKey="value"
    >
        {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS2[index % COLORS2.length]}/>
        ))}
    </Pie>
    <Legend verticalAlign="bottom" height={36} iconType="circle"/>
    <Line />
</PieChart>
    
  },
];
