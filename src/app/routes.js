import Home from "../pages/Home"
import NotFound from "../pages/NotFound"

export const publicRoutes = [
    {
        path: '/',
        Component: Home
    },
    {
        path: '*',
        Component: NotFound
    }
]
