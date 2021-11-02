import './App.css';
import capacities from './assets/json/capacity.json';
import foods from './assets/json/food.json';
import prices from './assets/json/prices.json';
import ServedFood from './components/FoodFilter/foodFilter';
import Messages from './components/Messages/messages';
import RangeFilter from './components/RangeFilter/rangeFilter';
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
      <Messages />
    </div>
  );
}

export default App;
