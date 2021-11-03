import RestaurantCard from './restaurantCard';

const Restaurants = ({ restaurants }) => {
  return (
    <>
      {restaurants.map(res => {
        return <RestaurantCard key={res.id} res={res} />;
      })}
    </>
  );
};

export default Restaurants;
