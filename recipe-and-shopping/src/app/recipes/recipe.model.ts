import { Ingredient } from "../shared/ingredient.model";

//model should be a blueprint for components
//every recipe should have name, desc, and image

export class Recipe {
  public name: string;
  public description: string;
  public imagePath: string;
  public ingredients: Ingredient[];
  
  constructor(name:string, description:string, imagePath:string, ingredients: Ingredient[]) {
    this.name = name;
    this.description = description;;
    this.imagePath = imagePath;
    this.ingredients = ingredients;
  }
}