import React, { useState, useEffect } from "react";
import "./Categories.css";
import RecipeCard from "./RecipeCard";

const categoriesApi = "https://www.themealdb.com/api/json/v1/1/categories.php";
const searchApi = "https://www.themealdb.com/api/json/v1/1/filter.php?c=";

function Categories() {
  const [isLoading, setIsLoading] = useState(false);
  const [recipes, setRecipes] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [categories, setCategories] = useState([]);

  // Fetch categories
  useEffect(() => {
    const fetchCategories = async () => {
      setIsLoading(true);
      const res = await fetch(categoriesApi);
      const data = await res.json();
      // Limit categories to five
      const limitedCategories = data.categories.slice(0, 5); 
      setCategories(limitedCategories);
      setIsLoading(false);
    };
    fetchCategories();
  }, []);

  // Fetch recipes based on selected category
  useEffect(() => {
    const fetchRecipes = async () => {
      setIsLoading(true);
      const url = searchApi + selectedCategory;
      const res = await fetch(url);
      const data = await res.json();
      setRecipes(data.meals);
      setIsLoading(false);
    };
    if (selectedCategory) {
      fetchRecipes();
    }
  }, [selectedCategory]);


  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div className="containers">
      <div className="mb-9">
        <div className="grid gap-4 grid-cols btns sm:grid-cols-3 xl:grid-cols-6">
          {categories.map((category) => (
            <button
              key={category.strCategory}
              className="px-3 py-2 text-pink-400 transition-colors duration-300 border border-pink-600 rounded-3xl hover:bg-pink-500 hover:text-white hover:border-pink-600"
              onClick={() => handleCategoryClick(category.strCategory)}
            >
              {category.strCategory}
            </button>
          ))}
        </div>
      </div>
      <div className="recipes">
        {recipes ? (
          recipes.map((recipe) => (
            <RecipeCard key={recipe.idMeal} recipe={recipe} category={selectedCategory} />
          ))
        ) : (
          <p>No Results.</p>
        )}
      </div>
    </div>
  );
}

export default Categories;
