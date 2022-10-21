import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
    @Output() getIngredient = new EventEmitter<{name:string, amount:number}>();
    @Output() clear = new EventEmitter();
    @ViewChild('nameInput') nameInputRef: ElementRef;
    @ViewChild('amountInput') amountInputRef: ElementRef;
  constructor() { }

  ngOnInit(): void {
  }
  addItem(){
    var addedItem:{name:string, amount:number} = {name: this.nameInputRef.nativeElement.value, amount: this.amountInputRef.nativeElement.value};
   this.getIngredient.emit(addedItem);
    console.log(addedItem);
  }
  onClear(){
    this.clear.emit();
  }
}
