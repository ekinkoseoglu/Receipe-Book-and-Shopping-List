import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';
import { RecipeService } from '../shared/services/recipe.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {
selectedReceipe:Recipe;
  constructor(private recipeService: RecipeService) { }

  ngOnInit(): void {
    // We subscribe to the event emitter in the recipe service.
    this.recipeService.recipeSelected.subscribe( (recipe:Recipe) => {
        this.selectedReceipe = recipe;
    })
  }

  getRecipe(recipe){
    console.log(recipe);
    this.selectedReceipe=recipe;
  }
}
