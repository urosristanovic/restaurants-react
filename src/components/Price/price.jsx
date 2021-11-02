import React from 'react';
import Buttons from './buttons';
import Form from './form';

const Price = () => {
  return (
    <div id='price-range' className='filter-item'>
      <p>Price range:</p>
      <Buttons />
      <Form />
      <div className='btn-advanced'>
        <button id='advanced-price'>Advanced filters</button>
      </div>
    </div>
  );
};

export default Price;
