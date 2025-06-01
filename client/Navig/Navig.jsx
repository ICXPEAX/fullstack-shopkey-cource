import { useContext, useState } from 'react'
import { BrowserRouter as Router, Routes, Route,useNavigate} from 'react-router-dom'
import './Navig.css'
import './Navig.js'
import App from '../src/App.jsx'
import MainPage from '../MainPage/MainPage.jsx'
import Productpo from '../Product/Productpo.jsx'
import { Context } from '../src/main.jsx'
import { observer } from 'mobx-react-lite'
import { ADMIN_ROUTE, BASKET_ROUTE, LOGIN_ROUTE, MAIN_ROUTE, REGISTRATION_ROUTE, REW_ROUTE, SHOP_ROUTE } from '../utils/consts.js'
let page1 = "основная страница"
let page2 = "Продукты"
let page3 = "Отзывы"
let page4 = "Корзина"
let page5 = "Авторизация"
let page6 = "Выйти"
let page7 = "Админ"
const Navig = observer(() => {
    const {user} = useContext(Context)
    const [modalVideo, setVideo] = useState(false)
    const navigate = useNavigate()
    const logOut = () => {
        user.setUser({})
        user.setIsAuth(false)
    }
    return(
       
      <nav>
            <div className='topnav'>
                {user.isAuth ?
               <ui className='bar'>
                    <img src="./src/assets/icon.png" height={60} width={50} isVideo={modalVideo} onClick={() => setVideo(true)}></img>
                    <button onClick={() => navigate(MAIN_ROUTE)}>{page1}</button>
                    <button onClick={() => navigate(SHOP_ROUTE)}>{page2}</button>
                     <button onClick={() => navigate(REW_ROUTE)}>{page3}</button>
                    <button onClick={() => navigate(BASKET_ROUTE)}>{page4}</button>
                    <button onClick={() => navigate(ADMIN_ROUTE)}>{page7}</button>
                    <button onClick={() => logOut()}>{page6}</button>

                    
                </ui>
                :
                      <ui className='bar'>
                    <img src="./src/assets/icon.png" height={60} width={50}></img>
                    <button onClick={() => navigate(MAIN_ROUTE)}>{page1}</button>
                    <button onClick={() => navigate(SHOP_ROUTE)}>{page2}</button>
                    <button onClick={() => navigate(LOGIN_ROUTE)}>{page5}</button>
                    
                </ui>
                }

              
                    
                
            </div>
            
        </nav>
        
       
    )
})
export default Navig