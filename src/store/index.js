import Vuex from 'vuex'
import stock from './modules/stock'
import menu from './modules/menu'
import restaurants from './modules/restaurants'
import faq from './modules/faq'
import modals from './modules/modals'
import offer from './modules/offer'
import reviews from './modules/reviews'
import vacancies from './modules/vacancies'
import policy from './modules/policy'
import seoContent from './modules/seoContent'
import basket from './modules/basket'
import map from './modules/map'

export const store = new Vuex.Store({
    state: {},
    getters: {},
    mutations: {},
    actions: {},
    modules: {
        stock, menu, restaurants, faq, modals, offer, reviews, vacancies, policy, seoContent, basket, map
    },
});
