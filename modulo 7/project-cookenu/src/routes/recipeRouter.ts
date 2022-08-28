import express from 'express';
import { RecipeController } from '../controller/recipesController';

export const recipeRouter = express.Router();

const recipeController = new RecipeController();

recipeRouter.post('/recipecreate', recipeController.create);
recipeRouter.get('/recipeget/:id', recipeController.getRecipe);

