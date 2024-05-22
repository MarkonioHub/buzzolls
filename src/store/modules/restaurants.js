const state = {
    restaurants: [],
}

const getters = {
    RESTAURANTS: state => {
        return state.restaurants
    },
}

const mutations = {
    SET_RESTAURANTS: (state, payload) => {
        state.restaurants = payload
    },
}

const actions = {
    GET_RESTAURANTS: async (context) => {
        await fetch(`${process.env.VUE_APP_URL}/restaurants.json`)
            .then(response => response.json())
            .then(data => context.commit('SET_RESTAURANTS', data))
            .catch(() => {

            })
    },
};

export default {
    state,
    getters,
    mutations,
    actions,
};
