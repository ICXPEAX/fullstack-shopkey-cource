import { useState, useEffect, useContext } from 'react'
import Navig from '../Navig/Navig.jsx'
import Animate from '../Animate/Animate.jsx'
import './MainPage.css'
import ImageSlider from '../Slider/ImageSlider.jsx'
import '../PreviewProduct/PreviewProduct.css'
import Productpo from '../Product/Productpo.jsx'
import { BrowserRouter as Router, Routes, Route, useNavigate, Link } from 'react-router-dom'
import { PRODUCTS } from '../PreviewProduct/Product.json'
import { Context } from '../src/main.jsx'
import { fetchProduct } from '../http/productAPI.js'
import { observer } from 'mobx-react-lite'
import { PRODUCT_ROUTE, SHOP_ROUTE } from '../utils/consts.js'
const API_URL = 'http://localhost:5000/'
const MainPage = observer(() => {
    const slides = [
        { url: '../src/assets/sliderOne.jpg', title: "FirstIMG" },
        { url: '../src/assets/sliderTwo.jpg', title: "SecondIMG" },
        { url: '../src/assets/sliderThree.jpg', title: "ThirdIMG" }


    ]
    const { product } = useContext(Context)
    const navigate = useNavigate()

    useEffect(() => {
        fetchProduct(null).then(data => product.setProduct(data))

    }, [])

    return (
        <>


            <Animate />
            <div className='headermain3'>
                <p className='textDec1'>Уникальный предложения</p>
            </div>
            <div className='headermain2'>
                <div className='unicboard'><ImageSlider slides={slides} /></div>
            </div>

            <div className='headermain6'>
                <div className='textDec1'>Каталог товара</div>
            </div>
            <div className='headermain4'>




                {product.product.slice(0, 2).map(product =>
                    <div className='ProductCard' key={product.id} product={product} onClick={() => navigate(PRODUCT_ROUTE + '/' + product.id)}>
                        <div className='positionImg'><img className="img-prod" src={API_URL + product.img}></img></div>
                        <div className='positionTitle'><div className='textDec'>{product.name}</div></div>
                        <div className='positionCost'><div className='textDec'>{product.cost} рублей</div></div>
                        <button className='positionButton'><div className='textDec'>Купить</div></button> </div>

                )}

            </div>
            <div className='headermain5'>
                <button className='buttonMore' onClick={() => navigate(SHOP_ROUTE)}>

                    <div className='textDec'>Открыть каталог</div></button>

            </div>

            <div className='headermainclose'></div>




        </>



    )
})

export default MainPage