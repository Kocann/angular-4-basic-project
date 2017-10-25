//model should be a blueprint for components
//every recipe should have name, desc, and image

export class Recipe {
  public name: string;
  public description: string;
  public imagePath: string;
  
  constructor(name:string, description:string, imagePath:string) {
    this.name = name;
    this.description = description;;
    this.imagePath = imagePath;
  }
}