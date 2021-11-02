import React from 'react';

const RangeButton = ({ id, label, min, max, note, color }) => {
  return (
    <button key={id} className={label} value={label}>
      <span className={'tooltiptext ' + color}>
        {min}-{max}
      </span>
      {note}
    </button>
  );
};

export default RangeButton;
