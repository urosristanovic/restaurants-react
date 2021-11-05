import FoodCheckbox from './foodCheckbox';
import FoodRadioButton from './foodRadioButton';

const FoodForm = ({ foods }) => {
  return (
    <form action='' id='form-food'>
      {foods.map(food => {
        return <FoodCheckbox key={food.id} food={food} />;
      })}
      <div className='separate'>
        <FoodRadioButton name='all' checked={true} />
        <FoodRadioButton name='any' checked={false} />
      </div>
      <div className='btn-submit'>
        <button className='red' type='submit' id='submit'>
          Apply filters
        </button>
      </div>
    </form>
  );
};

export default FoodForm;
