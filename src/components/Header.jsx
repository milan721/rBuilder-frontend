import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

const Header = () => {
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{backgroundColor:"rgb(139, 68, 205)"}}>
        {/* we used sx to style the app bar in some instances material ui might not support styling using ids or classnames in such case use this to style a single instance */}
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Resume Builder
          </Typography>
          <Button color="inherit">About Us</Button>
        </Toolbar>
      </AppBar>
    </Box>

    {/* we import the app bar component from the material ui, the code inside the return stmt is copied and its imports are copied to make the code work fyi the imports are at top */}
    </div>
  )
}

export default Header