import Logo from './logo';
import List from './list';
import Sizes from './sizes';
import WorkingHours from './workingHours';

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
              <Sizes res={res} />
              <WorkingHours res={res} />
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Restaurants;
