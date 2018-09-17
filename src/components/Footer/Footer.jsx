import React from 'react';
import { withStyles, Button } from '../Common';

const styles = theme => ({
  root: {

    height:'50vh',
    overflow: 'scroll',
    width: '100vw',
    padding: `0 ${theme.spacing.unit *2}px`,
    backgroundColor: '#F8F6F8',
  },
  footerContainer: {
    backgroundColor: theme.palette.secondary.dark,
    height: '8vh',
    color: 'white',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  button: {
    padding: `${theme.spacing.unit}px`,
    minWidth: `${theme.spacing.unit * 6}px`,
    color: theme.palette.primary.light
  },
})

const Footer = ({classes}) => (
  <header className={classes.footerContainer}>
    <div>
      <Button className={classes.button}>
        <i className="material-icons">email</i>
      </Button>
      <Button className={classes.button}>
        <i className="material-icons">contact_support</i>
      </Button>
      <Button className={classes.button}>
        <i className="material-icons">sms</i>
      </Button>
    </div>
  </header>
);

export default withStyles(styles)(Footer);