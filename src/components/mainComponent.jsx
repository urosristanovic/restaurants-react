import RangeFilter from './RangeFilter/rangeFilter';
import Time from './Time/time';
import ServedFood from './FoodFilter/foodFilter';
import Messages from './Messages/messages';
import Restaurants from './Restaurants/restaurants';
import { Component } from 'react';
import { getRestaurants } from './../services/data';
import {
  displayRestaurantsByPrice,
  displayRestaurantsByAdvancedPrice,
} from './../services/price';
import {
  displayRestaurantsByCapacity,
  displayRestaurantsByAdvancedCapacity,
} from './../services/capacity';
import { displayRestaurantsByTime } from './../services/time';

class MainCompnent extends Component {
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

  render() {
    const { prices, capacities, foods, restaurants, params, onClick } =
      this.props;
    console.log(params);
    this.filterRestaurants(params);
    return (
      <div className='container'>
        <section className='filter'>
          <RangeFilter
            onClick={onClick}
            ranges={prices}
            color='green'
            title='price'
          />
          <RangeFilter
            onClick={onClick}
            ranges={capacities}
            color='blue'
            title='capacity'
          />
          <Time />
          <ServedFood foods={foods} />
        </section>
        <div className='restaurants' id='restaurants'>
          <Messages length={restaurants.length} />
          <Restaurants restaurants={restaurants} />
        </div>
      </div>
    );
  }
}

export default MainCompnent;
