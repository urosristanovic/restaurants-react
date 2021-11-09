import React, { Component } from 'react';
import RangeInput from './rangeInput';

class RangeForm extends Component {
  state = {
    price: '',
    capacity: '',
  };

  handleSubmit = e => {
    e.preventDefault();
    // const param = this.handleParams();
    // this.props.history.push(`?${param}`);
  };

  handleParams = (params, value) => {
    console.log(params, value);
    if (value === 'price') this.setState({ price: params });
    if (value === 'capacity') this.setState({ capacity: params });
  };

  render() {
    const { color, title, ...rest } = this.props;
    return (
      <form id={`${title}-form`}>
        <RangeInput
          title={title}
          value='min'
          params={this.state.price}
          onParams={this.handleParams}
          {...rest}
        />
        <RangeInput
          title={title}
          value='max'
          params={this.state.capacity}
          onParams={this.handleParams}
          {...rest}
        />
        <div className='btn-submit'>
          <button onClick={this.handleSubmit} className={color}>
            Apply filters
          </button>
        </div>
      </form>
    );
  }
}

export default RangeForm;
