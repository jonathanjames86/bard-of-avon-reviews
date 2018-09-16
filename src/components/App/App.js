import React, { Component } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import ReviewsList from '../ReviewsList/ReviewsList';
import './App.css';
import { getReviews } from '../../configs/api-configs';

import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple';
import green from '@material-ui/core/colors/green';
import CssBaseline from '@material-ui/core/CssBaseline';

// A theme with custom primary and secondary color.
// It's optional.
const theme = createMuiTheme({
  palette: {
    primary: {
      light: purple[300],
      main: purple[500],
      dark: purple[700],
    },
    secondary: {
      light: green[300],
      main: green[500],
      dark: green[700],
    },
  },
});


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    };
  }
  componentDidMount() {
    // let reviews;
    getReviews().then(result => {
      console.log('return the data', result);
      this.setState({
        items: result
      });
    });

  }
  render() {
    return (
      <div className="App">
       <Header />
        <p className="App-intro">
          Reviews
        </p>
        <ReviewsList reviews={this.state.items} />
        <Footer />
      </div>
    );
  }

}

export default App;
