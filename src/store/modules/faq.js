const state = {
    faq: [],
}

const getters = {
    FAQ: state => {
        return state.faq
    },
}

const mutations = {
    SET_FAQ: (state, payload) => {
        state.faq = payload
    },
}

const actions = {
    GET_FAQ: async (context) => {
        await fetch(`${process.env.VUE_APP_URL}/faq.json`)
            .then(response => response.json())
            .then(data => context.commit('SET_FAQ', data))
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
