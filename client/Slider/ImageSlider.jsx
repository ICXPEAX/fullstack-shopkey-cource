import { useState } from 'react'
import './ImageSlider.css'
const ImageSlider = ({ slides }) => {
    const [currentIndex, setCurrentUser] = useState(0)
     const goToPrevious = () => { const isFirstSlide = currentIndex === 0
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1
    setCurrentUser(newIndex)
    }
    const goToNext = () => { const isLastSlide = currentIndex === slides.length -1
        const newIndex = isLastSlide ? 0 : currentIndex + 1
        setCurrentUser(newIndex)
        }

  
        return ( 
        <>
        <div className='leftArrowStyles' onClick={goToPrevious}>❮</div>
        <div className='rightArrowStyles' onClick={goToNext}>❯</div>
        <div className='sliderStyles'style={{  backgroundImage: `url(${slides[currentIndex].url})`}}></div>
        </>
        ) 
}
export default ImageSlider