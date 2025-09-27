import React, { createContext, useState, useContext } from "react";


export const FavContext = createContext();


export const FavProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  const addToFav = (meal) => {
    const isAlreadyFav = favorites.some(fav => fav.idMeal === meal.idMeal);
    if (!isAlreadyFav) {
      alert("Add In Favorites")
      setFavorites([...favorites, meal]);
    }
  };

  const removeFromFav = (idMeal) => {
    setFavorites(favorites.filter(fav => fav.idMeal !== idMeal));
    alert("Remove Form Favorites")
  };

  return (
    <FavContext.Provider value={{ favorites, addToFav, removeFromFav }}>
      {children}
    </FavContext.Provider>
  );
};


export function Fav() {
  const { favorites, removeFromFav } = useContext(FavContext);

  return (
    <div>
      <h2>My Favorites</h2>
      {favorites.length === 0 ? (
        <p className="fav">No favorites yet</p>
      ) : (
        favorites.map((meal) => (
         <div className="food">
          <div key={meal.idMeal} className="favfood">
            <img src={meal.strMealThumb} alt={meal.strMeal} width="120" />
            <p>{meal.strMeal}</p>
            <button onClick={() => removeFromFav(meal.idMeal)}>Remove</button>
          </div>
        </div>
        ))
      )}
    </div>
  );
}
