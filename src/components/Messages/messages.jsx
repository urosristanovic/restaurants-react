const Messages = () => {
  return (
    <div>
      <h3 className='number-of-restaurants' id='number-of-restaurants'>
        Number of restaurants
      </h3>
      <h2 className='no-restaurants' id='no-restaurants'>
        Sorry, there are no restaurants with this filter criteria. Please, try
        something else.
      </h2>
      <div className='restaurants' id='restaurants'></div>
    </div>
  );
};

export default Messages;
