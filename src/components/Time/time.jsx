import React from 'react';
import { Link } from 'react-router-dom';

const Time = () => {
  const handleTime = () => {
    console.log('1');
  };

  return (
    <div id='working-hours' className='filter-item'>
      <p>Working hours:</p>
      <div className='btns'>
        <Link to='?open-at=now'>
          <button className='open-now' id='open-now'>
            open now
          </button>
        </Link>
        <div className='select-hours'>
          <select onClick={handleTime} id='select-hours'>
            <option value='choose'>choose</option>
            <option value='0'>00:00</option>
            <option value='1'>01:00</option>
            <option value='2'>02:00</option>
            <option value='3'>03:00</option>
            <option value='4'>04:00</option>
            <option value='5'>05:00</option>
            <option value='6'>06:00</option>
            <option value='7'>07:00</option>
            <option value='8'>08:00</option>
            <option value='9'>09:00</option>
            <option value='10'>10:00</option>
            <option value='11'>11:00</option>
            <option value='12'>12:00</option>
            <option value='13'>13:00</option>
            <option value='14'>14:00</option>
            <option value='15'>15:00</option>
            <option value='16'>16:00</option>
            <option value='17'>17:00</option>
            <option value='18'>18:00</option>
            <option value='19'>19:00</option>
            <option value='20'>20:00</option>
            <option value='21'>21:00</option>
            <option value='22'>22:00</option>
            <option value='23'>23:00</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Time;
