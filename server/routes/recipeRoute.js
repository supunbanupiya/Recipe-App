const express = require('express');
const recipeController = require('../controllers/recipeController');
const router = express.Router();

router.get('/:category', recipeController.getRecipesByCategory);

module.exports = router;
