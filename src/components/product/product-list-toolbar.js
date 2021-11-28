import {
  Box,
  Button,
  Card,
  CardContent,
  TextField,
  InputAdornment,
  SvgIcon,
  Avatar,
  Typography
} from '@mui/material';
import { Download as DownloadIcon } from '../../icons/download';
import { Search as SearchIcon } from '../../icons/search';
import { Upload as UploadIcon } from '../../icons/upload';

export const ProductListToolbar = (props) => (
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
                    <Avatar
                  sx={{
                    height: 50,
                    width: 50,
                    '&:hover': {
                      border: '3px solid #FC2264'
                    }
                  }}
                  src="https://m.media-amazon.com/images/I/81Vp6j9QCzL._SS500_.jpg"
                      >
                </Avatar>
                <Avatar
                  sx={{
                    height: 50,
                    width: 50,
                    '&:hover': {
                      border: '3px solid #FC2264'
                    }
                  }}
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTn8Fugbc-8JNXiYTHzWhtE0lIy3rVP13TaXw&usqp=CAU.jpg"
                      >
                </Avatar>
                </div>
        </CardContent>
      </Card>
    </Box>
  </Box>
);
