import {Recipe} from './recipe.model';
import { EventEmitter } from '@angular/core';

export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe('A test recipe','this is simply a test', 'http://www.kraftrecipes.com/-/media/assets/2016-summer/berry-bliss-cake-106367-642x428.jpg?h=428&w=642&la=en&hash=683305C23551231311E45C0F846E321221576983'),
    new Recipe('A second test recipe','this is simply a second test', 'http://www.kraftrecipes.com/-/media/assets/2016-summer/berry-bliss-cake-106367-642x428.jpg?h=428&w=642&la=en&hash=683305C23551231311E45C0F846E321221576983')
  ];

  getRecipes() {
    return this.recipes.slice(); //return the exact same copy of array
  }
}