import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import '../Animate/Animate.css'
import './Base.css'; 
import { fetchOneProduct } from '../http/productAPI';
const API_URL = 'http://localhost:5000/'
const Base = () => {

    const [product, setProduct] = useState({info: []})
    const {id} = useParams()
  
    useEffect(() => {
      fetchOneProduct(id).then(data => setProduct(data))
},[])

  return (
    <>
    <div  className="headerpoFirst">
      {product && (
        <>
  <div>
        <h1>{product.name}</h1>
        </div>

        <br/>
        
      </>
      )
      
}


</div>
<div className='headermain7'>
<img className="img-prod1"  src={API_URL + product.img}></img>
</div>

<div className='headermain6'>
<p>Описание {product.desc}</p>
</div>
<div className='headermain6'>
<p> Стоимость {product.cost} рублей</p>
</div>
<div className='headermain5'>
                <button className='buttonMore' >

                    <div className='textDec'>Добавить в корзину</div></button>

            </div>

            <div className='headermainclose'></div>
</>
   
  )
};

export default Base;