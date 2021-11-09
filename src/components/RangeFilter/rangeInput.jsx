import { Component } from 'react';

class RangeInput extends Component {
  state = {
    value: '',
  };

  handleChange = (e, title, value) => {
    this.props.onParams(`?${title}-${value}=${e.target.value}`, title);
    this.props.history.push(`?${title}-${value}=${e.target.value}`);
    this.setState({ title: e.target.value });
  };

  render() {
    const { title, value } = this.props;
    const name = value.charAt(0).toUpperCase() + value.slice(1).toLowerCase();

    return (
      <div className={`${value}-wrapper`}>
        <label htmlFor={`${value}-${title}`}>
          {name} {title}:
        </label>
        <input
          type='number'
          name={`${value}-${title}`}
          id={`${value}-${title}`}
          placeholder={title}
          onChange={e => this.handleChange(e, title, value)}
          required
        />
      </div>
    );
  }
}

export default RangeInput;
