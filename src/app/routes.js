import Home from "../pages/Home"
import NotFound from "../pages/NotFound"
import Delivery from "../pages/Delivery"
import Restaurants from "../pages/Restaurants"
import Stock from "../pages/Stock"
import Policy from "../pages/Policy"
import Menu from "../pages/Menu"
import Product from "../pages/Product"

export const publicRoutes = [
    {
        path: '/',
        Component: Home
    },
    {
        path: '/:city',
        Component: Home
    },
    {
        path: '/:city/stock',
        Component: Stock
    },
    {
        path: '/:city/menu',
        Component: Menu
    },
    {
        path: '/:city/menu/:category',
        Component: Menu
    },
    {
        path: '/:city/menu/:category/:product',
        Component: Product
    },
    {
        path: '/:city/menu/:category/:subcategory',
        Component: Menu
    },
    {
        path: '/:city/menu/:category/:subcategory/:product',
        Component: Product
    },
    {
        path: '/:city/delivery',
        Component: Delivery
    },
    {
        path: '/:city/restaurants',
        Component: Restaurants
    },
    {
        path: '/:city/policy',
        Component: Policy
    },
    {
        path: '/:city/*',
        Component: NotFound
    },
    {
        path: '*',
        Component: NotFound
    }
]
