import React from 'react';

const Form = () => {
  return (
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
  );
};

export default Form;
