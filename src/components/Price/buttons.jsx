import React from 'react';
import PriceRanges from '../../assets/json/prices.json';

const Buttons = () => {
  return (
    <div className='btns' id='btns-price'>
      {PriceRanges.map(price => {
        return (
          <button key={price.id} className={price.label} value={price.label}>
            <span className='tooltiptext green'>
              {price.minAvgPricePerMeal}-{price.maxAvgPricePerMeal}
            </span>
            {price.note}
          </button>
        );
      })}
    </div>
  );
};

export default Buttons;
