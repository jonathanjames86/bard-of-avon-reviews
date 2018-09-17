import React from 'react';
import { withStyles, Typography, Button} from '../Common';

const styles = theme => ({
    root: {
      backgroundColor: theme.palette.secondary.light,
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      aligncontent: 'center',
      height: '5vh',
      padding: `0 5vw`,
      [theme.breakpoints.down('xs')]: {
        height: '8vh',
      },
    },
    reviewsTitle: {
      paddingRight: `${theme.spacing.unit *2}px`,
      color: theme.palette.secondary.dark,
      fontFamily: 'Dosis'
    },
    button: {
      padding: `${theme.spacing.unit}px`,
      minWidth: `${theme.spacing.unit * 4}px`,
      opacity: '.3'
    },
  })

const ReviewsHeader = ({classes, reviews})=>(
    <div className={classes.root}>
       <Typography className={classes.reviewsTitle} variant="title">
         BOA Reviews
       </Typography>
       <Button className={classes.button}>
        <i className="material-icons">date_range</i>
       </Button>
       <Button className={classes.button}>
        <i className="material-icons">grade</i>
       </Button>
       <Button className={classes.button}>
        <i className="material-icons">face</i>
       </Button>
    </div>
);

export default withStyles(styles)(ReviewsHeader);