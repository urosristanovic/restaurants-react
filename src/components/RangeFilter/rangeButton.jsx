import { Link } from 'react-router-dom';

const RangeButton = ({ range, color, title, onClick }) => {
  const handleClick = () => {
    onClick();
  };

  return (
    <Link to={`?${title}=${range.label}`}>
      <button
        key={range.id}
        onClick={handleClick}
        className={color}
        value={range.label}
      >
        <span className={'tooltiptext ' + color}>
          {range.min}-{range.max}
        </span>
        {range.note}
      </button>
    </Link>
  );
};

export default RangeButton;
