import {Component, Output, EventEmitter} from '@angular/core';
import { RecipeService } from '../recipes/recipe.service';
import { Response } from '@angular/http';
import { DataStorageService } from '../shared/data-storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})

export class HeaderComponent {
  @Output() activatePanel = new  EventEmitter<{activePanel: string}>();

  constructor(private dataStorServ: DataStorageService){}

  activateRecipes() {
    this.activatePanel.emit({
      activePanel: "recipes"
    })
    
  }

  activateShoppingList() {
    this.activatePanel.emit({
      activePanel: "shoppingList"
    })
  }

  saveRecipes() {
    this.dataStorServ.storeData().subscribe(
      (response: Response) => {
        console.log(response)
      }
    );
  }

  fetchRecipes() {
    this.dataStorServ.fetchData();
  }

}