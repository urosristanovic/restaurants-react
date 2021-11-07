import { Link, withRouter } from 'react-router-dom';

const RangeButton = ({ range, color, title }) => {
  return (
    <>
      <Link
        to={`?${title}=${range.label}`}
        value={range.label}
        className={`${color}`}
      >
        {range.note}
        <span className={'tooltiptext ' + color}>
          {range.min}-{range.max}
        </span>
      </Link>
    </>
  );
};

export default withRouter(RangeButton);
