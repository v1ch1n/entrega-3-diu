import { Doughnut } from 'react-chartjs-2';
import { Box, Card, CardContent, CardHeader, Divider, Typography, useTheme } from '@mui/material';
import LaptopMacIcon from '@mui/icons-material/LaptopMac';
import PhoneIcon from '@mui/icons-material/Phone';
import TabletIcon from '@mui/icons-material/Tablet';

export const TrafficByDevice = (props) => {
  const theme = useTheme();

  const data = {
    datasets: [
      {
        data: [84,16,0,0],
        backgroundColor: ['#3F51B5', '#e53935', '#FB8C00','#E718D3'],
        borderWidth: 8,
        borderColor: '#FFFFFF',
        hoverBorderColor: '#FFFFFF'
      }
    ],
    labels: ['CHON', 'Tuki', 'Uncharted', 'Marvel']
  };

  const options = {
    animation: false,
    cutoutPercentage: 80,
    layout: { padding: 0 },
    legend: {
      display: false
    },
    maintainAspectRatio: false,
    responsive: true,
    tooltips: {
      backgroundColor: theme.palette.background.paper,
      bodyFontColor: theme.palette.text.secondary,
      borderColor: theme.palette.divider,
      borderWidth: 1,
      enabled: true,
      footerFontColor: theme.palette.text.secondary,
      intersect: false,
      mode: 'index',
      titleFontColor: theme.palette.text.primary
    }
  };

  const devices = [
    {
      title: 'CHON',
      value: 84,
      icon: LaptopMacIcon,
      color: '#3F51B5'
    },
    {
      title: 'Tuki',
      value: 16,
      icon: PhoneIcon,
      color: '#FB8C00'
    },
    {
      title: 'Uncharted',
      value: 0,
      icon: TabletIcon,
      color: '#E53935'
    },
    
    {
      title: 'Marvel',
      value: 0,
      icon: PhoneIcon,
      color: '#E718D3'
    }
  ];

  return (
    <Card {...props}>
      <CardHeader title="Tareas Pendientes" />
      <Divider />
      <CardContent>
        <Box
          sx={{
            height: 300,
            position: 'relative'
          }}
        >
          <Doughnut
            data={data}
            options={options}
          />
        </Box>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            pt: 2
          }}
        >
          {devices.map(({
            color,
            icon: Icon,
            title,
            value
          }) => (
            <Box
              key={title}
              sx={{
                p: 1,
                textAlign: 'center'
              }}
            >
              <Icon color="action" />
              <Typography
                color="textPrimary"
                variant="body1"
              >
                {title}
              </Typography>
              <Typography
                style={{ color }}
                variant="h4"
              >
                {value}
                %
              </Typography>
            </Box>
          ))}
        </Box>
      </CardContent>
    </Card>
  );
};
