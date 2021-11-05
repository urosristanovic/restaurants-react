import './App.css';
import MainCompnent from './components/mainComponent';
import { Component } from 'react';
import { Redirect, Route, Switch } from 'react-router';
import { withRouter } from 'react-router';
import {
  displayRestaurantsByAdvancedPrice,
  displayRestaurantsByPrice,
} from './services/price';
import {
  getPrices,
  getRestaurants,
  getCapacities,
  getFoods,
} from './services/data';
import {
  displayRestaurantsByAdvancedCapacity,
  displayRestaurantsByCapacity,
} from './services/capacity';
import { displayRestaurantsByTime } from './services/time';

class App extends Component {
  state = {
    restaurants: getRestaurants(),
    prices: getPrices(),
    capacities: getCapacities(),
    foods: getFoods(),
    params: {},
  };

  componentDidMount() {
    // const restaurants = getRestaurants();
    // const prices = getPrices();
    // const capacities = getCapacities();
    // const foods = getFoods();
    // this.setState({ restaurants, prices, capacities, foods });

    this.handleQueries();
  }

  handleQueries() {
    const params = new URLSearchParams(this.props.location.search);
    const priceParams = params.get('price');
    const capacityParams = params.get('capacity');
    const minPrice = params.get('min-price');
    const maxPrice = params.get('max-price');
    const minCapacity = params.get('min-capacity');
    const maxCapacity = params.get('max-capacity');
    const timeNow = params.get('open-at');

    this.setState({
      params: {
        priceParams,
        capacityParams,
        minPrice,
        maxPrice,
        minCapacity,
        maxCapacity,
        timeNow,
      },
    });
  }

  render() {
    return (
      <>
        <Switch>
          <Route
            path='/restaurants'
            render={() => (
              <MainCompnent
                prices={this.state.prices}
                capacities={this.state.capacities}
                foods={this.state.foods}
                restaurants={this.state.restaurants}
                params={this.state.params}
                onClick={() => this.handleQueries()}
              />
            )}
          />
          <Redirect from='/' exact to='/restaurants' />
        </Switch>
      </>
    );
  }
}

export default withRouter(App);
