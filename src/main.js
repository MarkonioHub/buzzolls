import { createApp } from 'vue'
import Vuex from "vuex"
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'

import { routes } from './routes'
import { store } from './store'
import './assets/styles/main.sass'

import UI from "@/UI"

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
    scrollBehavior(to) {
        if (!to.matched.some(m => m.meta.notScrollToTop)) {
            return { top: 0 }
        }
    },
})

const app = createApp(App)

UI.forEach((UI_component) => {
    app.component(UI_component.name, UI_component)
})

app.use(router)
app.use(Vuex)
app.use(store)
app.mount('#app')
