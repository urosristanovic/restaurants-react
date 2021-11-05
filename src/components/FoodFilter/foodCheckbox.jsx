import { Component } from 'react';

class FoodCheckbox extends Component {
  render() {
    const { food } = this.props;
    return (
      <div>
        <input type='checkbox' id={food.name} value={food.name} />
        <label htmlFor={food.name}>
          {food.name.charAt(0).toUpperCase() + food.name.slice(1).toLowerCase()}
        </label>
      </div>
    );
  }
}

export default FoodCheckbox;