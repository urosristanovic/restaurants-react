import './App.css';
import capacities from './assets/json/capacity.json';
import foods from './assets/json/food.json';
import prices from './assets/json/prices.json';
import ServedFood from './components/FoodFilter/foodFilter';
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
      <div>
        <h3 className='number-of-restaurants' id='number-of-restaurants'>
          Number of restaurants
        </h3>
        <h2 className='no-restaurants' id='no-restaurants'>
          Sorry, there are no restaurants with this filter criteria. Please, try
          something else.
        </h2>
        <div className='restaurants' id='restaurants'></div>
      </div>
    </div>
  );
}

export default App;
