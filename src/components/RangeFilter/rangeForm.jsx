import RangeInput from './rangeInput';

const RangeForm = ({ color, title }) => {
  const handleSubmit = e => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit} id={`${title}-form`}>
      <RangeInput title={title} value='min' />
      <RangeInput title={title} value='max' />
      <div className='btn-submit'>
        <button className={color}>Apply filters</button>
      </div>
    </form>
  );
};

export default RangeForm;
