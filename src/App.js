import { Component } from 'react';
import { Redirect, Route, Switch, withRouter } from 'react-router';
import './App.css';
import MainCompnent from './components/mainComponent';

class App extends Component {
  handleQueries() {
    const params = new URLSearchParams(this.props.location.search);
    const priceParams = params.get('price');
    const capacityParams = params.get('capacity');
    const minPrice = params.get('min-price');
    const maxPrice = params.get('max-price');
    const minCapacity = params.get('min-capacity');
    const maxCapacity = params.get('max-capacity');
    const timeNow = params.get('open-at');

    return {
      priceParams,
      capacityParams,
      minPrice,
      maxPrice,
      minCapacity,
      maxCapacity,
      timeNow,
    };
  }

  render() {
    const params = this.handleQueries();
    return (
      <Switch>
        <Route
          path='/restaurants'
          render={() => <MainCompnent params={params} {...this.props} />}
        />
        <Redirect from='/' exact to='/restaurants' />
      </Switch>
    );
  }
}

export default withRouter(App);
