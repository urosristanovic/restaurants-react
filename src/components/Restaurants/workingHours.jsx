const WorkingHours = ({ res }) => {
  return (
    <div className='w-hours'>
      <p className='openning'>opening: {res.opening}h</p>
      <p className='closing'>closing: {res.closing}h</p>
    </div>
  );
};

export default WorkingHours;
