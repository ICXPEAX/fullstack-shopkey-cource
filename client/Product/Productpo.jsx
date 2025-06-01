import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, Link, useNavigate, data } from 'react-router-dom'
import './Productpo.css'
import '../PreviewProduct/PreviewProduct.css'
import Categories from '../Categories/Categories.jsx'
import { useContext } from 'react'
import { Context } from '../src/main.jsx'
import { PRODUCT_ROUTE } from '../utils/consts.js'
import { observer } from 'mobx-react-lite'
import { fetchCategory, fetchProduct } from '../http/productAPI.js'
const API_URL = 'http://localhost:5000/'
const Productpo = observer(() => {
 
  const { product } = useContext(Context)
  const navigate = useNavigate()

  useEffect( () => {
    fetchCategory().then(data => product.setCategory(data))
    fetchProduct(null).then(data => product.setProduct(data))
    
  }, [])
  useEffect( () => {
    fetchProduct(product.selectedCategory.id).then(data => product.setProduct(data))
  }, [product.selectedCategory])
 


  return (

    <>
      <div className='headerpoFirst'></div>
      <div className='headerpoSecondShort'><div className='textDecPo'>Каталог</div></div>
      <div className='headerpoSecondShort'><div className='textDecFilter'>Категории: </div>  <Categories/>


      </div>
   
      <div className='headerpoSecondLong'>


        <div className='allcarddisplay'>

          
          {product.product.map(product => 
           <div className='ProductCard' key={product.id} product={product} onClick={() => navigate(PRODUCT_ROUTE + '/' + product.id)}>   
           <div className='positionImg'><img className="img-prod"  src={API_URL + product.img}></img></div>
        <div className='positionTitle'><div className='textDec'>{product.name}</div></div>
        <div className='positionCost'><div className='textDec'>{product.cost} рублей</div></div>
        <button className='positionButton'><div className='textDec'>Купить</div></button> </div>

          )}

          






        </div>
      </div>

      <div className='headermainclose'></div>

    </>


  )


})

export default Productpo
