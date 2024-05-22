const state = {
    stockList: [],
}

const getters = {
    STOCK_LIST: state => {
        return state.stockList
    },
}

const mutations = {
    SET_STOCK_LIST: (state, payload) => {
        state.stockList = payload
    },
}

const actions = {
    GET_STOCK_LIST: async (context) => {
        await fetch(`${process.env.VUE_APP_URL}/stock.json`)
            .then(response => response.json())
            .then(data => context.commit('SET_STOCK_LIST', data))
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
