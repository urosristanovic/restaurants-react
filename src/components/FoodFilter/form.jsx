import Checkbox from './checkbox';
import RadioButton from './radioButton';

const Form = ({ foods }) => {
  return (
    <form action='' id='form-food'>
      {foods.map(food => {
        return <Checkbox key={food.id} food={food} />;
      })}
      <div className='separate'>
        <RadioButton name='all' checked={true} />
        <RadioButton name='any' checked={false} />
      </div>
      <div className='btn-submit'>
        <button className='red' type='submit' id='submit'>
          Apply filters
        </button>
      </div>
    </form>
  );
};

export default Form;
