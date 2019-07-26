import { Injectable } from '@angular/core';

import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {
  private recipes: Recipe[] = [
    {
      id: 'r1',
      title: 'Pizza',
      imageUrl: 'https://i.kinja-img.com/gawker-media/image/upload/s--ydpaD69j--/c_scale,f_auto,fl_progressive,q_80,w_800/lggfxr1bze6xnsxok6iw.jpg',
      ingredients: [
        'pizza'
      ]
    },
    {
      id: 'r2',
      title: 'Spaghetti',
      imageUrl: 'https://www.fivehearthome.com/wp-content/uploads/2019/03/One-Pot-Spaghetti-Recipe-by-Five-Heart-Home_700pxPlate.jpg',
      ingredients: [
        'spaghetti'
      ]
    }
  ];
  constructor () { }

  getAllRecipes () {
    return [...this.recipes];
  }

  getRecipe (recipeId: string) {
    return {
      ...this.recipes.find(recipe => {
        return recipe.id === recipeId;
      })
    };
  }
}
