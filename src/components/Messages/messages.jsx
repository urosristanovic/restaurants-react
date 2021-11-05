const Messages = ({ length }) => {
  return (
    <div>
      {length > 0 && (
        <h3 className='number-of-restaurants' id='number-of-restaurants'>
          Number of restaurants is: <i>{length}</i>.
        </h3>
      )}
      {length === 0 && (
        <h2 className='no-restaurants' id='no-restaurants'>
          Sorry, there are no restaurants with this filter criteria. Please, try
          something else.
        </h2>
      )}
      <div className='restaurants' id='restaurants'></div>
    </div>
  );
};

export default Messages;
