const state = {
    isModalMapShow: false,
    isModalOfferShow: false,
    isModalMenuShow: false,
    isModalAuthShow: false,
}

const getters = {
    IS_MODAL_MAP_SHOW: state => {
        return state.isModalMapShow
    },
    IS_MODAL_OFFER_SHOW: state => {
        return state.isModalOfferShow
    },
    IS_MODAL_MENU_SHOW: state => {
        return state.isModalMenuShow
    },
    IS_MODAL_AUTH_SHOW: state => {
        return state.isModalAuthShow
    },
}

const mutations = {
    SET_MODAL_MAP_SHOW: (state, payload) => {
        state.isModalMapShow = payload
    },
    SET_MODAL_OFFER_SHOW: (state, payload) => {
        state.isModalOfferShow = payload
    },
    SET_MODAL_MENU_SHOW: (state, payload) => {
        state.isModalMenuShow = payload
    },
    SET_MODAL_AUTH_SHOW: (state, payload) => {
        state.isModalAuthShow = payload
    },
}

const actions = {

}

export default {
    state,
    getters,
    mutations,
    actions,
}
