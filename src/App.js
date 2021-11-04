import './App.css';
import MainCompnent from './components/mainComponent';
import { Component } from 'react';
import { Route } from 'react-router';
import { withRouter } from 'react-router';
import { getRestaurantsByPrice } from './services/price';
import {
  getPrices,
  getRestaurants,
  getCapacities,
  getFoods,
} from './services/data';
import { getRestaurantsByCapacity } from './services/capacity';

class App extends Component {
  state = {
    restaurants: [],
    prices: [],
    capacities: [],
    foods: [],
    params: '',
  };

  componentDidMount() {
    const restaurants = getRestaurants();
    const prices = getPrices();
    const capacities = getCapacities();
    const foods = getFoods();
    this.setState({ restaurants, prices, capacities, foods });
  }

  handleQueries() {
    const params = new URLSearchParams(this.props.location.search);
    const priceParams = params.get('price');
    const capacityParams = params.get('capacity');
    const restaurants = getRestaurants();
    let filteredRestaurants = getRestaurants();
    if (priceParams) {
      filteredRestaurants = getRestaurantsByPrice(
        restaurants,
        this.state.prices,
        priceParams
      );
    } else if (capacityParams) {
      filteredRestaurants = getRestaurantsByCapacity(
        restaurants,
        this.state.capacities,
        capacityParams
      );
    }
    this.setState({ restaurants: filteredRestaurants });
  }

  render() {
    return (
      <Route
        path='/restaurants'
        render={() => (
          <MainCompnent
            prices={this.state.prices}
            capacities={this.state.capacities}
            foods={this.state.foods}
            restaurants={this.state.restaurants}
            onClick={() => this.handleQueries()}
          />
        )}
      />
    );
  }
}

export default withRouter(App);
