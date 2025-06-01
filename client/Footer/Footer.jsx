import { observer } from "mobx-react-lite"
import './Footer.css'

const Footer = observer(() => {
  
    
    
    return(
        <div className='foot'>
                      <div className="footc1">
                       <p>О нас:</p>
                       <p>Компания "10 левел" занимается продажей программного обеспечения с 2021 года </p>
                       </div>
                       <div>
                        <p></p>
                       </div>
                       <div className="footc">
                       <p>Контактные данные:</p>


                       <p>Номер телефона: +79995553322 </p>
                       </div>
                       <div className="footc2">
                       <p>Адрес: г.Москва ул.Нижегородская 3а</p>
                       <p>Электронная почта: ZXCALEXEEV@gmail.com</p>
                       </div>
                       

                       
                   </div>
     
     
        
       
    )
})
export default Footer