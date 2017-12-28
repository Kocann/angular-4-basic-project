import { Component, OnInit } from '@angular/core';

import { Recipe } from './recipe.model';
import { RecipeService } from './recipe.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers: [RecipeService]
})
export class RecipesComponent implements OnInit {
  recipeDetails = false;
  chosenRecipe;

  constructor(private recipeSer:RecipeService) { }

  ngOnInit() {
    // this.recipeSer.recipeSelected.subscribe(
    //   (recipe: Recipe) => {
    //     this.recipeDetails = true
    //     this.chosenRecipe = recipe;
    //   }
    // )
  }
}
