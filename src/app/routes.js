import Home from "../pages/Home"
import NotFound from "../pages/NotFound"
import Delivery from "../pages/Delivery"

export const publicRoutes = [
    {
        path: '/',
        Component: Home
    },
    {
        path: '/delivery',
        Component: Delivery
    },
    {
        path: '*',
        Component: NotFound
    }
]
