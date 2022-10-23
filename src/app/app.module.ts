import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { RecipeItemComponent } from './recipes/recipe-list/recipe-item/recipe-item.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';


import { FormsModule } from '@angular/forms';
import { AppHighlightDirective } from './shared/directives/appHighlight.directive';
import { UnlessDirective } from './shared/directives/unlessDirective.directive';
import { DropdownDirective } from './shared/directives/dropdown.directive';


import { ShoppingListService } from './shared/services/shopping-list.service';
import { RecipeService } from './shared/services/recipe.service';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipesComponent,
    RecipeListComponent,
    RecipeDetailComponent,
    RecipeItemComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    AppHighlightDirective,
    UnlessDirective,
    DropdownDirective
 
   
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [RecipeService,ShoppingListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
