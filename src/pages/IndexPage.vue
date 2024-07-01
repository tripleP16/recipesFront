<template>
  <q-page class="flex flex-center">
    <div v-if="isLoading">Loading...</div>
    <div v-else-if="error">Error: {{ error.message }}</div>
    <div v-else class="q-pa-md">
      <h3 class="text-h4 text-center q-mb-md">Recipe Book</h3>

      <q-list bordered separator>
        <q-item v-for="recipe in recipes" :key="recipe._id">
          <q-item-section>
            <q-item-label>
              <router-link :to="`/recipe/${recipe._id}`">
                {{ recipe.name }} 
              </router-link>
            </q-item-label>
            <q-item-label caption>
              Difficulty: {{ recipe.difficulty }} | 
              Cooking Time: {{ recipe.cookingTime }} minutes
            </q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </div>
  </q-page>
</template>

<script>
import { defineComponent, onMounted } from 'vue';
import { useStore } from 'vuex'; // Import the useStore hook for accessing the Vuex store

export default defineComponent({
  name: 'IndexPage',
  setup() {
    const store = useStore();

    onMounted(async () => { // Fetch recipes when the component is mounted
      await store.dispatch('recipes/fetchRecipes'); 
    });

    return {
      isLoading: store.state.recipes.isLoading, // Access properties from the recipes module
      error: store.state.recipes.error,
      recipes: store.state.recipes.recipes,
    };
  },
});
</script>

