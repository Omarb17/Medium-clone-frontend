import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MoreIcon from '@mui/icons-material/MoreVert';
import Image from 'next/image';

import mediumLogo from '../../public/images/mediumLogo.png'
import SearchIcon from '@mui/icons-material/Search';
import TextField from '@mui/material/TextField';


const Navbar = () => {
  return (
     <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{
    bgcolor: "background.default",
    color: "primary.main"
  }}>
        <Toolbar >
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>

            <Box>
                  <Image
                    src={mediumLogo} 
                     alt="" 
        width={150} 
        height={150} 
        style={{ borderRadius: '50%' }}
                  />
        </Box>



            <Box sx={{  width: 400,
          height: 100,    borderRadius: 1, bgcolor: "primary.main"}}>
                  <SearchIcon sx={{   color: "background.default"}}/>
                     <TextField id="outlined-search" placeholder='Search' type="search" sx={{ bgcolor: "background.default"}}/>
        
        </Box>


         


         
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            <IconButton size="large" aria-label="show 4 new mails" color="inherit">
              <Badge badgeContent={4} color="error">
                <MailIcon />
              </Badge>
            </IconButton>
            <IconButton
              size="large"
              aria-label="show 17 new notifications"
              color="inherit"
            >
              <Badge badgeContent={17} color="error">
                <NotificationsIcon />
              </Badge>
            </IconButton>
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
        
              aria-haspopup="true"
              
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
          </Box>
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="show more"
             
              aria-haspopup="true"
              
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
    
    </Box>
  )
}

export default Navbar