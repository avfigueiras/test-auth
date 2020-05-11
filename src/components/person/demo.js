import React, {useState, useEffect, Fragment} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Avatar from '@material-ui/core/Avatar';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ContactMailIcon from '@material-ui/icons/ContactMail';
import HomeIcon from '@material-ui/icons/Home';
import PhoneIphoneRoundedIcon from '@material-ui/icons/PhoneIphoneRounded';
import PhoneIcon from '@material-ui/icons/Phone';
import WcIcon from '@material-ui/icons/Wc';
import AccountCircleRoundedIcon from '@material-ui/icons/AccountCircleRounded';
import DescriptionIcon from '@material-ui/icons/Description';
import Divider from '@material-ui/core/Divider';
import axios from 'axios';
import Pagination from '@material-ui/lab/Pagination';
import useMediaQuery from '@material-ui/core/useMediaQuery';


const useStyles = makeStyles((theme) => ({
  root: {
    width: '25%',
    height: '100%',
  },
  rootMobile: {
    width: '100%',
    height: '100%',
  },
  panel:{
      width:'100%'
  },
  image:{
    marginRight:'10px',
  },
  detail:{
      display:'flex',
      flexDirection:'column',
      alignItems:'flex-start',
      justifyContent:'center',
      borderRadius:'borderRadius',
      padding:'20px',
      cursor: 'pointer',
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
}));

export default function ControlledExpansionPanels() {
  const classes = useStyles();
  const [expanded, setExpanded] = useState(false);
  const [colaborates, setColaborates] = useState([]);
  const [page, setPage] = useState(1);
  const handleChangePage = (event, value) => {
    setPage(value);
  };

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  useEffect(() => {
    axios.get('https://randomuser.me/api/?results=100')
    .then(res => {
      setColaborates(res.data.results);
    })
  }, []);

  const matches = useMediaQuery('(max-width: 10240px) and (min-width: 940px)');
  console.log(matches)
  return (
    <Fragment>
    {colaborates.map((colaborate, i) => (
    <div key={i} className={matches ? classes.root : classes.rootMobile}   >
        <div className={classes.panel}>
        <ExpansionPanel expanded={expanded === `panel${i+1}`} onChange={handleChange(`panel${i+1}`)} className={classes.panel}>
            <ExpansionPanelSummary  className={classes.header} expandIcon={<ExpandMoreIcon />}>
                <Avatar src={colaborate.picture.medium} className={classes.image} height="50px" width="50px" alt="avatar"/><br/>
                <span className={classes.name}>{colaborate.name.first} {colaborate.name.last}</span>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
                <div>
                    <h5><DescriptionIcon className={classes.icon} />Description:</h5>
                    <Divider variant="middle" />
                    <div  className={classes.detail}>
                        <Typography className={classes.context}>
                            <ContactMailIcon className={classes.icon} /> {colaborate.email}
                        </Typography >
                        <Typography className={classes.context}>
                            <HomeIcon className={classes.icon}/> {colaborate.location.street.name} {colaborate.location.street.number}, {colaborate.location.city}, {colaborate.location.country}
                        </Typography>
                        <Typography className={classes.context}>
                            <WcIcon className={classes.icon}/> {colaborate.gender}
                        </Typography>
                        <Typography className={classes.context}>
                            <PhoneIphoneRoundedIcon className={classes.icon}/> {colaborate.cell}
                        </Typography>
                        <Typography className={classes.context}>
                            <PhoneIcon className={classes.icon}/> {colaborate.phone}
                        </Typography>
                        <Typography className={classes.context}>
                        <FavoriteIcon className={classes.icon}/> {colaborate.dob.age} years old
                        </Typography>
                        <Typography className={classes.context}>
                        <AccountCircleRoundedIcon className={classes.icon}/> {colaborate.registered.age} years registered
                        </Typography>
                    </div>
                </div>
            </ExpansionPanelDetails>
        </ExpansionPanel>
        </div>
    </div>
    )).filter((x, i) => (i >= (page-1)*10 && i < ((page)*10) ))}
      <div className={colaborates.length > 0 ? classes.pages : classes.pagesNone}>
        <Pagination count={colaborates.length/10} page={page} onChange={handleChangePage} />
      </div>
    </Fragment>
);
}