export const getActiveFilters = params => {
  let activeFilters = [];
  let filterValues = [];

  for (const param in params) {
    if (params[param]) {
      activeFilters.push(param);
      filterValues.push(params[param]);
    }
  }

  return {
    activeFilters,
    filterValues,
  };
};

export const handleFilter = filter => {
  let message = '';
  let value = '';

  if (filter.activeFilters[0] === 'priceParams') {
    message = 'price range';
    value = `${filter.filterValues[0]}`;
  } else if (filter.activeFilters[0] === 'capacityParams') {
    message = 'capacity range';
    value = `${filter.filterValues[0]}`;
  } else if (filter.activeFilters[0] === 'timeNow') {
    message = 'opened restaurants at';
    if (+filter.filterValues[0]) {
      value = `${filter.filterValues[0]}h`;
    } else {
      value = 'this moment';
    }
  } else if (
    filter.activeFilters[0] === 'minPrice' &&
    filter.activeFilters[1] === 'maxPrice'
  ) {
    message = 'price range between';
    value = `${filter.filterValues[0]} and ${filter.filterValues[1]}$`;
  } else if (
    filter.activeFilters[0] === 'minCapacity' &&
    filter.activeFilters[1] === 'maxCapacity'
  ) {
    message = 'capacity range between';
    value = `${filter.filterValues[0]} and ${filter.filterValues[1]}`;
  }
  return { message, value };
};
