import React from 'react';

const ServedFood = () => {
  return (
    <div id='food-served' className='filter-item'>
      <p>Food served:</p>
      <form action='' id='form-food'>
        <div>
          <input type='checkbox' id='serbian' name='interest' value='serbian' />
          <label htmlFor='serbian'>Serbian</label>
        </div>
        <div>
          <input type='checkbox' id='chinese' name='interest' value='chinese' />
          <label htmlFor='chinese'>Chinese</label>
        </div>
        <div>
          <input
            type='checkbox'
            id='international'
            name='interest'
            value='international'
          />
          <label htmlFor='international'>International</label>
        </div>
        <div>
          <input type='checkbox' id='italian' name='interest' value='italian' />
          <label htmlFor='italian'>Italian</label>
        </div>
        <div>
          <input type='checkbox' id='mexican' name='interest' value='mexican' />
          <label htmlFor='mexican'>Mexican</label>
        </div>
        <div>
          <input type='checkbox' id='burgers' name='interest' value='burgers' />
          <label htmlFor='burgers'>Burgers</label>
        </div>
        <div>
          <input
            type='checkbox'
            id='taiwanese'
            name='interest'
            value='taiwanese'
          />
          <label htmlFor='taiwanese'>Taiwanese</label>
        </div>
        <div className='separate'>
          <div className='all'>
            <input
              type='radio'
              name='separate'
              value='all'
              id='radio-all'
              checked={true}
            />
            <label htmlFor='radio-all'>All </label>
          </div>
          <div className='any'>
            <input type='radio' name='separate' value='any' id='radio-any' />
            <label htmlFor='radio-any'>Any</label>
          </div>
        </div>
        <div className='btn-submit'>
          <button type='submit' id='submit'>
            Apply filters
          </button>
        </div>
      </form>
    </div>
  );
};

export default ServedFood;
