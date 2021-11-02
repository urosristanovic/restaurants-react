import './App.css';
import capacities from './assets/json/capacity.json';
import foods from './assets/json/food.json';
import prices from './assets/json/prices.json';
import restaurants from './assets/json/restaurants.json';
import ServedFood from './components/FoodFilter/foodFilter';
import Messages from './components/Messages/messages';
import RangeFilter from './components/RangeFilter/rangeFilter';
import Restaurants from './components/Restaurants/restaurants';
import Time from './components/Time/time';

function App() {
  return (
    <div className='container'>
      <section className='filter'>
        <RangeFilter ranges={prices} color='green' title='price' />
        <RangeFilter ranges={capacities} color='blue' title='capacity' />
        <Time />
        <ServedFood foods={foods} />
      </section>
      <div class='restaurants' id='restaurants'>
        <Messages />
        <Restaurants restaurants={restaurants} />
      </div>
    </div>
  );
}

export default App;
