import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
//import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
      minWidth: 275,
      backgroundColor: '#cde3df',
      color: 'black',
      margin: '120px',
      padding: '40px'
      
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
      fontSize:4,
    },
    title: {
      fontSize: 25,
    },
    pos: {
      marginBottom: 12,
    },
  });

  

function SimpleCard(){
    
    
        const classes = useStyles();
        // const bull = <span className={classes.bullet}>•</span>;
        return (<Card className={classes.root}>
            <CardContent>
              
              <Typography variant="h3" component="h2">
                Forget your papers
              </Typography>
              <Typography className={classes.pos} color="textSecondary">
              
              </Typography>
              <Typography variant="h5" component="p">
              Prescriptions are now a thing of the past. Here's something simpler(x). 
                <br /><br/>
                To get started, click on Login
                {/* {'"a benevolent smile"'} */}
              </Typography>
            </CardContent>
            <CardActions>
              
            </CardActions>
          </Card>
        );
    
}


export default SimpleCard