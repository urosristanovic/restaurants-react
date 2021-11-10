const Messages = ({ length, params }) => {
  let arrayKeys = [];
  let arrayValues = [];
  let paramMessage = '';
  let paramKey = '';
  for (const param in params) {
    if (params[param]) {
      paramMessage = params[param];
      paramKey = param;
      arrayKeys.push(param);
      arrayValues.push(params[param]);
    }
  }
  const handleFilter = paramKey => {
    if (paramKey[0] === 'priceParams') {
      paramKey = 'price range';
    } else if (paramKey[0] === 'capacityParams') {
      paramKey = 'capacity range';
    } else if (paramKey[0] === 'timeNow') {
      paramKey = 'time';
    } else if (paramKey[0] === 'foods') {
      paramKey = '';
    } else if (paramKey[0] === 'minPrice' && paramKey[1] === 'maxPrice') {
      paramKey = '';
    }
    return paramKey;
  };
  paramKey = handleFilter(arrayKeys);

  return (
    <div>
      {length > 0 && (
        <h3 className='number-of-restaurants' id='number-of-restaurants'>
          Number of restaurants is: <i>{length}</i>.
        </h3>
      )}
      {paramMessage ? (
        <p className='filter-message'>
          Your search filter is by {paramKey}: <b>{paramMessage}</b>.
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
