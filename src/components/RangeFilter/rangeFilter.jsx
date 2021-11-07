import RangeButton from './rangeButton';
import RangeForm from './rangeForm';

const RangeFilter = ({ ranges, title, color }) => {
  const upperHeading =
    title.charAt(0).toUpperCase() + title.slice(1).toLowerCase();
  return (
    <div className='filter-item'>
      <p>{upperHeading} range:</p>
      <div className='btns'>
        {ranges.map(range => {
          return (
            <RangeButton
              key={range.id}
              title={title}
              range={range}
              color={color}
            />
          );
        })}
      </div>

      <RangeForm color={color} title={title} />

      <div className={'btn-advanced'}>
        <button className={color}>Advanced filters</button>
      </div>
    </div>
  );
};

export default RangeFilter;
