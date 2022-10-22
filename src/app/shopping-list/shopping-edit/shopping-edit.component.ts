import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
    @Output() getIngredient = new EventEmitter<Ingredient>();
    @Output() clear = new EventEmitter();
    @ViewChild('nameInput') nameInputRef: ElementRef;
    @ViewChild('amountInput') amountInputRef: ElementRef;
  constructor() { }

  ngOnInit(): void {
  }
  addItem(){
    const addedItem = new Ingredient(this.nameInputRef.nativeElement.value,this.amountInputRef.nativeElement.value);
   this.getIngredient.emit(addedItem);
  }
  onClear(){
    this.clear.emit();
  }
}
