
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
      width: '65%',
      height: '100%',
    },
    rootMobile: {
      width: '100%',
      height: '100%',
    },
    panel:{
        width:'100%',
        padding: '5px',
        borderRigth: '1px solid white',
    },
  panelMobile:{
      width:'100%'
  },
    image:{
      marginRight:'10px',
    },
    detail:{
        display:'flex',
        width:'100%',
        alignSelf:'flex-center',
        justifyContent:'space-around',
        padding:'20px'
    },
    detailMobile:{
      display:'flex',
      flexDirection:'column',
      alignItems:'flex-start',
      justifyContent:'center',
      borderRadius:'borderRadius',
      padding:'0px',
  },
    context:{
       marginBottom:'10px',
       display:'flex',
       alignItems:'center',
       width:'100%'
    },
    icon:{
        marginRight:'10px',
        color:'rgb(41, 163, 163)'
    },
    header:{
        display:'flex',
        alignItems:'center',
        '&:hover': {
          zoom: '120%',
      },
    },
    name:{
        width:'100%',
        marginLeft:'5px',
        display:'flex',
        AlignSelf:'center',
        padding:'5px',
        fontWeight:'700',
    },
    pagesNone: {
      '& > *': {
        marginTop: theme.spacing(2),
      },
      display: 'none',
      width:'none'
    },
    pages: {
      '& > *': {
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(1)
      }
    },
    general:{
      width:'80%',
      display:'flex',
      flexDirection:'column',
      margin:'auto'
    },
    generalMobile:{
      width:'100%',
      display:'flex',
      flexDirection:'column'
    },
  }));

  export default useStyles;