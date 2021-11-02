import React from 'react';
import Input from './input';

const Form = ({ color, title }) => {
  return (
    <form action='' id={`${title}-form`}>
      <Input title={title} value='min' />
      <Input title={title} value='max' />
      <div className='btn-submit'>
        <button className={color}>Apply filters</button>
      </div>
    </form>
  );
};

export default Form;
