const state = {
    isMapScriptLoad: false,
}

const getters = {
    IS_MAP_SCRIPT_LOAD: state => {
        return state.isMapScriptLoad
    },
}

const mutations = {
    SET_IS_MAP_SCRIPT_LOAD: (state, payload) => {
        state.isMapScriptLoad = payload
    },
}

export default {
    state,
    getters,
    mutations,
}
