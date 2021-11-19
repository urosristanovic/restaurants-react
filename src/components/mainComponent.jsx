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
import { displayRestaurantsByCategories } from './../services/category';

class MainCompnent extends Component {
  state = {
    restaurants: [],
    prices: [],
    capacities: [],
    foods: [],
  };

  async componentDidMount() {
    this.setState({
      restaurants: await getRestaurants(),
      prices: await getPrices(),
      capacities: await getCapacities(),
      foods: await getFoods(),
    });
    this.filterRestaurants(this.props.params);
  }

  componentDidUpdate(prevState) {
    if (prevState.params !== this.props.params) {
      this.filterRestaurants(this.props.params);
    }
  }

  async filterRestaurants(params) {
    const restaurants = await getRestaurants();
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
    } else if (params.foods && params.separate) {
      filteredRestaurants = displayRestaurantsByCategories(
        restaurants,
        params.foods,
        params.separate
      );
    }
    this.setState({ restaurants: filteredRestaurants });
  }

  render() {
    return (
      <div className='container'>
        <section className='filter'>
          <RangeFilter
            ranges={this.state.prices}
            color='green'
            title='price'
            {...this.props}
          />
          <RangeFilter
            ranges={this.state.capacities}
            color='blue'
            title='capacity'
            {...this.props}
          />
          <Time {...this.props} />
          <ServedFood foods={this.state.foods} {...this.props} />
        </section>
        <div className='restaurants' id='restaurants'>
          <Messages
            length={this.state.restaurants.length}
            params={this.props.params}
          />
          <Restaurants restaurants={this.state.restaurants} />
        </div>
      </div>
    );
  }
}

export default MainCompnent;
