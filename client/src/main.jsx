import { createContext, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import UserStore from '../Store/UserStore.js'
import ProductStore from '../Store/ProductStore.js'

export const Context = createContext(null)

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Context.Provider value={{
      user: new UserStore(),
      product: new ProductStore(),
    }}>
    <App />
    </Context.Provider>
    </BrowserRouter>
)
