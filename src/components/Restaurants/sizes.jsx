const Sizes = ({ res }) => {
  return (
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
  );
};

export default Sizes;
