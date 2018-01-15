import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { RecipeService } from '../recipe.service';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { Ingredient } from '../../shared/ingredient.model';
import { Recipe } from '../recipe.model';

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
              private router: Router,
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
    let recipeIngrds = new FormArray([]);

    if (this.editMode) {
      const recipe = this.recipeService.getRecipe();
      recipeName = recipe.name;
      recipeImgPath = recipe.imagePath;
      recipedesc = recipe.description;

      if (recipe['ingredients']) {
        for (let ing of recipe.ingredients) {
          recipeIngrds.push(
            new FormGroup({
              'name': new FormControl(ing.name, Validators.required),
              'amount': new FormControl(ing.amount, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)])
            })
          )
        }
      }
    }

    this.recipeForm = new FormGroup({
      'name': new FormControl(recipeName, Validators.required),
      'imagePath': new FormControl(recipeImgPath, Validators.required),
      'description': new FormControl(recipedesc, Validators.required),
      'ingredients': recipeIngrds
    });
  }

  onSubmit() {
    console.log(this.recipeForm)
    // const newRecipe = new Recipe(this.recipeForm.value['name'],
    //                             this.recipeForm.value['description'],
    //                             this.recipeForm.value['imagePath'],
    //                             this.recipeForm.value['ingredients'])
    if (this.editMode) {
      // this.recipeService.updateRecipe(this.ind, newRecipe);
      this.recipeService.updateRecipe(this.ind, this.recipeForm.value);

    } else {
      // this.recipeService.addRecipe(newRecipe);
      this.recipeService.addRecipe(this.recipeForm.value);
    }

    this.router.navigate(['recipes']);
  }

  onAddIngredient() {
    (<FormArray>this.recipeForm.get('ingredients')).push(
      new FormGroup({
        'name': new FormControl(null, Validators.required),
        'amount': new FormControl(null, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)])
      })
    )
  }

  deleteIngredient(index: number) {
    (<FormArray>this.recipeForm.get('ingredients')).removeAt(index)
  }
}
