import Admin from "../Admin/Admin"
import { ADMIN_ROUTE, BASKET_ROUTE, LOGIN_ROUTE, MAIN_ROUTE, PRODUCT_ROUTE, REGISTRATION_ROUTE, REW_ROUTE, SHOP_ROUTE } from "../utils/consts"
import Basket from "../Basket/Basket"
import MainPage from "../MainPage/MainPage.jsx"
import Productpo from "../Product/Productpo.jsx"
import Auth from "../Auth/Auth.jsx"
import Review from "../Review/Review.jsx"
import Base from "../Base/Base.jsx"

export const authRoutes = [
    {
        path: ADMIN_ROUTE,
        Component: Admin
    },
    {
        path: BASKET_ROUTE,
        Component: Basket
    },
    {
        path: REW_ROUTE,
        Component: Review
    },
]

export const publicRoutes = [
    {
        path: MAIN_ROUTE,
        Component: MainPage
    },
    {
        path: SHOP_ROUTE,
        Component: Productpo
    },
    {
        path: REGISTRATION_ROUTE,
        Component: Auth
    },
    {
        path: LOGIN_ROUTE,
        Component: Auth
    },
    {
        path: PRODUCT_ROUTE + '/:id',
        Component: Base
    },
]