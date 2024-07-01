
export const actions = {
    async fetchRecipes({ commit }) {
        commit('setIsLoading', true);
        commit('setError', null);
        try {
            const response = await this.$axios.get('/recipes'); // Replace with your API endpoint
            commit('setRecipes', response.data);
        } catch (error) {
            commit('setError', error);
        } finally {
            commit('setIsLoading', false);
        }
    },
};
