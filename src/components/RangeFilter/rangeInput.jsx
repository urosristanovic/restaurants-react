const RangeInput = ({ title, value }) => {
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
        required
      />
    </div>
  );
};

export default RangeInput;
