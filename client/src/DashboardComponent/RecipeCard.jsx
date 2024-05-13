

import React from "react";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

const RecipeCard = ({ recipe, category }) => {
  const {
    idMeal,
    strMeal,
    strCategory,
    strMealThumb,
  } = recipe;

  const handleFavoriteClick = () => {
    const favoriteRecipe = {
      id: idMeal,
      name: strMeal,
      category: category,
      strCategory: strCategory,
      image: strMealThumb
    };

    
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];

  
    const isAlreadyFavorite = favorites.some(favorite => favorite.id === favoriteRecipe.id);

    
    if (!isAlreadyFavorite) {
      favorites.push(favoriteRecipe);
      localStorage.setItem('favorites', JSON.stringify(favorites));
    }
  };

  return (
    <div>
      <div className="cards">
        <img
          src={strMealThumb}
          alt={strMeal}
          className="card-images"
        />
      </div>
      <div className="card-bodys">
        <div style={{ display: 'flex' }}>
          <p className="category">{category}</p>   
          <button className="favorite-button" onClick={handleFavoriteClick}>
            <FavoriteBorderIcon />
          </button>
        </div>
        <span className="categorys">{strCategory}</span>
        <p><b><a href={"https://www.themealdb.com/meal/" + idMeal} >{strMeal}</a></b></p> 
      </div>
    </div>
  );
};

export default RecipeCard;
