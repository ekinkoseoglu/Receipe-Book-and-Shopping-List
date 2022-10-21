import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {
receivedRecipe;
  constructor() { }

  ngOnInit(): void {
  }

  getRecipe(recipe){
    console.log(recipe);
    this.receivedRecipe=recipe;
  }
}
