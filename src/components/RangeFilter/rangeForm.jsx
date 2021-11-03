import RangeInput from './rangeInput';

const RangeForm = ({ color, title }) => {
  return (
    <form action='' id={`${title}-form`}>
      <RangeInput title={title} value='min' />
      <RangeInput title={title} value='max' />
      <div className='btn-submit'>
        <button className={color}>Apply filters</button>
      </div>
    </form>
  );
};

export default RangeForm;
