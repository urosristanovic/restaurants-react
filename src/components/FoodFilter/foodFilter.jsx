import React from 'react';
import FoodForm from './foodForm';

const ServedFood = ({ foods }) => {
  return (
    <div id='food-served' className='filter-item'>
      <p>Food served:</p>
      <FoodForm foods={foods} />
    </div>
  );
};

export default ServedFood;
