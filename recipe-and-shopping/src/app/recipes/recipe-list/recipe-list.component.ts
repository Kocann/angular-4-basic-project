import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {Recipe} from './../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() selectedRecipe = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe('A test recipe','this is simply a test', 'http://www.kraftrecipes.com/-/media/assets/2016-summer/berry-bliss-cake-106367-642x428.jpg?h=428&w=642&la=en&hash=683305C23551231311E45C0F846E321221576983')
  ];

  selectRecipe(recipeEl) {
    this.selectedRecipe.emit(recipeEl);
  }

  constructor() { }

  ngOnInit() {
  }

}
