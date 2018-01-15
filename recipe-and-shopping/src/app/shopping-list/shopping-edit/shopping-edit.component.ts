import { Component, OnInit, ViewChild, ElementRef, OnDestroy } from '@angular/core';
import {Ingredient} from './../../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  sub: Subscription;
  editMode = false;
  editedItemInd: number;
  editeItem: Ingredient;
  @ViewChild('f') slForm: NgForm;

  // @ViewChild('ingredientAmount') ingredientAmount: ElementRef;
  // @ViewChild('ingredientName') ingredientName: ElementRef;

  constructor(private shopListServ: ShoppingListService) { }

  ngOnInit() {
    this.sub = this.shopListServ.startedEditing.subscribe(
      (index: number) => {
        this.editedItemInd = index;
        this.editMode = true;
        this.editeItem = this.shopListServ.getIngredient(index);

        this.slForm.setValue({
          name: this.editeItem.name,
          amount: this.editeItem.amount
        })
      }
    );
  }

  ingredientAdded() {
    // this.shopListServ.ingredientAdded.emit({
    //   name: this.ingredientName.nativeElement.value,
    //   amount: this.ingredientAmount.nativeElement.value
    // })
    // this.shopListServ.addIngredient({
    //   name: this.ingredientName.nativeElement.value,
    //   amount: this.ingredientAmount.nativeElement.value
    // })
  }

  // TD form
  onAddItem(form: NgForm){
    const value = form.value;
    const newIng = new Ingredient(value.name, value.amount)

    if(this.editMode){
      this.shopListServ.updateIngr(this.editedItemInd, newIng);
    } else {
      this.shopListServ.addIngredient(newIng);
    }
    this.editMode = false;
    form.reset();
  }

  onClear() {
    this.editMode = false;
    this.slForm.reset();
  }

  onDelete(form: NgForm) {
    console.log(this.editedItemInd);
    this.shopListServ.deleteIngredient(this.editedItemInd);
    this.onClear();
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
