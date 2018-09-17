import React from 'react';
import shakeBro from '../../resources/william-shake.png';
import './Header.css';
import { withStyles, Typography } from '../Common'

const styles = theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    height:'50vh',
    overflow: 'scroll',
    // height: '65vh',
    width: '100vw',
    padding: `0 ${theme.spacing.unit *2}px`,
    backgroundColor: '#F8F6F8',
  },
  headerContainer: {
    backgroundColor: "#80CBC4",
    height: '15vh',
    padding: '20px',
    color: 'white',
    display: 'flex',
    flexDirection: 'row',
    [theme.breakpoints.down('xs')]: {
      height: '15vh',
    },
    [theme.breakpoints.up('sm')]: {
      height: '10vh',
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