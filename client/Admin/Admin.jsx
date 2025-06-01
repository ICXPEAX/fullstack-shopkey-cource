import { useState, useEffect } from 'react'
import './Admin.css'
import CreateProduct from '../Models/CreateProduct.jsx'
import CreateSupplier from '../Models/CreateSupplier.jsx'
import '../Models/Windowstyle.css'
import { createCategory } from '../http/productAPI.js'
import CreateCategory from '../Models/CreateCategory.jsx'

const Admin = () => {
    const [modalInfoIsOpen, setModalInfoOpen] = useState(false)
    const [modalInfoIsOpen1, setModalInfoOpen1] = useState(false)
    const [modalInfoIsOpen2, setModalInfoOpen2] = useState(false)


const [value, setValue] = useState('')
const addCategory = () => {
    createCategory( {category: value}).then(data => {
        setValue('')
        onClose()

    })
}

    return (
        <>
            <div className='headerpoFirst'>
                <p>Админ Панель</p>

            </div>
            <div className='headerButton'>
                <button className='buttonAdd' onClick={() => setModalInfoOpen1(true)}>Добавить поставщика</button>
            </div>

            <CreateSupplier className='formadmin' isOpen={modalInfoIsOpen1} onClose={() => setModalInfoOpen1(false)}><p className='textinput1'>Добавить поставщика</p>
                <p className='textinput1'>Введите название поставищика</p>
                <input className="datainput1" placeholder='Введите название поставищика'></input>
                <p className='textinput1'>Введите почту поставищика</p>
                <input className="datainput1" placeholder='Введите почту поставищика'></input>
                <p className='textinput1'>Введите сайт поставищика</p>
                <input className="datainput1" placeholder='Введите сайт поставищика'></input>
                <button className='buttonAddPos' onClick={() => setModalInfoOpen1(false)}>Добавить</button>


            </CreateSupplier>

            <div className='headerButton'>
                <button className='buttonAdd' onClick={() => setModalInfoOpen2(true)}>Добавить категорию</button>
            </div>

            <CreateCategory className='formadmin' isOpen={modalInfoIsOpen2} onClose={() => setModalInfoOpen2(false)}><p className='textinput1'>Добавить категорию</p>
                <p className='textinput1'>Введите название категории</p>
                <input className="datainput1" value={value} onChange={e => setValue(e.target.value)} placeholder='Введите название категории'> </input>
                <button className='buttonAddPos'>Добавить</button>


            </CreateCategory>


            <div className='headerButton'>
                <button className='buttonAdd' onClick={() => setModalInfoOpen(true)}>Добавить продукт</button>
            </div>

            <CreateProduct className='formadmin' isOpen={modalInfoIsOpen} onClose={() => setModalInfoOpen(false)}>
                <p className='textinput1'>Добавить продукт</p>
                <p className='textinput1'>Введите бренд</p>
                <input className="datainput1" placeholder='Введите бренд'></input>
                <p className='textinput1'>Введите название</p>
                <input className="datainput1" placeholder='Введите название'></input>
                <p className='textinput1'>Введите цену</p>
                <input className="datainput1" placeholder='Введите цену'></input>
                <p className='textinput1'>Введите aйди категории</p>
                <input className="datainput1" placeholder='Введите категорию'></input>
                <p className='textinput1'>Введите описание</p>
                <input className="datainput1" placeholder='Введите описание'></input>
                <p className='textinput1'>Загрузите изображение</p>
                <input type='file'></input>
                <p className='textinput1'>Введите айди поставщика</p>
                <input className="datainput1" placeholder='Введите айди поставщика'></input>
                <button className='buttonAddPo'>Добавить</button>
            </CreateProduct>
            <div className='headermainclose'></div>


        </>

    )
}

export default Admin