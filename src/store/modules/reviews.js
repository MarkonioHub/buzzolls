const state = {
    reviews: [],
}

const getters = {
    REVIEWS: state => {
        return state.reviews
    },
}

const mutations = {
    SET_REVIEWS: (state, payload) => {
        state.reviews = payload
    },
}

const actions = {
    GET_REVIEWS: async (context) => {
        await fetch(`${process.env.VUE_APP_URL}/reviews.json`)
            .then(response => response.json())
            .then(data => context.commit('SET_REVIEWS', data))
            .catch(() => {

            })
    },
}

export default {
    state,
    getters,
    mutations,
    actions,
}
