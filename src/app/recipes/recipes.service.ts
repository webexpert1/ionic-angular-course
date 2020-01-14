import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {
    private recipes: Recipe[] = [
      {
        id: 'r1',
        title: 'Schnitzel',
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqxRkDOtlyyaHZTvfvXsrQCI7JoY28Nw7voje4dN--IEngZgSyvw&s',
        ingredients: ['French Fries', 'Port Meat', 'Salad']
      },
      {
        id: 'r2',
        title: 'Spaghetti',
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqxRkDOtlyyaHZTvfvXsrQCI7JoY28Nw7voje4dN--IEngZgSyvw&s',
        ingredients: ['Spaghetti', 'Meat', 'Tomatoes']
      },
    ];
  constructor() { }

  getRecipes() {
    return [...this.recipes];
  }

  getRecipe(recipeId: string) {
    return {...this.recipes.find(recipe => {
      return recipe.id === recipeId;
    })};
  }

  deleteRecipe(recipeId: string) {
    this.recipes = this.recipes.filter(recipe => {
      return recipe.id !== recipeId;
    });
  }
}
