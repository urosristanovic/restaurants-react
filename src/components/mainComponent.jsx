import RangeFilter from './RangeFilter/rangeFilter';
import Time from './Time/time';
import ServedFood from './FoodFilter/foodFilter';
import Messages from './Messages/messages';
import Restaurants from './Restaurants/restaurants';
import { Component } from 'react';

class MainCompnent extends Component {
  render() {
    const { prices, capacities, foods, restaurants, onClick } = this.props;
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
          <Messages />
          <Restaurants restaurants={restaurants} />
        </div>
      </div>
    );
  }
}

export default MainCompnent;
