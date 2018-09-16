import React, { Component } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import ReviewsList from '../ReviewsList/ReviewsList';
import './App.css';
import { getReviews } from '../../configs/api-configs';

// Material UI
import Typography from '@material-ui/core/Typography';
import green from '@material-ui/core/colors/green';
import { withStyles } from '@material-ui/core/styles';
import withRoot from '../../withRoot';

const styles = theme => ({
  root: {
    textAlign: 'center',
    paddingTop: theme.spacing.unit * 20,
    padding: theme.spacing.unit,
    [theme.breakpoints.down('sm')]: {
      backgroundColor: theme.palette.secondary.main,
    },
    [theme.breakpoints.up('md')]: {
      backgroundColor: theme.palette.primary.main,
    },
    [theme.breakpoints.up('lg')]: {
      backgroundColor: green[500],
    },
  },
});

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: null
    };
  }
  componentDidMount() {
    getReviews().then(result => {
      this.setState({
        items: result
      });
    });
  }

  render() {
    return (
      <div className="App">
       <Header />
       <Typography variant="headline" gutterBottom>
         Reviews
       </Typography>
        <ReviewsList className="" reviews={this.state.items} />
        <Footer />
      </div>
    );
  }

}

// export default App;
export default withRoot(withStyles(styles)(App));

