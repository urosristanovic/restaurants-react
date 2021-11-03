const CategoriesList = ({ categories }) => {
  return (
    <ul>
      {categories.map(categorie => {
        return <li key={categorie}>{categorie}</li>;
      })}
    </ul>
  );
};

export default CategoriesList;
