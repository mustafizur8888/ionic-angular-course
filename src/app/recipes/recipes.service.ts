import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {
  private recipes: Recipe[] = [
    {
      id: 'r1',
      title: 'Sc',
      imageUrl:
        'https://media.gettyimages.com/photos/authentic-indian-food-picture-id639389404?s=612x612',
      ingredients: ['frence', 'Pork Meat', 'Salad']
    },
    {
      id: 'r2',
      title: 'r2',
      imageUrl:
        'https://media-cdn.tripadvisor.com/media/photo-s/0e/17/0e/93/famous-lunch-set-veg.jpg',
      ingredients: ['r21', 'r22', 'r23']
    },
    {
      id: 'r3',
      title: 'R3',
      imageUrl: 'http://stmedia.stimg.co/ctyp-nordic-state-fair-new.jpg?w=800',
      ingredients: ['r31', 'r32', 'r33']
    }
  ];
  constructor() { }

  getAllRecipes() {
    return [...this.recipes];
  }
  getRecipe(recipeId: string) {
    return { ...this.recipes.find(x => x.id === recipeId) };
  }
  deleteRecipe(recipeId: string) {
    this.recipes = this.recipes.filter(x => x.id !== recipeId);
  }
}
