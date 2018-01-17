import {Recipe} from './recipe.model';
// import { EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { Subject } from 'rxjs/Subject';
import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/Rx';


@Injectable()
export class RecipeService {
  recipesChanged = new Subject<Recipe[]>();
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

  constructor(private http: Http){}

  getRecipes() {
    return this.recipes.slice(); //return the exact same copy of array
  }

  selectRecipe(id) {
    this.chosenRecipe = this.recipes[id];
  }

  getRecipe() {
    return this.chosenRecipe;
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice())
  }

  updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
    this.recipesChanged.next(this.recipes.slice())
  }

  deleteRecipe(index:number) {
    this.recipes.splice(index, 1);
    this.recipesChanged.next(this.recipes.slice());
  }

  // saveRecipes(data) {
  //   return this.http.put('https://trololo-93310.firebaseio.com/data.json', data, {})
  // }

  // fetchRecipes() {
  //   return this.http.get('https://trololo-93310.firebaseio.com/data.json')
  //   .map(
  //     (response: Response) => {
  //       const data = response.json();
  //       return data;
  //     }
  //   )
  // }

  setRecipes(recipes: Recipe[]) {
    this.recipes = recipes;
    this.recipesChanged.next(this.recipes.slice());
  }
}