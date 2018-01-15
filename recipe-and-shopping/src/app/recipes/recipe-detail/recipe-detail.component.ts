import { Component, OnInit, Input } from '@angular/core';
import {Recipe} from './../recipe.model';
import { ShoppingListService } from '../../shopping-list/shopping-list.service';
import { RecipeService } from '../recipe.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  recipe;

  constructor(private shopListSer: ShoppingListService, 
              private recipeService: RecipeService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.recipe = this.recipeService.getRecipe();
      }
    )

    this.route.params.subscribe(
      (params: Params) => {
        this.recipeService.selectRecipe(+params['ind']);
        this.recipe = this.recipeService.getRecipe();
      }
    )
  }

  addToShoppingList() {
    this.recipe.ingredients.forEach((x) => {
      this.shopListSer.addIngredient(x);
    })
  }

  editRecipe(){
    this.router.navigate(['edit'], {relativeTo: this.route});
  }

  deleteRecipe() {
    this.recipeService.deleteRecipe(+this.route.snapshot.params['ind']);
    this.router.navigate(['recipes']);
  }
}
