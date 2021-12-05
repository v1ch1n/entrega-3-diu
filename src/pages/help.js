import { DashboardLayout } from '../components/dashboard-layout';
import { Box, Container, Grid, Pagination, Typography } from '@mui/material';
import Head from 'next/head';

const Help = () => (
    <>
      <Head>
        <title>
          Ayuda
        </title>
      </Head>
      <Box
        sx={{
            alignItems: 'center',
            display: 'flex',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            m: -1
        }}
      >
      <Typography
        sx={{
           m: 1,
           position: 'relative',
           margin: '30px 0 0 30px' 
          }}
        variant="h4"
      >
        FAQ (Preguntas Frecuentes)
      </Typography>
      </Box>
      <Container maxWidth="md">
        <Typography
          sx={{
            m: 1,
            position: 'relative',
            margin: '20px 0 0 -80px'
          }}
        variant="h5"
        >
          1. ¿En qué consiste la plataforma?
        </Typography>
        <Typography
          sx={{
            m: 1,
            position: 'relative',
            margin: '10px 0 0 -80px'
          }}
        variant="body1"
        >
          La plataforma se enfoca en la administración y gestión de equipos ágiles de trabajo, con especial enfásis en la salud del equipo.
          Así, tiene diferentes características que permiten medirla y mejorarla, dando un amplio espectro de posibilidades y usos para
          el equipo.
        </Typography>
        <Typography
          sx={{
            m: 1,
            position: 'relative',
            margin: '20px 0 0 -80px'
          }}
        variant="h5"
        >
          2. ¿Qué son las métricas de salud de un equipo ágil?
        </Typography>
        <Typography
          sx={{
            m: 1,
            position: 'relative',
            margin: '10px 0 0 -80px'
          }}
        variant="body1"
        >
          Las métricas de salud de un equipo ágil son medidas y herramientas que nos dan una visión general de la salud, comportamiento,
          desempeño y estado de las personas que conforman el equipo. Estas métricas permiten a los encargados de la gestión del equipo
          identificar y corregir los problemas que se presentan en el equipo, así como también permitir que los equipos sean más
          eficientes y eficaces. Algunas métricas son el entusiasmo, la comunicación, el aprendizaje y el compromiso.
        </Typography>
      </Container>
    </>
);

Help.getLayout = (page) => (
    <DashboardLayout>
      {page}
    </DashboardLayout>
);

export default Help;