import React from 'react'
import {Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import './DocDashboard.css'
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
      maxWidth: 345,
    },
  });

  
function DocDashboard({data}){

    


    const classes = useStyles();

  return (<div className="doc-container">
    <Card className={classes.root}>
      <CardActionArea>
        {/* <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="140"
          image="/static/images/cards/contemplative-reptile.jpg"
          title="Contemplative Reptile"
        /> */}
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Welcome Dr. {data}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Click on "History" to check existing patient's history or click on "New Patient" to add a new patient.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <Link to='/patienthistory'>
        <Button size="small" variant="outlined" color="primary">
          History
        </Button>
        </Link>


        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;


        <Link to='/writenewpres' >
        <Button size="small" variant="outlined" color="primary">
          New Patient
        </Button>
        </Link>
      </CardActions>
    </Card>
    </div>
  );
    
}
export default DocDashboard


// return(<div>
    //     <h1>Hello Dr.{data}</h1>
    //     <h1>This is your dashboard</h1>
    //     <Link to ='/patienthistory'>
    //         <button>Check Patient History</button>
    //     </Link>
    //     <Link to ='/writenewpres'>
    //         <button>New Patient</button>
    //     </Link>
        
        
    // </div>)