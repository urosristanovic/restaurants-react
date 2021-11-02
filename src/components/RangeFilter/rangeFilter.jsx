import Button from './button';
import Form from './form';

const RangeFilter = ({ ranges, title, color }) => {
  const upperHeading =
    title.charAt(0).toUpperCase() + title.slice(1).toLowerCase();
  return (
    <div className='filter-item'>
      <p>{upperHeading} range:</p>
      <div className='btns'>
        {ranges.map(range => {
          return <Button key={range.id} range={range} color={color} />;
        })}
      </div>

      <Form color={color} title={title} />

      <div className={'btn-advanced'}>
        <button className={color}>Advanced filters</button>
      </div>
    </div>
  );
};

export default RangeFilter;
