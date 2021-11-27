import { format } from 'date-fns';
import { v4 as uuid } from 'uuid';
import PerfectScrollbar from 'react-perfect-scrollbar';
import {
  Avatar,
  Box,
  Button,
  Card,
  CardHeader,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TableSortLabel,
  Tooltip
} from '@mui/material';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import { SeverityPill } from '../severity-pill';
import { Today } from '@mui/icons-material';

const orders = [
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
];

export const LatestOrders = (props) => (
  <Card {...props}>
    <CardHeader title="Tabla de proyectos" />
    <PerfectScrollbar>
      <Box sx={{ minWidth: 800 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>
                Actualizaciones recientes
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
            </TableRow>
          </TableHead>
          <TableBody>
            {orders.map((order) => (
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
      <Button
        color="primary"
        endIcon={<ArrowRightIcon fontSize="small" />}
        size="small"
        variant="text"
      >
        Ver todos
      </Button>
    </Box>
  </Card>
);
