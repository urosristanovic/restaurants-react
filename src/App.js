import './App.css';
import Capacity from './components/capacity';
import Price from './components/price';
import ServedFood from './components/servedFood';
import Time from './components/time';

function App() {
  return (
    <div className='container'>
      <section className='filter'>
        <Price />
        <Capacity />
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
