
const fetch = import('node-fetch').then(module => module.default);


const createError = require('../utils/appError');
const Recipe = require('../models/recipeModel');

const searchApi = "https://www.themealdb.com/api/json/v1/1/filter.php?c=";

exports.getRecipesByCategory = async (req, res, next) => {
  const category = req.params.category;
  try {
    const response = await fetch(searchApi + category);
    const data = await response.json();
    const recipes = data.meals.map(meal => ({
      id: meal.idMeal,
      name: meal.strMeal,
      category: category,
      strCategory: meal.strCategory,
      strMealThumb: meal.strMealThumb,
    }));
    res.json(recipes);
  } catch (error) {
    console.error("Error fetching recipes:", error);
    next(new createError('Internal Server Error', 500));
  }
};
