import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import {Ingredient} from './../../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @ViewChild('ingredientAmount') ingredientAmount: ElementRef;
  @ViewChild('ingredientName') ingredientName: ElementRef;

  constructor(private shopListServ: ShoppingListService) { }

  ngOnInit() {
  }

  ingredientAdded() {
    // this.shopListServ.ingredientAdded.emit({
    //   name: this.ingredientName.nativeElement.value,
    //   amount: this.ingredientAmount.nativeElement.value
    // })
    this.shopListServ.addIngredient({
      name: this.ingredientName.nativeElement.value,
      amount: this.ingredientAmount.nativeElement.value
    })
  }

}
