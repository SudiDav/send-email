import { Link } from 'react-router-dom';
import * as material from '@mui/material';
import React from 'react';

const Header = () => {
  return (
    <material.AppBar position='static'>
      <material.Toolbar>
        <material.Typography
          component={Link}
          to='/'
          variant='h6'
          color='inherit'
          style={{ flexGrow: 1 }}>
          Home
        </material.Typography>
        <material.Button color='inherit' component={Link} to='/contact'>
          Contact
        </material.Button>
      </material.Toolbar>
    </material.AppBar>
  );
};

export default Header;
