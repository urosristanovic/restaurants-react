import { Component } from 'react';
import FoodCheckbox from './foodCheckbox';
import FoodRadioButton from './foodRadioButton';

class FoodForm extends Component {
  state = {
    foods: [],
  };
  onSubmit = e => {
    e.preventDefault();
    this.props.history.push(`restaurants?foods=${this.state.foods}`);
  };
  handleChecked = food => {
    let foods = this.state.foods;

    if (foods.includes(food)) {
      foods = foods.filter(f => f !== food);
    } else {
      foods.push(food);
    }
    this.setState({ foods });
  };

  render() {
    const { foods } = this.props;
    return (
      <form action='' id='form-food'>
        {foods.map(food => {
          return (
            <FoodCheckbox
              key={food.id}
              food={food}
              onChecked={e => this.handleChecked(e)}
            />
          );
        })}
        <div className='separate'>
          <FoodRadioButton name='all' />
          <FoodRadioButton name='any' />
        </div>
        <div className='btn-submit'>
          <button
            onClick={this.onSubmit}
            className='red'
            type='submit'
            id='submit'
          >
            Apply filters
          </button>
        </div>
      </form>
    );
  }
}

export default FoodForm;
