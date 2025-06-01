import { useState, useEffect, useContext } from 'react'
import { Route,Routes, Navigate} from 'react-router-dom'
import MainPage from '../MainPage/MainPage.jsx'
import Productpo from '../Product/Productpo.jsx'
import Base from '../Base/Base.jsx'
import { authRoutes, publicRoutes } from './routes.js'
import { MAIN_ROUTE } from '../utils/consts.js'
import { Context } from './main.jsx'
import { observer } from 'mobx-react-lite'

const AppRouter = observer(() => {
    const {user} = useContext(Context)
    console.log(user)
    return (
        <Routes>
            {user.isAuth && authRoutes.map(({path,Component}) =>
                <Route key={path} path={path} Component={Component} exact/>
            )}
            {publicRoutes.map(({path,Component}) =>
            
                <Route key={path} path={path} Component={Component} exact/>
            )}
        </Routes>
       

    )
})

export default AppRouter

{/* <Route exact path="/" element={<MainPage/>} />
            <Route exact path="/product" element={<Productpo/>} />
            <Route exact path='/product/:id' element={<Base/>} />
            <Route exact path="/product" element={<MainPage/>} />
            
            <Route exact path="/product" element={<MainPage/>} />
            <Route exact path="/product" element={<MainPage/>} /> */}