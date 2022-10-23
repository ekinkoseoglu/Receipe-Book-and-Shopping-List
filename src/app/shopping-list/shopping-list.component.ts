import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shared/services/shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
    color:string = "red";
ingredients:Ingredient[] = [];
  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit(): void {
    this.ingredients = this.shoppingListService.getIngredients();
    //this.shoppingListService.ingredientsChanged.subscribe((ingredients:Ingredient[])=>{
    //    this.ingredients = ingredients;
    //})
  }
 
  clearIngredient(){
    this.ingredients = [];
    console.log("Shopping List",this.ingredients);
    
  }
  onDeleteItem(name:string){
    this.ingredients.splice(this.ingredients.findIndex(ingredient=>ingredient.name===name),1);
    
  }
}
