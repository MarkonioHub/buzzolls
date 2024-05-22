import Home from './pages/PageHome'
import Menu from './pages/PageMenu'
import Restaurants from './pages/PageRestaurants'
import Promo from './pages/PagePromo'
import Delivery from './pages/PageDelivery'
import About from './pages/PageAbout'
import Offer from './pages/PageOffer'
import Vacancies from './pages/PageVacancies'
import Worksheet from './pages/PageWorksheet'
import Policy from './pages/PagePolicy'
import Basket from './pages/PageBasket'

export const routes = [
    { path: '/', component: Home },
    { path: '/menu', component: Menu,
        children: [
            { path: ':category', component: Menu,
                children: [
                    { path: ':subCategory', component: Menu,
                        children: [
                            { path: ':product', component: Menu }
                        ]
                    },
                ]
            },
        ]
    },
    { path: '/restaurants', component: Restaurants },
    { path: '/promo', component: Promo },
    { path: '/delivery', component: Delivery },
    { path: '/about', component: About},
    { path: '/offer', component: Offer },
    { path: '/vacancies', component: Vacancies },
    { path: '/worksheet', component: Worksheet,
        children: [
            { path: ':vacancyName', component: Worksheet, meta: { notScrollToTop: true } }
        ]
    },
    { path: '/policy', component: Policy },
    { path: '/basket', component: Basket },
]
