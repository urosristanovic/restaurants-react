import React from 'react';
import Buttons from './buttons';
import Form from './form';

const Capacity = () => {
  return (
    <div id='filter-capacity' className='filter-item'>
      <p>Capacity:</p>
      <Buttons />
      <Form />
      <div className='btn-advanced'>
        <button id='advanced-capacity'>Advanced filters</button>
      </div>
    </div>
  );
};

export default Capacity;
