import { Component } from 'react';

class FoodCheckbox extends Component {
  state = {
    isCheck: false,
  };

  handleChange = e => {
    this.setState({ isCheck: !this.state.isCheck });
    this.props.onChecked(e.target.id);
  };

  render() {
    const { food } = this.props;
    return (
      <div>
        <input
          onChange={this.handleChange}
          type='checkbox'
          checked={this.state.isCheck}
          id={food.name}
          value={food.name}
        />
        <label htmlFor={food.name}>
          {food.name.charAt(0).toUpperCase() + food.name.slice(1).toLowerCase()}
        </label>
      </div>
    );
  }
}

export default FoodCheckbox;
