import {Recipe} from './recipe.model';
// import { EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

export class RecipeService {
  //recipeSelected = new EventEmitter<Recipe>();
  private recipes: Recipe[] = [
    new Recipe('A test recipe',
    'this is simply a test', 
    'http://www.kraftrecipes.com/-/media/assets/2016-summer/berry-bliss-cake-106367-642x428.jpg?h=428&w=642&la=en&hash=683305C23551231311E45C0F846E321221576983',
    [
    new Ingredient('Meat', 1),
    new Ingredient('french fries', 10)
    ]),
    new Recipe('A second test recipe',
    'this is simply a second test', 
    'http://www.kraftrecipes.com/-/media/assets/2016-summer/berry-bliss-cake-106367-642x428.jpg?h=428&w=642&la=en&hash=683305C23551231311E45C0F846E321221576983',
    [
      new Ingredient('Meat', 50),
      new Ingredient('Bread', 1)
    ])
  ];
  chosenRecipe = this.recipes[0];

  getRecipes() {
    return this.recipes.slice(); //return the exact same copy of array
  }

  selectRecipe(id) {
    this.chosenRecipe = this.recipes[id];
  }

  getRecipe() {
    return this.chosenRecipe;
  }
}