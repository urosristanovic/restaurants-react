import Button from './button';

const RangeFilter = ({ ranges, heading, color }) => {
  return (
    <div className='filter-item'>
      <p>{heading}:</p>
      <div className='btns'>
        {ranges.map(range => {
          return <Button key={range.id} range={range} color={color} />;
        })}
      </div>
    </div>
  );
};

export default RangeFilter;
