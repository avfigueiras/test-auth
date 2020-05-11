import React, { useState, useEffect} from 'react';
import app from '../../services/firebase/setUp';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import useStyles from  './style.js';


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
               <a href='/' className={classes.welcome}>Welcome</a>  
            </Typography>
            <Button href="/login" color="inherit" className={logged ? classes.isLogin : classes.Login} >Login</Button>
            <Button color="inherit" onClick={() => app.auth().signOut()}
              className={!logged ? classes.isLogin : classes.Login}>Log out</Button>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
  