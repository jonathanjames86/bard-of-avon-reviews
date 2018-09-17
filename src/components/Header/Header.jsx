import React from 'react';
import shakeBro from '../../resources/william-shake.png';
import './Header.css';
import { withStyles, Typography } from '../Common';

const styles = theme => ({
  headerContainer: {
    backgroundColor: theme.palette.primary.light,
    padding: `${theme.spacing.unit}px`,
    color: 'white',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    aligncontent: 'center',
    [theme.breakpoints.down('xs')]: {
      height: '15vh',
    },
    [theme.breakpoints.up('sm')]: {
      height: '6vh',
    },
  }
})

const Header = ({classes}) => (
  <header className={classes.headerContainer}>
    <img src={shakeBro} className="App-logo" alt="logo" />
    <div className="Header-title">
        "Thou camest at me"
    </div>
  </header>
);

export default withStyles(styles)(Header);