import React, { useState, useContext } from 'react'
import { useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import reactLogo from './assets/react.svg'
import './App.css'
import Navig from '../Navig/Navig.jsx'
import AppRouter from './AppRouter.jsx';
import { observer } from 'mobx-react-lite';
import { check } from '../http/userAPI.js';
import { Context } from './main.jsx';
import Videobg from '../Videobg/Videobg.jsx'
import Footer from '../Footer/Footer.jsx';

let page1 = "основная страница"
let page2 = "Продукты"
let page3 = "Отзывы"
let page4 = "Возврат"

const App = observer(() => {
  const {user} = useContext(Context)

  useEffect(() => {
      check().then(data => {
          user.setUser(true)
          user.setIsAuth(true)
      })
  }, [])



  

  return (
    <div> <Videobg/>
    <div className='globalo'>
    <Navig/>
    <AppRouter/>
    <Footer/>
        </div>
        </div>
  );
});

export default App
