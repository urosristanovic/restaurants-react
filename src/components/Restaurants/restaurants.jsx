import Logo from './logo';
import List from './list';

const Restaurants = ({ restaurants }) => {
  return (
    <>
      {restaurants.map(res => {
        console.log(res.category);
        return (
          <div className='card'>
            <Logo src={res.image} />
            <div className='details'>
              <h2 className='restaurant-name'>{res.name}</h2>
              <p className='address'>{res.address}</p>
              <a href={`tel:${res.phoneNumber}`}>{res.phoneNumber}</a>
              <div className='food-card' id='food-card'>
                <List categories={res.category} />
              </div>
              <div className='sizes'>
                <div className='p-range'>
                  <h5>Average meal price:</h5>
                  <p className='avg-price'>{res.avgMealPrice}$</p>
                </div>
                <div className='c-range'>
                  <h5>Capacity:</h5>
                  <p className='card-capacity'>{res.capacity}</p>
                </div>
              </div>
              <div className='w-hours'>
                <p className='openning'>opening: {res.opening}h</p>
                <p className='closing'>closing: {res.closing}h</p>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Restaurants;
