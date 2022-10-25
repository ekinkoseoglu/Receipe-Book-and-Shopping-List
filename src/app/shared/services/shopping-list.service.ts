import { Injectable, EventEmitter } from '@angular/core';
import { Ingredient } from '../ingredient.model';

@Injectable({
    providedIn: 'root'
})
export class ShoppingListService {
    // We create an event emitter in the shopping list service.
    ingredientsChanged = new EventEmitter<Ingredient[]>();
    private ingredients: Ingredient[] = [
        { name: 'Apples', amount: 5 }, { name: 'Tomatoes', amount: 10 }
    ];
    constructor() { }

    getIngredients() {
        return this.ingredients;
    }

    addIngredient(ingredient: Ingredient) {
        this.ingredients.push(ingredient);
        //// We emit the event emitter in the shopping list service.
        //this.ingredientsChanged.emit(this.ingredients.slice());
    }

    addIngredients(ingredients: Ingredient[]) {
        //for (let ingredient of ingredients) {
        //    this.addIngredient(ingredient);
        //}
        this.ingredients.push(...ingredients);
        this.ingredientsChanged.emit(this.ingredients.slice());
    }
}