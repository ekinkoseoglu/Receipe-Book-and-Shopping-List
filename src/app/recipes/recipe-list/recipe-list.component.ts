import { Component, OnInit } from '@angular/core';
import { RecipeService } from 'src/app/shared/services/recipe.service';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
recipes:Recipe[]=[]
receivedRecipe:Recipe;

  constructor(private recipeService:RecipeService) { }

  ngOnInit(): void {
    
    this.recipes = this.recipeService.getRecipes();
  }



}
