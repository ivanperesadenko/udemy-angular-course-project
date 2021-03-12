import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { Recipe } from "./recipe.model";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {
  public recipes: Array<Recipe> = [
    new Recipe('A test recipe', 'This is simply a test', 'https://www.talkwalker.com/images/2020/blog-headers/image-analysis.png'),
    new Recipe('A test', 'This is simply a test', 'https://www.talkwalker.com/images/2020/blog-headers/image-analysis.png'),
  ];

  @Output() recipeSelected: EventEmitter<Recipe> = new EventEmitter<Recipe>();
  constructor() { }

  ngOnInit(): void {
  }

  public selectedRecipe(recipe: Recipe): void {
    this.recipeSelected.emit(recipe);
  }

}
