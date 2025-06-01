import { useState, useEffect,useContext } from 'react'
import '../Categories/Categories.css'
import { PRODUCTS } from '../PreviewProduct/Product';
import { Context } from '../src/main';
import { observer } from 'mobx-react-lite';



const Categories = observer( () => {
      const { product } = useContext(Context)
    





return(
    <div >
         {product.category.map(item => (
                <div 
                    className='categories' 
                    onClick={() => product.setSelectedCategory(item)} 
                    key={item.id}
                >
                    {item.category}
                </div>
            ))}
    </div>
)
})


export default  Categories