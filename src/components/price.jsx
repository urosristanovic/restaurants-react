import React from 'react';

const Price = () => {
  return (
    <div id='price-range' className='filter-item'>
      <p>Price range:</p>
      <div className='btns' id='btns-price'></div>
      <form action='' id='price-form'>
        <div className='min-wrapper'>
          <label htmlFor='min-price'> Min price: </label>
          <input
            type='number'
            name='min-price'
            id='min-price'
            placeholder='$'
            required
          />
        </div>
        <div className='max-wrapper'>
          <label htmlFor='max-price'> Max price: </label>
          <input
            type='number'
            name='max-price'
            id='max-price'
            placeholder='$'
            required
          />
        </div>
        <div className='btn-submit'>
          <button id='submit'>Apply filters</button>
        </div>
      </form>
      <div className='btn-advanced'>
        <button id='advanced-price'>Advanced filters</button>
      </div>
    </div>
  );
};

export default Price;
