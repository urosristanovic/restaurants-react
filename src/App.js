import './App.css';
import MainCompnent from './components/mainComponent';
import { Component } from 'react';
import { Route } from 'react-router';
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

class App extends Component {
  state = {
    restaurants: getRestaurants(),
    prices: getPrices(),
    capacities: getCapacities(),
    foods: getFoods(),
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

    const restaurants = getRestaurants();
    let filteredRestaurants = [];

    if (priceParams) {
      filteredRestaurants = displayRestaurantsByPrice(
        restaurants,
        this.state.prices,
        priceParams
      );
    } else if (capacityParams) {
      filteredRestaurants = displayRestaurantsByCapacity(
        restaurants,
        this.state.capacities,
        capacityParams
      );
    } else if (minPrice && maxPrice) {
      filteredRestaurants = displayRestaurantsByAdvancedPrice(
        restaurants,
        minPrice,
        maxPrice
      );
    } else if (minCapacity && maxCapacity) {
      filteredRestaurants = displayRestaurantsByAdvancedCapacity(
        restaurants,
        minCapacity,
        maxCapacity
      );
    }

    this.setState({ restaurants: filteredRestaurants });
  }

  render() {
    return (
      <>
        {/* <Route
          path='/restaurants?:capacity'
          render={() => (
            <MainCompnent
              prices={this.state.prices}
              capacities={this.state.capacities}
              foods={this.state.foods}
              restaurants={this.state.restaurants}
              onClick={() => this.handleQueries()}
            />
          )}
        /> */}
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
      </>
    );
  }
}

export default withRouter(App);
