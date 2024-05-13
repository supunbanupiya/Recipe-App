

const mongoose = require('mongoose');

const recipeSchema = new mongoose.Schema({
    id: {
        type: String,
        required: true,
        unique: true,
    },
    name: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    strCategory: {
        type: String,
        required: true,
    },
    strMealThumb: {
        type: String,
        required: true,
    },
    
});

const Recipe = mongoose.model('Recipe', recipeSchema);
module.exports = Recipe;
