import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {
  ind: number;
  recipe;
  editMode;

  constructor(private routes: ActivatedRoute,
              private recipeService: RecipeService) { }

  ngOnInit() {
    this.recipeService.selectRecipe(+this.routes.snapshot.params['ind']);
    this.recipe = this.recipeService.getRecipe();

    this.routes.params.subscribe(
      (params: Params) => {
        this.ind = +params['ind'];
        this.recipeService.selectRecipe(this.ind);
        this.recipeService.getRecipe();
        this.editMode = params['ind'] != null;
      }
    )
  }

}
