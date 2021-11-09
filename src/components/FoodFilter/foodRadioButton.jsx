const FoodRadioButton = ({ name, onChange }) => {
  return (
    <div className={name}>
      <input
        type='radio'
        name='separate'
        value={name}
        id={`radio-${name}`}
        onChange={e => onChange(e.target.value)}
      />
      <label htmlFor={`radio-${name}`}>
        {name.charAt(0).toUpperCase() + name.slice(1).toLowerCase()}
      </label>
    </div>
  );
};

export default FoodRadioButton;
