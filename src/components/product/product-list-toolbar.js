import {
  Box,
  Button,
  Card,
  CardContent,
  TextField,
  InputAdornment,
  SvgIcon,
  Avatar,
  Typography,
  Link,
  Container
} from '@mui/material';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';

export const ProductListToolbar = (props) => {
  const router = useRouter();
  const activeTuki = true ? (router.pathname === '/stats/tuki') : false;
  const activeChon = true ? (router.pathname === '/stats/chon') : false;

  return (

  <Box {...props}>
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
        sx={{ m: 1 }}
        variant="h4"
      >
        Estadísticas
      </Typography>
    </Box>
    <Container>
      <Typography
        sx={{
          position: 'relative',
          margin: '0 0 0 -67px',
          color: 'text.secondary',
          display: (activeTuki || activeChon) ? 'none' : 'flex'
        }}
        variant="h6"
      >
        Seleccione un ícono para ver las estadísticas del proyecto
      </Typography>
    </Container>
    <Box sx={{ mt: 3 }}>
      <Card>
        <CardContent>
        <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    flexWrap: 'wrap',
                    cursor: "pointer",
                    columnGap: "40px",
                    
                  }}>
                  <NextLink href='/stats/tuki'>
                    <Avatar
                    sx={{
                      height: 50,
                      width: 50,
                      '&:hover': {
                        border: activeTuki ? '4px solid #FC2264' : '3px solid #FC2264'
                      },
                      border: activeTuki && '4px solid #FC2264'
                    }}
                    src="https://m.media-amazon.com/images/I/81Vp6j9QCzL._SS500_.jpg"
                      >
                  </Avatar>
                </NextLink>
                <NextLink href='/stats/chon'>
                  <Avatar
                  sx={{
                    height: 50,
                    width: 50,
                    '&:hover': {
                      border: activeChon ? '4px solid #FC2264' : '3px solid #FC2264'
                    },
                    border: activeChon && '4px solid #FC2264'
                  }}
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTn8Fugbc-8JNXiYTHzWhtE0lIy3rVP13TaXw&usqp=CAU.jpg"
                      >
                  </Avatar>
                </NextLink>
                </div>
        </CardContent>
      </Card>
    </Box>
  </Box>
  );
};

ProductListToolbar.propTypes = {
  href: PropTypes.string,
};