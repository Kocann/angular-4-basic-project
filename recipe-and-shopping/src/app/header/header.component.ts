import {Component, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})

export class HeaderComponent {
  @Output() activatePanel = new  EventEmitter<{activePanel: string}>();

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
}