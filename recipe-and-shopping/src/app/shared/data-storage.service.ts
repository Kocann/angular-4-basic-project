import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import { RecipeService } from "../recipes/recipe.service";
import { Recipe } from "../recipes/recipe.model";
import { AuthService } from "../auth/auth.service";


@Injectable()
export class DataStorageService {
  constructor(private http: Http, 
              private recipeServ: RecipeService,
              private authService: AuthService){}

  storeData() {
    const tk = this.authService.getToken();
    return this.http.put('https://trololo-93310.firebaseio.com/recipes.json' + tk, this.recipeServ.getRecipes());
  }

  fetchData() {
    const tk = this.authService.getToken();

    return this.http.get('https://trololo-93310.firebaseio.com/recipes.json?auth=' + tk)
    .map(
      (response: Response) => {
        const recipes: Recipe[] = response.json();
        for (let recipe of recipes) {
          if (!recipe['ingredients']) {
            recipe['ingredients'] = [];
          }
        }
        return recipes;
      }
    )
    .subscribe(
      (recipes: Recipe[]) => {
        this.recipeServ.setRecipes(recipes);
      }
    );
  }
}