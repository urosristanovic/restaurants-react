import React from 'react';
import FoodForm from './foodForm';

const ServedFood = ({ foods, ...rest }) => {
  return (
    <div id='food-served' className='filter-item'>
      <p>Food served:</p>
      <FoodForm foods={foods} {...rest} />
    </div>
  );
};

export default ServedFood;
