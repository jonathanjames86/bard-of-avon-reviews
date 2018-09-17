import React from 'react';
import PropTypes from 'prop-types';
import CircularProgress from '@material-ui/core/CircularProgress';
import ReviewListItem from './ReviewListItem';
import './ReviewsList.css'
import { withStyles, Button } from '../Common'

const styles = theme => ({
    root: {
      display: 'flex',
      flexDirection: 'column',
      position: 'relative',
      minHeight:'50vh',
      overflowY: 'scroll',
      overflowX: 'hidden',
      height: '65vh',
      padding: `0 ${theme.spacing.unit *2}px`,
      backgroundColor: '#F8F6F8',
      [theme.breakpoints.down('xs')]: {
        height: '69vh',
      },
      [theme.breakpoints.up('sm')]: {
        height: '81vh',
      },
    },
    loading: {
      margin: `${theme.spacing.unit *4}px auto`,  
      padding: `${theme.spacing.unit *4}px auto`
    },
    fabChat: {
        position: 'fixed',
        bottom: '9vh',
        right: `${theme.spacing.unit *2}px`,
        width: '40px',
        height: '40px',
        color: theme.palette.primary.main,
        [theme.breakpoints.down('xs')]: {
            bottom: '9vh',
          },
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
        <Button className={classes.fabChat} variant="fab">
         <i className="material-icons">chat</i>
        </Button>
    </div>
);

ReviewsList.propTypes = {
    classes: PropTypes.object.isRequired,
    reviews: PropTypes.array,
}

export default withStyles(styles)(ReviewsList);

