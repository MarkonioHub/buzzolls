const state = {
    menuItems: [],
    subCategories: [],
    categories: []
};

const getters = {
    MENU_ITEMS: state => {
        return state.menuItems
    },
    SUB_CATEGORIES: state => {
        return state.subCategories
    },
    CATEGORIES: state => {
        return state.categories
    },
};

const mutations = {
    SET_MENU_ITEMS: (state, payload) => {
        state.menuItems = payload;
    },
    SET_SUB_CATEGORIES: (state, payload) => {
        state.subCategories = payload;
    },
    SET_CATEGORIES: (state, payload) => {
        state.categories = payload;
    },
};

const actions = {
    GET_MENU: async (context) => {
        await fetch(`${process.env.VUE_APP_URL}/menu.json`)
            .then(response => response.json())
            .then(data => {
                context.commit('SET_MENU_ITEMS', data.menuItems)
                context.commit('SET_SUB_CATEGORIES', data.subCategories)
                context.commit('SET_CATEGORIES', data.categories)
            })
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
