import { useEffect, useState } from 'react'
import './index.css'

import { ImageSlider } from './ImageSlider'
import imageData from '../../../data/ImageData'
const index = () => {
     const [slides , setSLides] = useState([])
     useEffect(()=>{
        setSLides(imageData)
     },[])
  return (
    <div>
        <ImageSlider slides={slides} autoplay={true}/>
    </div>
  )
}

export default index
