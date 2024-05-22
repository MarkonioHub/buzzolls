const state = {
    vacancies: [],
}

const getters = {
    VACANCIES: state => {
        return state.vacancies
    },
}

const mutations = {
    SET_VACANCIES: (state, payload) => {
        state.vacancies = payload
    },
}

const actions = {
    GET_VACANCIES: async (context) => {
        await fetch(`${process.env.VUE_APP_URL}/vacancies.json`)
            .then(response => response.json())
            .then(data => context.commit('SET_VACANCIES', data))
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
