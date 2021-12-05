import { Avatar, Box, Card, CardContent, Grid, Typography } from '@mui/material';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import MoneyIcon from '@mui/icons-material/Money';
import { withStyles } from "@material-ui/core/styles";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { pink } from '@mui/material/colors';
import { theme } from 'src/theme';

const WhiteTextTypography = withStyles({
  root: {
    color: "#FC2264",
    fontWeight: "bold",
    cursor: "pointer",
    
  }
})(Typography);

export const Budget = (props) => (
  <div style={{
    paddingTop:"30px",
    paddingLeft:"30px",
  }}>
  <Typography variant="h3">Agregar proyecto</Typography>
  <Typography variant="h6">Crear un nuevo proyecto colaborativo, designa un equipo de trabajo </Typography>
  <div>
  
  <div style={{
    paddingTop:"15px",
    display: 'flex',
    alignItems: 'center',
    flexWrap: 'wrap',
    cursor: "pointer",
  }}>
  <AddCircleOutlineIcon  fontSize="large" onClick={() => window.location.href = '/form'} sx={{ color: pink[500] }}>
  </AddCircleOutlineIcon>
  <WhiteTextTypography variant="h6" onClick={() => window.location.href = '/form'}>
        Crear un proyecto
      </WhiteTextTypography>
      </div>
    </div>
  </div>
);
