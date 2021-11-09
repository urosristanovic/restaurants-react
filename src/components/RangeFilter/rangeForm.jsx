import React, { Component } from 'react';
import RangeInput from './rangeInput';

class RangeForm extends Component {
  state = {
    minPrice: '',
    maxPrice: '',
    minCapacity: '',
    maxCapacity: '',
  };

  handleSubmit = e => {
    e.preventDefault();
    const id = e.target.id;
    if (id === 'price')
      this.props.history.push(
        `restaurants?${this.state.minPrice}&${this.state.maxPrice}`
      );
    if (id === 'capacity')
      this.props.history.push(
        `restaurants?${this.state.minCapacity}&${this.state.maxCapacity}`
      );
  };

  handleParams = (e, params, value) => {
    if (params === 'capacity') {
      if (value === 'min') {
        this.setState({ minCapacity: `${value}-${params}=${e.target.value}` });
      } else if (value === 'max') {
        this.setState({ maxCapacity: `${value}-${params}=${e.target.value}` });
      }
    }
    if (params === 'price') {
      if (value === 'min') {
        this.setState({ minPrice: `${value}-${params}=${e.target.value}` });
      } else if (value === 'max') {
        this.setState({ maxPrice: `${value}-${params}=${e.target.value}` });
      }
    }
  };

  render() {
    const { color, title } = this.props;
    return (
      <form id={`${title}-form`}>
        <RangeInput title={title} value='min' onParams={this.handleParams} />
        <RangeInput title={title} value='max' onParams={this.handleParams} />
        <div className='btn-submit'>
          <button id={title} onClick={this.handleSubmit} className={color}>
            Apply filters
          </button>
        </div>
      </form>
    );
  }
}

export default RangeForm;
