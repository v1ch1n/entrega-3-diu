import { Avatar, Box, Card, CardContent, Grid, LinearProgress, Typography } from '@mui/material'; 
import { AvatarGroup } from "@mui/material";
export const TasksProgress = (props) => (
  <Card
  style={{
    borderRadius: "30px",
  }}
    sx={{ height: '100%' }}
    {...props}
    
  >
    <CardContent>
      <Grid
        container
        spacing={3}
        sx={{ justifyContent: 'space-between' }}
      >
        <Grid item>
          <Typography
            color="textSecondary"
            gutterBottom
            variant="overline"
          >
            TUKI
          </Typography>
         
        </Grid>
        <Grid item>
          <Avatar
            sx={{
              height: 56,
              width: 56
            }}
            src="https://m.media-amazon.com/images/I/81Vp6j9QCzL._SS500_.jpg"
          >
          </Avatar>
        </Grid>
      </Grid>
      <Box mt={5}>
      <Grid item>
          <Typography>
            Miembros
          </Typography>
      
          <AvatarGroup max={4} className="featuredDisplayMember"
          style={{ justifyContent: "left", display: "flex" }}>
                            <Avatar alt="member_avatar" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoYHn8MXUJbhc-vcxW9D_zjkSfgi8WZNRt_w&usqp=CAU.jpg" className="cardColorPrimary"/>
                            <Avatar alt="member_avatar" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoYHn8MXUJbhc-vcxW9D_zjkSfgi8WZNRt_w&usqp=CAU.jpg" className="cardColorPrimary"/>
                            
        </AvatarGroup>
        </Grid>
      </Box>
      <Box sx={{ pt: 3 }}>
      <Typography
            color="textPrimary"
            variant="h8"
            style={{ justifyContent: "center", display: "flex" }}
          >
            Progreso: 75.5%
          </Typography>
        <LinearProgress
          value={75.5}
          variant="determinate"
        />
      </Box>
    </CardContent>
  </Card>
);
