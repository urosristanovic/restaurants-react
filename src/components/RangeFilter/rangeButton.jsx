import { Link, withRouter } from 'react-router-dom';

const RangeButton = ({ range, color, title, onClick }) => {
  const handleClick = () => {
    // const query = new URLSearchParams();
    // query.set(title, range.label);
    // window.location = '/restaurants?' + query;
    // history push, router
    // link/button
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

export default withRouter(RangeButton);
