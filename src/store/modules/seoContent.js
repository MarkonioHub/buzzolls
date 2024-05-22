const state = {
    seoContent: "",
}

const getters = {
    SEO_CONTENT: state => {
        return state.seoContent
    },
}

const mutations = {
    SET_SEO_CONTENT: (state, payload) => {
        state.seoContent = payload
    },
}

const actions = {
    GET_SEO_CONTENT: async (context) => {
        await fetch(`${process.env.VUE_APP_URL}/seo-content.json`)
            .then(response => response.json())
            .then(data => context.commit('SET_SEO_CONTENT', data.seoContent))
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
