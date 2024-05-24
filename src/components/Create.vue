<script setup lang="ts">
import { reactive } from 'vue';

interface Recipe {
  title: string;
  description: string;
  servings: string;
  prepTime: string;
  cookTime: string;
  ingredients: string[];
  directions: string[];
}

const recipe = reactive({
  'title': '',
  'description': '',
  'servings': '',
  'prepTime': '',
  'cookTime': '',
  'ingredients': [],
  'directions': [],
} as Recipe);

</script>


<template>
  <div>
    <h1>Create a recipe</h1>

    <form>
      <label for="title">Title</label>
      <input type="text" id="title" v-model="recipe.title" />

      <label for="description">Description</label>
      <textarea id="description" v-model="recipe.description"></textarea>

      <label for="servings">Servings</label>
      <input type="number" id="servings" v-model="recipe.servings" />

      <label for="prepTime">Prep Time</label>
      <input type="number" id="prepTime" v-model="recipe.prepTime" />

      <label for="cookTime">Cook Time</label>
      <input type="number" id="cookTime" v-model="recipe.cookTime" />

      <label for="ingredients">Ingredients</label>
      <ul>
        <li v-for="(ingredient, index) in recipe.ingredients" :key="index">
          <input type="text" v-model="recipe.ingredients[index]" />
        </li>
      </ul>
      <button type="button" @click="recipe.ingredients.push('')">Add Ingredient</button>

      <label for="directions">Directions</label>
      <ul>
        <li v-for="(direction, index) in recipe.directions" :key="index">
          <input type="text" v-model="recipe.directions[index]" />
        </li>
      </ul>
      <button type="button" @click="recipe.directions.push('')">Add Direction</button>

      <button type="submit">Create Recipe</button>
    </form>
  </div>
</template>

<style scoped></style>