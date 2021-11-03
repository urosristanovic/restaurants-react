import Logo from './logo';
import CategoriesList from './categoriesList';
import Sizes from './restaurantSizes';
import WorkingHours from './workingHours';

const RestaurantCard = ({ res }) => {
  return (
    <div className='card'>
      <Logo src={res.image} />
      <div className='details'>
        <h2 className='restaurant-name'>{res.name}</h2>
        <p className='address'>{res.address}</p>
        <a href={`tel:${res.phoneNumber}`}>{res.phoneNumber}</a>
        <div className='food-card' id='food-card'>
          <CategoriesList categories={res.category} />
        </div>
        <Sizes res={res} />
        <WorkingHours res={res} />
      </div>
    </div>
  );
};

export default RestaurantCard;
