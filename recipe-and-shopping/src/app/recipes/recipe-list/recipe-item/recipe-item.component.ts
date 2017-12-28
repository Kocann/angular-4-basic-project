import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {Recipe} from './../../recipe.model'
import { RecipeService } from '../../recipe.service';
import { ActivatedRoute, Router, Params } from '@angular/router';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe: Recipe;
  @Input() recipeIndex: number;


  constructor(private recipeService: RecipeService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
  }

  onSelected() {
    //this.recipeService.recipeSelected.emit(this.recipe);
    // const id = this.route.snapshot.params['ind'];
    // console.log(id)
    // this.route.params.subscribe(
    //   (params: Params) => {
    //     this.recipeService.selectRecipe(id);
    //     console.log(this.recipeService.getRecipe());
    //   }
    // )
    // this.recipeService.selectRecipe(id);
  }

}
