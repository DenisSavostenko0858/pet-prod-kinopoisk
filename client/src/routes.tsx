import { HOME_ROUT, LOGIN_ROUT, REGISTER_ROUT } from "./utils/consts_rout"
import Auth from "./pages/Auth"
import Home from "./pages/Movie"

export const authRoutes = [
    {
        path: HOME_ROUT,
        Component: Home
    },
    // {
    //     path: BASKET_ROUT,
    //     Component: Basket
    // }
]

export const publicRoutes = [
    {
        path: HOME_ROUT,
        Component: Home
    },
    {
        path: LOGIN_ROUT,
        Component: Auth
    },    
    {
        path: REGISTER_ROUT,
        Component: Auth
    },
    // {
    //     path: PRODUCT_ROUT + '/:id',
    //     Component: ProductCard
    // }
]