import React from 'react';
import { Route } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
// import IconButton from '@material-ui/core/IconButton';
// import MenuIcon from '@material-ui/icons/Menu';
import DropdownMenu from '../components/auth/common/DropdownMenu';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    color: 'black',
  },
  menuButton: {
    // marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  logo:{
    width: '186px'
  }
}));

const styles = {
  root:{
    background: '#eee'
  }
}

const demoMenus = [
  {name: 'client', text: 'Client Demo'},
  {name: 'admin', text: 'Admin Demo'}
];

export default function Header() {
  const classes = useStyles();
    const handleToLoginPage = () => {
        window.location = "https://admin.yocompute.com";
    }

    const handleDemoSelect = () => {

    }

  return (
    <div className={classes.root}>
      <AppBar position="static" style={styles.root} elevation={0}>
        <Toolbar>
          {/* <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton> */}
          <img className={classes.logo} src="logo5.png"/>
          <Typography variant="h6" className={classes.title}>

          </Typography>
              {/* <Button color="black" onClick={handleToLoginPage}>Documentation</Button> */}
              <Button color="black">
                <DropdownMenu
                  id="demo"
                  title="Demos"
                  menus={demoMenus}
                  onSelect={handleDemoSelect}
                />
              </Button>
              {/* <Button color="black" onClick={handleToLoginPage}>Blog</Button> */}
              {/* <Button color="inherit" onClick={handleToLoginPage}>Login</Button> */}
        </Toolbar>
      </AppBar>
    </div>
  );
}
