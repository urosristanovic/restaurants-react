import './App.css';
import capacities from './assets/json/capacity.json';
import prices from './assets/json/prices.json';
import ServedFood from './components/Food/servedFood';
import RangeFilter from './components/RangeFilter/rangeFilter';
import Time from './components/Time/time';

function App() {
  return (
    <div className='container'>
      <section className='filter'>
        <RangeFilter ranges={prices} color='green' title='price' />
        <RangeFilter ranges={capacities} color='blue' title='capacity' />
        <Time />
        <ServedFood />
      </section>
      <div>
        <h2 className='no-restaurants' id='no-restaurants'>
          Sorry, there are no restaurants with this filter criteria. Please, try
          something else.
        </h2>
        <h3 className='number-of-restaurants' id='number-of-restaurants'>
          Number of restaurants
        </h3>
        <div className='restaurants' id='restaurants'></div>
      </div>
    </div>
  );
}

export default App;
