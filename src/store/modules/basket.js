function saveBasketInLocalStorage() {
    localStorage.setItem('basket-buzzolls', JSON.stringify(state.basket))
}

const state = {
    basket: [],
}

const getters = {
    BASKET: state => {
        return state.basket
    },
    BASKET_PRICE: state => {
        let price = 0
        state.basket.forEach((product) => {
            price += +product.price * +product.count
        })
        return price
    },
}

const mutations = {
    SET_BASKET: (state, payload) => {
        state.basket = payload
    },
    ADD_PRODUCT: (state, payload) => {
        const isExist = state.basket.filter((item) => item.id === payload.id)
        if (isExist.length) {
            isExist[0].count += 1
        } else {
            state.basket.push(payload)
        }
        saveBasketInLocalStorage()
    },
    REMOVE_PRODUCT: (state, payload) => {
        state.basket = state.basket.filter((item) => item.id !== payload.id)
        saveBasketInLocalStorage()
    },
    INCREMENT_PRODUCT_COUNT: (state, payload) => {
        const index = state.basket.findIndex(product => product.id === payload.id)
        state.basket[index].count += 1
        saveBasketInLocalStorage()
    },
    DECREMENT_PRODUCT_COUNT: (state, payload) => {
        const index = state.basket.findIndex(product => product.id === payload.id)
        state.basket[index].count -= 1
        saveBasketInLocalStorage()
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
