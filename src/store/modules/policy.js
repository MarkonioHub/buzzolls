const state = {
    policy: "",
}

const getters = {
    POLICY: state => {
        return state.policy
    },
}

const mutations = {
    SET_POLICY: (state, payload) => {
        state.policy = payload
    },
}

const actions = {
    GET_POLICY: async (context) => {
        await fetch(`${process.env.VUE_APP_URL}/policy.json`)
            .then(response => response.json())
            .then(data => context.commit('SET_POLICY', data.policyContent))
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
