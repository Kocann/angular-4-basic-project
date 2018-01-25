import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ShoppingListComponent } from "./shopping-list.component";


const shoopingListRoutes: Routes = [
  { path: 'shopping-list', component: ShoppingListComponent},
]

@NgModule({
  imports: [
    RouterModule.forChild(shoopingListRoutes)
  ],
  exports: [
    RouterModule
  ]
})

export class ShoppingListRoutingModule {

}