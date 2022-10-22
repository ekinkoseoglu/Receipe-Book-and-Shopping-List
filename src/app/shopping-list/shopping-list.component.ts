import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
    color:string = "red";
ingredients:Ingredient[] = [
    {name:'Apples',amount:5},{name:'Tomatoes',amount:10}
];
  constructor() { }

  ngOnInit(): void {
  }
  selectIngredient(ingredient:Ingredient){

    this.ingredients.push(ingredient);
    console.log("Shopping List",this.ingredients);
  }
  clearIngredient(){
    this.ingredients = [];
    console.log("Shopping List",this.ingredients);
    
  }
  onDeleteItem(name:string){
    this.ingredients.splice(this.ingredients.findIndex(ingredient=>ingredient.name===name),1);
    
  }
}
