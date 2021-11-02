import React from 'react';
import Form from './form';

const ServedFood = ({ foods }) => {
  return (
    <div id='food-served' className='filter-item'>
      <p>Food served:</p>
      <Form foods={foods} />
    </div>
  );
};

export default ServedFood;
