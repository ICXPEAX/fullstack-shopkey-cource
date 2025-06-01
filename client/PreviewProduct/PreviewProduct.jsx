import { useState, useEffect} from 'react'
import './PreviewProduct.css'
import { PRODUCTS } from '../PreviewProduct/Product.js'
import { BrowserRouter as Router, Routes, Route,useNavigate,} from 'react-router-dom'
import Base from '../Base/Base.jsx'

const PreviewProduct = () => {

    const [product, setProduct] = useState()

    useEffect(() => {
        fetch(PRODUCTS)
        .then(res => res.json())
        .then(data => setProduct(data))
    })
    return (
    <>

    </>
    )
}

export default PreviewProduct