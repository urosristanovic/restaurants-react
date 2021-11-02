const Button = ({ range, color }) => {
  return (
    <button key={range.id} className={color} value={range.label}>
      <span className={'tooltiptext ' + color}>
        {range.min}-{range.max}
      </span>
      {range.note}
    </button>
  );
};

export default Button;
