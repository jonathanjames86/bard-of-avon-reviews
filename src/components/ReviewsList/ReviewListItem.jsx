import React from 'react';
import Stars from 'react-stars';
import PropTypes from 'prop-types';
import moment from 'moment'
import placeholder from '../../resources/user-placeholder.svg';
import teal from '@material-ui/core/colors/teal';
import { withStyles, Typography, Grid } from '../Common'

const styles = theme => ({
    container: {
      padding: `${theme.spacing.unit * 2}px 5vw`,
      textAlign: 'left'
    },
    userInfo: {
      display: 'flex',
      flexDirection: 'row',
    },
    icon: {
      marginRight: `${theme.spacing.unit}px`  
    },
    dateRating: {
        display: 'flex',
        flexDirection: 'column',
    },
    reviewBody: {
      textAlign: 'left',
    }
  })

const ReviewListItem = ({ classes, author, publish_date, rating, id, body})=>(
    <div className={classes.container}>
        <Grid container spacing={24}>
            <Grid item>
                <div className={classes.userInfo}>
                    <img className={classes.icon} alt="placeholder-img" src={placeholder}/>
                    <Typography variant="subheading" className="Author">{author}</Typography>
                </div>
            </Grid>
        </Grid>
        <div className={classes.dateRating}>
            <Stars count={5} color1={"lightgray"} color2={teal[500]} value={rating} edit={false}/>
        </div>
        <div className={classes.reviewBody}>
            {`"${body}"`}
        </div>
        <Typography color='textSecondary' variant='body1'>{`${moment(publish_date).format('MMMM Do YYYY')}`}</Typography>
    </div>
);

ReviewListItem.propTypes = {
    rating: PropTypes.number,
    name: PropTypes.string,
    date: PropTypes.string,
    review: PropTypes.string,
}

export default withStyles(styles)(ReviewListItem);
