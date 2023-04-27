import Home from "../pages/Home"
import NotFound from "../pages/NotFound"
import Delivery from "../pages/Delivery"
import Restaurants from "../pages/Restaurants";
import Stock from "../pages/Stock";

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
        path: '/:city/delivery',
        Component: Delivery
    },
    {
        path: '/:city/restaurants',
        Component: Restaurants
    },
    {
        path: '*',
        Component: NotFound
    }
]
