import { HOME_ROUT, LOGIN_ROUT, REGISTER_ROUT, MOVIE_ROUT, ABOUT_ROUT, CATEGORIES_ROUT, PROFILE_ROUT } from "./utils/consts_rout"
import Auth from "./pages/Auth"
import Home from "./pages/Home"
import About from "./pages/About"
import Profile from "./pages/Profile"
import Categories from "./pages/Categories"
import Movie from "./pages/Movie"

export const authRoutes = [
    {
        path: HOME_ROUT,
        Component: Home
    },
    {
        path: PROFILE_ROUT,
        Component: Profile
    }
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
    {
        path: ABOUT_ROUT,
        Component: About
    },
    {
        path: MOVIE_ROUT,
        Component: Movie
    },
    {
        path: CATEGORIES_ROUT,
        Component: Categories
    },
    // {
    //     path: PRODUCT_ROUT + '/:id',
    //     Component: ProductCard
    // }
]