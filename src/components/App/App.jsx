import React, { Component } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import ReviewsList from '../ReviewsList/ReviewsList';
import ReviewsHeader from '../ReviewsHeader/ReviewsHeader';
import { getReviews } from '../../configs/api-configs';

// Material UI
import { withStyles, Typography } from '../Common';
import withRoot from '../../withRoot';

const styles = theme => ({
  root: {
    textAlign: 'center',
    paddingTop: theme.spacing.unit * 20,
    padding: theme.spacing.unit,
  },
});

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: null
    };
  }
  componentWillMount() {
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
       <ReviewsHeader />
       <ReviewsList reviews={this.state.items} />
       <Footer />
      </div>
    );
  }

}

// export default App;
export default withRoot(withStyles(styles)(App));

