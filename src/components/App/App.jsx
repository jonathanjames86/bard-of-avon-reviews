import React, { Component } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import ReviewsList from '../ReviewsList/ReviewsList';
import ReviewsHeader from '../ReviewsHeader/ReviewsHeader';
import { getReviews } from '../../configs/api-configs';

// Material UI
import { withStyles } from '../Common';
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

    this.dynamicSort = this.dynamicSort.bind(this)
  }
  componentWillMount() {
    getReviews().then(result => {
      this.setState({
        items: result
      });
      return result;
    });
  }
  
  sortList() {
    console.log()
  }

  dynamicSort(property, order='asc') {
    const updatedList = [].concat(this.state.items)
    .sort((a, b) => {
      let propA = a[property];
      let propB = b[property];
      console.log('propA', propA);
      if (typeof(propA) === 'string') {
        console.log('Its a string');
        propA = propA.toUpperCase();
        propB = propB.toUpperCase();
      }
      let comparison = 0;
      if (propA > propB) {
        comparison = 1;
      } else if (propA < propB) {
        comparison = -1;
      }
      return (order === 'desc') ? (comparison * -1) : comparison;
    });
    this.setState({
      items: updatedList
    })
}

  render() {
    return (
      <div className="App">
       <Header />
       <ReviewsHeader sortList={this.dynamicSort}/>
       <ReviewsList reviews={this.state.items} />
       <Footer />
      </div>
    );
  }

}

// export default App;
export default withRoot(withStyles(styles)(App));

