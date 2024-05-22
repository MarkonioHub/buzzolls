const state = {
    offer: [],
    selectedOfferId: ''
}

const getters = {
    OFFER: state => {
        return state.offer
    },
    SELECTED_OFFER_ID: state => {
        return state.selectedOfferId
    },
}

const mutations = {
    SET_OFFER: (state, payload) => {
        state.offer = payload
    },
    SET_SELECTED_OFFER_ID: (state, payload) => {
        state.selectedOfferId = payload
    },
}

const actions = {
    GET_OFFER: async (context) => {
        await fetch(`${process.env.VUE_APP_URL}/offer.json`)
            .then(response => response.json())
            .then(data => context.commit('SET_OFFER', data))
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
