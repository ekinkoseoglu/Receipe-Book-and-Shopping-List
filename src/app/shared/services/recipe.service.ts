import { Injectable,EventEmitter } from '@angular/core';
import { Recipe } from 'src/app/recipes/recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
    private recipes:Recipe[]=[
        new Recipe(
          "A Test Recipe",
          "This is simply a test",
          "https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/a019-jakubk-0033-quick-pasta-to-go.jpg?w=1200&h=1200&fit=clip&crop=default&dpr=1&q=75&vib=3&con=3&usm=15&cs=srgb&bg=F4F4F3&ixlib=js-2.2.1&s=66e7cea6b7919fb9e923049341a67c3e"
        ),new Recipe(
          "Second Test Recipe",
          "This is simply a test",
          "https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/a019-jakubk-0033-quick-pasta-to-go.jpg?w=1200&h=1200&fit=clip&crop=default&dpr=1&q=75&vib=3&con=3&usm=15&cs=srgb&bg=F4F4F3&ixlib=js-2.2.1&s=66e7cea6b7919fb9e923049341a67c3e"
        )
      ]
      
      constructor() { }

      recipeSelected = new EventEmitter<Recipe>();
      
getRecipes(){
    // We use slice() to return a copy of the array, not the original array itself.
    return this.recipes.slice();
}

}
