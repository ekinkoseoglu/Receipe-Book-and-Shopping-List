import { Component, Input, OnInit} from '@angular/core';
import { RecipeService } from 'src/app/shared/services/recipe.service';
import { Recipe } from '../../recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
 @Input() recipe: Recipe;
 
 

  constructor(private recipeService:RecipeService) { }
    

  ngOnInit(): void {
  }


    getRecipe(){
        // We trigger the event emitter in the recipe service.
    this.recipeService.recipeSelected.emit(this.recipe);
  }
}
