
export const mutations = {
    setRecipes(state, recipes) {
        state.recipes = recipes;
    },
    setIsLoading(state, isLoading) {
        state.isLoading = isLoading;
    },
    setError(state, error) {
        state.error = error;
    },
};
