import React from 'react';
import PriceRanges from '../../assets/json/prices.json';
import RangeButton from '../common/rangeButton';

const Buttons = () => {
  return (
    <div className='btns'>
      {PriceRanges.map(price => {
        return (
          <RangeButton
            key={price.id}
            id={price.id}
            label={price.label}
            note={price.note}
            min={price.minAvgPricePerMeal}
            max={price.maxAvgPricePerMeal}
            color='green'
          />
        );
      })}
    </div>
  );
};

export default Buttons;
