import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { RecipeService } from '../recipe.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {
  ind: number;
  recipe;
  editMode = false;
  recipeForm: FormGroup;

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

        this.initForm();
      }
    )
  }

  private initForm() {
    let recipeName = '';
    let recipeImgPath = '';
    let recipedesc = '';

    if (this.editMode) {
      const recipe = this.recipeService.getRecipe();
      recipeName = recipe.name;
      recipeImgPath = recipe.imagePath;
      recipedesc = recipe.description;
    }

    this.recipeForm = new FormGroup({
      'name': new FormControl(recipeName),
      'imagePath': new FormControl(recipeImgPath),
      'description': new FormControl(recipedesc)
    });
  }

}
