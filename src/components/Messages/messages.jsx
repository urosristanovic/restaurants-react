import { getActiveFilters, handleFilter } from './../../services/message';

const Messages = ({ length, params }) => {
  const activeFilters = getActiveFilters(params);
  const filter = handleFilter(activeFilters);

  return (
    <div>
      {length > 0 && (
        <h3 className='number-of-restaurants' id='number-of-restaurants'>
          Number of restaurants is: <i>{length}</i>.
        </h3>
      )}
      {length > 0 && filter.value && (
        <p className='filter-message'>
          Your search filter is by {filter.message}: <b>{filter.value}</b>.
        </p>
      )}
      {length === 0 && (
        <h2 className='no-restaurants' id='no-restaurants'>
          Sorry, there are no restaurants with this filter criteria. Please, try
          something else.
        </h2>
      )}
    </div>
  );
};

export default Messages;
