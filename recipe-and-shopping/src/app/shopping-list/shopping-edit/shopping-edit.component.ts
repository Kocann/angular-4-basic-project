import { Component, OnInit, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import {Ingredient} from './../../shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @Output() newIngredient = new EventEmitter<Ingredient>();
  @ViewChild('ingredientAmount') ingredientAmount: ElementRef;
  @ViewChild('ingredientName') ingredientName: ElementRef;

  constructor() { }

  ngOnInit() {
  }

  ingredientAdded() {
    this.newIngredient.emit({
      name: this.ingredientName.nativeElement.value,
      amount: this.ingredientAmount.nativeElement.value
    })
  }

}
