import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import ReviewListItem from './ReviewListItem';
import './ReviewsList.css'
import { withStyles, Typography } from '../Common'

const styles = theme => ({
    root: {
      display: 'flex',
      flexDirection: 'column',
      minHeight:'50vh',
      overflow: 'scroll',
      height: '65vh',
      width: '100vw',
      padding: `0 ${theme.spacing.unit *2}px`,
      backgroundColor: '#F8F6F8',
    },
    loading: {
      padding: `${theme.spacing.unit *4}px`
    }
  })

const ReviewsList = ({classes, reviews})=>(
    <div className={classes.root}>
        { reviews ?
            <div>
                {reviews.map(review=><ReviewListItem key={review.id} {...review}/>)}
            </div> :
            <div className={classes.loading}>
                <CircularProgress color="primary" />
            </div>
        }
    </div>
);

export default withStyles(styles)(ReviewsList);

