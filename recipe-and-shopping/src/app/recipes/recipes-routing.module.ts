import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { RecipesComponent } from "./recipes.component";
import { RecipeStartComponent } from "./recipe-start/recipe-start.component";
import { RecipeEditComponent } from "./recipe-edit/recipe-edit.component";
import { RecipeDetailComponent } from "./recipe-detail/recipe-detail.component";
import { AuthGuard } from "../auth/auth-guard.service";

const recipeRoutes: Routes = [
  { path: 'recipes', component: RecipesComponent, children: [
    { path: '', component: RecipeStartComponent },
    { path: 'new', component: RecipeEditComponent, canActivate: [AuthGuard] },
    { path: ':ind', component: RecipeDetailComponent },
    { path: ':ind/edit', component: RecipeEditComponent, canActivate: [AuthGuard] }
  ]}
]

@NgModule({
  imports: [
    RouterModule.forChild(recipeRoutes) //.forchild() are for NOT ROOTE module
  ],
  exports: [
    RouterModule
  ]
})
export class RecipesRoutingModule {

}