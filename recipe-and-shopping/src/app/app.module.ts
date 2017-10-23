import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ShoppingListComponent } from './ShoppingList/ShoppingList/shopping-list.component';
import { ShoppingListEditComponent } from './ShoppingList/ShoppingListEdit/shopping-list-edit.component';
import { IngredientComponent } from './ingredient/ingredient.component'
import { RecipeComponent } from './RecipeBook/Recipe/recipe.component';
import { RecipeDetailComponent } from './RecipeBook/RecipeDetail/recipe-detail.component';
import { RecipeItemComponent } from './RecipeBook/RecipeItem/recipe-item.component';
import { RecipeListComponent } from './RecipeBook/RecipeList/recipe-list.component';

@NgModule({
  declarations: [
    AppComponent,
    ShoppingListComponent,
    ShoppingListEditComponent,
    IngredientComponent,
    RecipeComponent,
    RecipeDetailComponent,
    RecipeItemComponent,
    RecipeListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
