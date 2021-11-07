import RangeFilter from './RangeFilter/rangeFilter';
import Time from './Time/time';
import ServedFood from './FoodFilter/foodFilter';
import Messages from './Messages/messages';
import Restaurants from './Restaurants/restaurants';
import { Component } from 'react';
import {
  getPrices,
  getRestaurants,
  getCapacities,
  getFoods,
} from './../services/data';
import {
  displayRestaurantsByPrice,
  displayRestaurantsByAdvancedPrice,
} from './../services/price';
import {
  displayRestaurantsByCapacity,
  displayRestaurantsByAdvancedCapacity,
} from './../services/capacity';
import { displayRestaurantsByTime } from './../services/time';
import queryString from 'query-string';

class MainCompnent extends Component {
  state = {
    restaurants: [],
    prices: [],
    capacities: [],
    foods: [],
    params: {},
  };

  componentDidMount() {
    this.setState({
      restaurants: getRestaurants(),
      prices: getPrices(),
      capacities: getCapacities(),
      foods: getFoods(),
      params: this.handleSearchParams(),
    });
  }

  filterRestaurants(params) {
    const restaurants = getRestaurants();
    let filteredRestaurants = restaurants;
    if (params.priceParams) {
      filteredRestaurants = displayRestaurantsByPrice(
        restaurants,
        this.state.prices,
        params.priceParams
      );
    } else if (params.capacityParams) {
      filteredRestaurants = displayRestaurantsByCapacity(
        restaurants,
        this.state.capacities,
        params.capacityParams
      );
    } else if (params.minPrice && params.maxPrice) {
      filteredRestaurants = displayRestaurantsByAdvancedPrice(
        restaurants,
        params.minPrice,
        params.maxPrice
      );
      console.log(filteredRestaurants);
    } else if (params.minCapacity && params.maxCapacity) {
      filteredRestaurants = displayRestaurantsByAdvancedCapacity(
        restaurants,
        params.minCapacity,
        params.maxCapacity
      );
    } else if (params.timeNow) {
      filteredRestaurants = displayRestaurantsByTime(
        restaurants,
        params.timeNow
      );
    }
    this.setState({ restaurants: filteredRestaurants });
  }

  handleSearchParams() {
    const result = queryString.parse(this.props.location.search);
    console.log(result);
    return result;
  }

  render() {
    const { params } = this.props;
    // this.filterRestaurants(params);
    // console.log(params);
    // this.handleSearchParams();

    return (
      <div className='container'>
        <section className='filter'>
          <RangeFilter ranges={this.state.prices} color='green' title='price' />
          <RangeFilter
            ranges={this.state.capacities}
            color='blue'
            title='capacity'
          />
          <Time />
          <ServedFood foods={this.state.foods} />
        </section>
        <div className='restaurants' id='restaurants'>
          <Messages length={this.state.restaurants.length} />
          <Restaurants restaurants={this.state.restaurants} />
        </div>
      </div>
    );
  }
}

export default MainCompnent;
