const Messages = ({ length, params }) => {
  let activeFilters = [];
  let filterValues = [];

  for (const param in params) {
    if (params[param]) {
      activeFilters.push(param);
      filterValues.push(params[param]);
    }
  }

  const handleFilter = filter => {
    let message = '';
    let value = '';

    if (filter[0] === 'priceParams') {
      message = 'price range';
      value = `${filterValues[0]}`;
    } else if (filter[0] === 'capacityParams') {
      message = 'capacity range';
      value = `${filterValues[0]}`;
    } else if (filter[0] === 'timeNow') {
      message = 'opened restaurants at';
      if (+filterValues[0]) {
        value = `${filterValues[0]}h`;
      } else {
        value = 'this moment';
      }
    } else if (filter[0] === 'minPrice' && filter[1] === 'maxPrice') {
      message = `price range between`;
      value = `${filterValues[0]} and ${filterValues[1]}$`;
    } else if (filter[0] === 'minCapacity' && filter[1] === 'maxCapacity') {
      message = `capacity range between`;
      value = `${filterValues[0]} and ${filterValues[1]}`;
    }
    return { message, value };
  };

  const filter = handleFilter(activeFilters);

  return (
    <div>
      {length > 0 && (
        <h3 className='number-of-restaurants' id='number-of-restaurants'>
          Number of restaurants is: <i>{length}</i>.
        </h3>
      )}
      {length > 0 && filter.value ? (
        <p className='filter-message'>
          Your search filter is by {filter.message}: <b>{filter.value}</b>.
        </p>
      ) : (
        ''
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
