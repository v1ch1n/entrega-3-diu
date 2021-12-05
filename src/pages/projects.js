import React from 'react'
import { DashboardLayout } from '../components/dashboard-layout';
import { v4 as uuid } from 'uuid';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { SeverityPill } from '../components/severity-pill';
import DeleteIcon from '@mui/icons-material/Delete';
import { pink } from '@mui/material/colors';
import {
    Avatar,
    Button,
    Card,
    CardHeader,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    Box,
  } from '@mui/material';

    
const projects = [
    {
      id: uuid(),
      ref:'Tuki',
      logo: "https://m.media-amazon.com/images/I/81Vp6j9QCzL._SS500_.jpg", 
      customer: {
        name: 'Irina Zheng'
      },
      createdAt: '26/11/2021',
      status: 'En progreso'
    },
    {
      id: uuid(),
      ref: 'CHON',
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTn8Fugbc-8JNXiYTHzWhtE0lIy3rVP13TaXw&usqp=CAU.jpg",
      customer: {
        name: 'Osvaldo Rodríguez'
      },
      createdAt: '10/05/2021',
      status: 'Abierto'
    },
    {
      id: uuid(),
      ref: 'Marvel',
      logo: 'https://image.emojipng.com/722/9124722-small.png',
      amount: 30,
      customer: {
        name: 'Alexa Richardson'
      },
      createdAt: '22/10/2021',
      status: 'Finalizado'
    },
    {
      id: uuid(),
      ref: 'Uncharted',
      logo: 'https://m.media-amazon.com/images/I/51aH615oYmL._AC_.jpg',
      customer: {
        name: 'Irina Zheng'
      },
      createdAt: '24/11/2021',
      status: 'Finalizado'
    },
    {
      id: uuid(),
      ref: 'Starbucks',
      logo: 'https://blog.hubspot.es/hs-fs/hubfs/ES%20Blog%20images/Los%2015%20logos%20m%C3%A1s%20creativos%20e%20inspiradores%20del%20mundo/logo_famoso_starbucks.jpg?width=650&name=logo_famoso_starbucks.jpg',
      customer: {
        name: 'Steve Jobs'
      },
      createdAt: '19/05/2021',
      status: 'Finalizado'
    },
    {
      id: uuid(),
      ref: 'Mozilla',
      logo: 'https://www.webyempresas.com/wp-content/uploads/2016/03/image.jpg',
      customer: {
        name: 'Osvaldo Rodríguez'
      },
      createdAt: '24/11/2021',
      status: 'Finalizado'
    },
    {
      id: uuid(),
      ref: 'Aimer',
      logo: 'https://img.discogs.com/QI8vjkFVsSrsL5CwsjqE4vfg3Ps=/533x533/smart/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/A-4280542-1597633790-4083.jpeg.jpg',
      customer: {
        name: 'Yi Zhou'
      },
      createdAt: '05/12/2021',
      status: 'Finalizado'
    },
    
    
  ];
  
export const Projects = (props) => (


<Card {...props}>
<CardHeader title="Tabla de proyectos" />
<PerfectScrollbar>
  <Box sx={{ minWidth: 800 }}>
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>
            Proyectos
          </TableCell>
          <TableCell>
            Creado
          </TableCell>
          <TableCell sortDirection="desc">
                Reportado Por
          </TableCell>
          <TableCell>
            Estado
          </TableCell> 
          <TableCell>
            Eliminar
          </TableCell>  
        </TableRow>
      </TableHead>
      <TableBody>
        {projects.map((order) => (
          <TableRow
            hover
            key={order.id}
          >
            <TableCell>
            <div style={{
                paddingTop:"15px",
                display: 'flex',
                alignItems: 'center',
                flexWrap: 'wrap',
                cursor: "pointer",
                columnGap: "20px",
                
              }}>
                <Avatar
              sx={{
                height: 28,
                width: 28
              }}
              src={order.logo}
                  >
            </Avatar>
            {order.ref}
            </div>
            
            </TableCell>
            <TableCell>
              {order.customer.name}
            </TableCell>
            <TableCell>
              {order.createdAt}
            </TableCell>
            <TableCell>
              <SeverityPill
                color={(order.status === 'Abierto' && 'success')
                || (order.status === 'Finalizado' && 'error')
                || 'warning'}
              >
                {order.status}
              </SeverityPill>
            </TableCell>
            <TableCell>
                <DeleteIcon onClick={() => { alert("Estás seguro que quieres eliminar este proyecto?") }}
                sx={{ color: pink[500],
                 cursor: 'pointer'}}>

                </DeleteIcon>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </Box>
</PerfectScrollbar>
<Box
  sx={{
    display: 'flex',
    justifyContent: 'flex-end',
    p: 2
  }}
>
</Box>
</Card>
);

Projects.getLayout = (page) => (
  <DashboardLayout>
    {page}
  </DashboardLayout>
);

export default Projects;