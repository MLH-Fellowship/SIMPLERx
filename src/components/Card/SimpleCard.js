import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
      minWidth: 275,
      opacity: 0.75,
      backgroundColor: 'black',
      color: 'white',
      margin: '120px',
      
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
      fontSize:4,
    },
    title: {
      fontSize: 20,
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
              <Typography className={classes.title} color="textSecondary" gutterBottom>
                Word of the Day
              </Typography>
              <Typography variant="h3" component="h2">
                Forget your papers
              </Typography>
              <Typography className={classes.pos} color="textSecondary">
                adjective
              </Typography>
              <Typography variant="h5" component="p">
                This is my 0 creativity tagline before my team comes up with something cool
                <br />
                To get started, click on your role on the top right :)
                {/* {'"a benevolent smile"'} */}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
        );
    
}


export default SimpleCard