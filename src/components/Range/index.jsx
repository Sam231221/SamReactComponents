import React from 'react'
// import './index.css'
import { CustomRange1 } from './CustomRange1'
import { CustomRange2 } from './CustomRange2'
import { PriceDoubleRange } from './DoubleRangeSlider/PriceDoubleRange'

const index = () => {
    return (
        <div className='content flex-column mt-5'>
            {/* <CustomRange1 />
            <br /><br />
            <CustomRange2 min={10} max={200} />
            <br />
            <br /> */}
            <h3>Price Double Range Slider</h3>
              <PriceDoubleRange min={2000} max={10000} />
        </div>
    )
}
export default index