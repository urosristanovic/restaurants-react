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
      console.log(filteredRestaurants);
    } else if (minCapacity && maxCapacity) {
      filteredRestaurants = displayRestaurantsByAdvancedCapacity(
        restaurants,
        minCapacity,
        maxCapacity
      );
    } else if (timeNow) {
      filteredRestaurants = displayRestaurantsByTime(restaurants, timeNow);
    }
    this.setState({ restaurants: filteredRestaurants });
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
