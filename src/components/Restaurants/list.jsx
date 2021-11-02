const List = ({ categories }) => {
  console.log(categories);
  return (
    <ul>
      {categories.map(categorie => {
        return <li>{categorie}</li>;
      })}
    </ul>
  );
};

export default List;
