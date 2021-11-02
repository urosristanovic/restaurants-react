import React from 'react';
import CapacityRanges from '../../assets/json/capacity.json';
import RangeButton from '../common/rangeButton';

const Buttons = () => {
  return (
    <div className='btns'>
      {CapacityRanges.map(capacity => {
        return (
          <RangeButton
            key={capacity.id}
            id={capacity.id}
            label={capacity.label}
            note={capacity.note}
            min={capacity.minTables}
            max={capacity.maxTables}
            color='blue'
          />
        );
      })}
    </div>
  );
};

export default Buttons;
