

import { makeStyles } from '@material-ui/core/styles';

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
    welcome:{
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

  export default useStyles;