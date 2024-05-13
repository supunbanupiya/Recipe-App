import React, { useState } from "react";
import Navbar from "./Navbar";
import "./Favourites.css";
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

const Favourites = () => {
  const [favorites, setFavorites] = useState(JSON.parse(localStorage.getItem('favorites')) || []);

  
  const handleDeleteClick = (index) => {
    const updatedFavorites = [...favorites];
    updatedFavorites.splice(index, 1); 
    setFavorites(updatedFavorites); 
    localStorage.setItem('favorites', JSON.stringify(updatedFavorites)); 
  };

  return (
    <div>
      <Navbar />
      <div className="cas">
        {favorites.map((recipe, index) => (
          <div key={recipe.id} className={`card-item ${index % 4 === 0 ? 'first-in-row' : ''}`}>
            <div className="cards">
              <img src={recipe.image} alt={recipe.name} className="card-images" />
            </div>
            <div className="card-bodys">
              <div style={{ display: 'flex' }}>
                <p>{recipe.category}</p>
              </div>
            </div>
            <div className="car-bodys" style={{ display: 'flex', alignItems: 'center' }}>
              <div style={{ marginRight: '10px' }}> 
                <p className="categorys"></p>
              </div>
              <h2><b>{recipe.name}</b></h2>
              <button className="favorite-button" onClick={() => handleDeleteClick(index)}>
                <DeleteOutlineIcon />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Favourites;
