import React, { useState, useEffect} from 'react';
import app from '../../services/firebase/setUp';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  color:{
    background:'rgb(41, 163, 163)'
  },
  link:{
      color:"inherit",
      padding:'5px',
      fontWeight:'900'
  },
  isLogin: {
    display: 'none'
  },
  Login: {
    display: ''
  }
}));

 export default function Nav () {
    const classes = useStyles();
    const [logged, setLogged]= useState(false);
    useEffect(() => {
      app.auth().onAuthStateChanged((user) => {
          user ? setLogged(true) : setLogged(false)
        });
    }, []);

    return (
      <div className={classes.root}>
        <AppBar position="static" className={classes.color}>
          <Toolbar>
            <Typography variant="h6" className={classes.title}>
                Welcome 
            </Typography>
            <Button href="/login" color="inherit" className={logged ? classes.isLogin : classes.Login} >Login</Button>
            <Button color="inherit" onClick={() => app.auth().signOut()}
              className={!logged ? classes.isLogin : classes.Login}>Log out</Button>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
  