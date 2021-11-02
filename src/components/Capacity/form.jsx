import React from 'react';

const Form = () => {
  return (
    <form action='' id='capacity-form'>
      <div className='min-wrapper'>
        <label htmlFor='min-capacity'> Min capacity: </label>
        <input
          type='number'
          name='min-capacity'
          id='min-capacity'
          placeholder='tables'
          required
        />
      </div>
      <div className='max-wrapper'>
        <label htmlFor='max-capacity'> Max capacity: </label>
        <input
          type='number'
          name='max-capacity'
          id='max-capacity'
          placeholder='tables'
          required
        />
      </div>
      <div className='btn-submit'>
        <button type='submit' id='submit'>
          Apply filters
        </button>
      </div>
    </form>
  );
};

export default Form;
