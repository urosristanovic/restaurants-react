import RangeInput from './rangeInput';

const RangeForm = ({ color, title, ...rest }) => {
  const handleSubmit = e => {
    e.preventDefault();
    console.log(e.target.value);
    rest.history.push(`?${title}`);
  };
  return (
    <form id={`${title}-form`}>
      <RangeInput title={title} value='min' />
      <RangeInput title={title} value='max' />
      <div className='btn-submit'>
        <button onClick={handleSubmit} className={color}>
          Apply filters
        </button>
      </div>
    </form>
  );
};

export default RangeForm;
